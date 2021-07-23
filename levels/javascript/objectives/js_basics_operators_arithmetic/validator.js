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

module.exports = async helper => {
  try {
    const { program } = await getAnalyzedCode('js_basics_operators_arithmetic');

    // Examine the program to look for the stuff we want
    function checkForVariable(name, left, operator, right) {
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
                } catch (e) {
                  // no op
                }
              } else if (declaration.init.type === 'BinaryExpression') {
                // Assume we are comparing literal values
                found =
                  declaration.init.left.value === left &&
                  declaration.init.operator === operator &&
                  declaration.init.right.value === right;
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
        Oops! Check your program one more time. It should have an operation variable
        <strong>${name}</strong> set to 
        <strong>${correctValue}</strong>.
      `);
    }

    // Check variable values
    if (!checkForVariable('sum', 3.2, '+', 4)) {
      complainAbout('sum', '3.2 + 4');
    }

    if (!checkForVariable('difference', 0.1, '-', 5)) {
      complainAbout('difference', '0.1 - 5');
    }

    if (!checkForVariable('product', 4, '*', 5)) {
      complainAbout('product', '4 * 5');
    }

    if (!checkForVariable('quotient', 4.5, '/', 9)) {
      complainAbout('quotient', '4.5 / 9');
    }

    if (!checkForVariable('remainder', 22, '%', 4)) {
      complainAbout('remainder', '22 % 4');
    }

    // If we made it here, we're good!
    helper.success(`
      Great job! You successfully used all 5 of the arithmetic operators!
    `);
  } catch (e) {
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
