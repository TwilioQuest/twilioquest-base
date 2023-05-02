# IMPORTANT MESSAGE

TwilioQuest has found a new home as an open source educational PC game called [TerminalQuest](https://terminal.quest/).

This repository is archived indefinitely. To keep contributing to this initiative please considering visiting TerminalQuest [repository](https://github.com/TerminalQuest).

# TwilioQuest Base Extension

Base extension for the TwilioQuest game - contains Fog Owl map and common assets.

## Deploy Checklist

- Ensure you have the latest changes you want to deploy on `main`
- Increment the version number in `package.json`
  - commit this change
  - push to remote
- Run `npm publish`
  - If you do not have access to this package contact Ryan Kubik or Kevin Whinnery
- Once published, update the `twilioquest-base` dependency in [the twilioquest repository](https://github.com/twilio/twilioquest) to use this latest deployed version
- Ensure no changes need to happen to [the twilioquest template extension](https://github.com/twilioquest/twilioquest-extension-template)
- Release a new TwilioQuest build with updated base dependency
