const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

/**
 * This function uses GitHub Action's standard out
 * syntax for setting outputs from steps in a running
 * job.
 *
 * Subsequent steps in the job can consume these values
 * and change their behaviour in response.
 *
 * Because these values are output to standard out,
 * they will always be converted to string values.
 *
 * @param {string} output - name of the output
 * @param {string} value - string value of the output
 */
const setOutput = (output, value) => {
  console.log(`::set-output name=${output}::${value}`);
};

// Start out setting this output as false in
// case we hit an error later on.
setOutput("isNewVersion", "false");

async function run() {
  const packagePath = path.join(process.env.GITHUB_WORKSPACE, "package.json");
  const packageInfo = require(packagePath);

  const { stdout } = await exec(`npm show ${packageInfo.name} version`);
  const version = stdout.trim();

  if (version !== packageInfo.version) {
    console.log(
      `Version for "${packageInfo.name}" has changed from "${version}" to "${packageInfo.version}". This new version will be deployed to the NPM registry in the next step.`
    );
    setOutput("isNewVersion", "true");
  } else {
    console.log(
      `Version for "${packageInfo.name}" on the NPM registry "${version}" is the same as the current one "${packageInfo.version}". The next publish step will be skipped.`
    );
  }
}

run();
