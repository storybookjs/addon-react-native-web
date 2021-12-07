# Contributing to Storybook

Thanks for your interest in improving Storybook! We are a community-driven project and welcome contributions of all kinds: from discussion to documentation to bugfixes to feature improvements.

Please review this document to help to streamline the process and save everyone's precious time.


## Issues

No software is bug-free. So, if you got an issue, please follow these steps:

- Search the [issue list](https://github.com/storybookjs/addon-react-native-web/issues) for current and old issues.
  - If you find an existing issue, please UPVOTE the issue by adding a "thumbs-up reaction". We use this to help prioritize issues!
- If none of that is helping, create an issue with the following information:
  - Clear title (shorter is better).
  - Describe the issue in clear language.
  - Share error logs, screenshots and etc.
  - To speed up the issue fixing process, send us a sample repo with the issue you faced:

### Reproductions

... guide coming soon.

# Pull Requests

We welcome all contributions. There are many ways you can help us. This is few of those ways:

If you need any help, the best way is to [join the discord server and ask in the react-native channel](https://discord.gg/sMFvFsG).

Note that merging PR's will automatically cause a deploy via auto. If you don't wish for this to happen then use the skip-release label.

### Reviewing PRs

**As a PR submitter**, you should reference the issue if there is one, include a short description of what you contributed and, if it is a code change, instructions for how to manually test out the change. If your PR is reviewed as only needing trivial changes (e.g. small typos etc), and you have commit access then you can merge the PR after making those changes.

**As a PR reviewer**, you should read through the changes and comment on any potential problems. If you see something cool, a kind word never hurts either! Additionally, you should follow the testing instructions and manually test the changes. If the instructions are missing, unclear, or overly complex, feel free to request better instructions from the submitter. Unless the PR is tagged with the `do not merge` label, if you approve the review and there is no other required discussion or changes, you should also go ahead and merge the PR.

## Issue Triage

If you are looking for a way to help the project, triaging issues is a great place to start. Here's how you can help:

### Responding to issues

Issues that are tagged `question / support` or `needs reproduction` are great places to help. If you can answer a question, it will help the asker as well as anyone who has a similar question. Also in the future if anyone has that same question they can easily find it by searching. If an issue needs reproduction, you may be able to guide the reporter toward one, or even reproduce it yourself.

### Triaging issues

Once you've helped out on a few issues, if you'd like triage access you can help label issues and respond to reporters.

We use the following label scheme to categorize issues:

- **type** - `bug`, `feature`, `question / support`, `discussion`, `dependencies`, `maintenance`.
- **area** - `addon: x`, `addons-api`, `stories-api`, `ui`, etc.
- **status** - `needs reproduction`, `needs PR`, `in progress`, etc.

All issues should have a `type` label. `bug`/`feature`/`question`/`discussion` are self-explanatory. `dependencies` is for keeping package dependencies up to date. `maintenance` is a catch-all for any kind of cleanup or refactoring.

They should also have one or more `area`/`status` labels. We use these labels to filter issues down so we can see all of the issues for a particular area, and keep the total number of open issues under control.

For example, here is the list of [open, untyped issues](https://github.com/storybookjs/addon-react-native-web/issues?q=is%3Aopen+is%3Aissue+no%3Alabel). For more info see [searching issues](https://help.github.com/articles/searching-issues/) in the Github docs.

If an issue is a `bug`, and it doesn't have a clear reproduction that you have personally confirmed, label it `needs reproduction` and ask the author to try and create a reproduction, or have a go yourself.

### Closing issues

- Duplicate issues should be closed with a link to the original.
- Unreproducible issues should be closed if it's not possible to reproduce them (if the reporter drops offline,
  it is reasonable to wait 2 weeks before closing).
- `bug`s should be labelled `merged` when merged, and be closed when the issue is fixed and released.
- `feature`s, `maintenance`s, `greenkeeper`s should be labelled `merged` when merged,
  and closed when released or if the feature is deemed not appropriate.
- `question / support`s should be closed when the question has been answered.
  If the questioner drops offline, a reasonable period to wait is two weeks.
- `discussion`s should be closed at a maintainer's discretion.

## Development Guide

This project is mostly made up of the webpack config included via the `preset.js` file.

The webpack config is defined in src/webpack.ts and then typescript and babel are used to output a commonjs format of this file to the dist folder.

To run the example project first run 

```
yarn install
```

then run

```
yarn storybook
```

Currently a way to watch file changes is being worked on and will later be included here.

