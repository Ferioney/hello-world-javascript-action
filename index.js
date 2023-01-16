const core = require('@actions/core')
const github = require('@actions/github')

try {
    const whoName = core.getInput('whoAreYou');
    console.log(`Hello ${whoName}!`);

    const time = (new Date()).toTimeString();
    core.setOutput("time", time)

    const payload = JSON.stringify(github.context.payload, undefined, 2);
    console.log(`The event playload: ${payload}`);
} catch (error) {
    core.setFailed(error.message)
}