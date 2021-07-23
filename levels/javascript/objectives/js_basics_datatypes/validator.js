const { deepEqual } = require('assert');
const { getAnalyzedCode, NiceError } = require('../../validation');

// Helper to convert an Esprima ObjectExpression to a regular object
// Only works on key/value pairs with literal values, no nested objects
function expressionToObject(objectExpression) {
  const obj = {};
  objectExpression.properties.forEach(property => {
    obj[property.key.name] = property.value.value;
  });
  return obj;
}

module.exports = async (helper) => {
  try {
    const { program } = await getAnalyzedCode('js_basics_datatypes');

    // Examine the program to look for the stuff we want
    function checkForVariable(name, value) {
      let found = false;
      program.body.forEach(statement => {
        if (statement.type === 'VariableDeclaration') {
          statement.declarations.forEach(declaration => {
            if (declaration.id.name === name) {
              // We found a variable of the same name, now check value
              if (declaration.init.type === 'ArrayExpression') {
                // Check sameness of array by length and membership
                const test = declaration.init.elements;
                if (test.length === value.length) {
                  let pass = true;
                  test.forEach(element => {
                    if (!value.includes(element.value)) {
                      pass = false;
                    }
                  });
                  found = pass;
                }
              } else if (declaration.init.type === 'ObjectExpression') {
                // Check sameness using assert deepEqual
                const testObject = expressionToObject(declaration.init);
                console.log(testObject);
                try {
                  deepEqual(value, testObject);
                  found = true;
                } catch(e) {
                  // no op
                }
              } else {
                // Assume we are comparing literal values
                found = declaration.init.value === value;
              }
            }
          });
        }
      });
      return found;
    }

    // Helper to generate error message
    function complainAbout(name, correctValue) {
      throw new NiceError(`
        Oops! Check your program one more time. It should have a variable
        <strong>${name}</strong> set to 
        <strong>${correctValue}</strong>.
      `);
    }

    // Check variable values
    if (!checkForVariable('awesomeString', 'I love strings')) {
      complainAbout('awesomeString', '"I love strings"');
    }

    if (!checkForVariable('luckyNumber', 777)) {
      complainAbout('luckyNumber', 777);
    }

    if (!checkForVariable('mulletLooksGood', false)) {
      complainAbout('mulletLooksGood', false);
    }

    const daBulls = ['MJ', 'Scottie', 'Dennis', 'Ron', 'Steve'];
    if (!checkForVariable('daBulls', daBulls)) {
      complainAbout('daBulls', '<br/>' + JSON.stringify(daBulls, null, 1));
    }

    const batmanObject = {
      name: 'Bruce Wayne',
      age: 44,
      alias: 'Batman'
    };
    if (!checkForVariable('batmanObject', batmanObject)) {
      complainAbout('batmanObject', 
        `an object as described in the tutorial and code comments`);
    }

    // If we made it here, we're good!
    helper.success(`
      Great job! You successfully created variables for all five JavaScript
      data type all-stars.
    `);
  } catch(e) {
    console.log(e);
    if (e.name === 'NiceError') {
      helper.fail(e.message);
    } else {
      helper.fail(`
        Sorry! There was a problem validating your code. Please try again.
      `);
    }
  }
};
