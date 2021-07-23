const path = require('path');
const jetpack = require('fs-jetpack');
const v4 = require('uuid/v4');
const { executeCodeString } = require('../../validation');

module.exports = async helper => {
  helper.success(`
    Bridge Extended!
  `);
};
