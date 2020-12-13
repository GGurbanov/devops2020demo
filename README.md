# 👋 Getting Started

This repo demostrates how you can deploy a front-end application from any git branch. You might need such behavior to view/test your PR's before merging to main branch.

Currently this application is available at http://devops2020demo.s3-website.eu-central-1.amazonaws.com

## 🛠️ Used tools

- [Create React App](https://github.com/facebook/create-react-app) was used to create an application
- [{JSON} Placeholder](https://jsonplaceholder.typicode.com/) was used as a fake REST API
- [CircleCI](https://circleci.com/) was used as a CI/CD platform
- [AWS S3](https://aws.amazon.com/s3/) was used as a static website hosting

## 🔬 Example

1. Create a branch `<branch_name>` from `master`
2. Checkout to newly created branch and make any changes, for example change title in `/public/index.html` (feel free to change any file inside `/src` folder)
3. Add `.auto-deploy` file to root (next to `package.json`). Yes it's an empty file with no extention
4. Commit and push changes to GitHub.
5. Head over to [CircleCI dashboard](https://app.circleci.com/pipelines/github/GGurbanov/devops2020demo) and wait untill `autodeploy` job finishes. It will automatically create a folder (with the same name as your `<branch_name>`) and upload built project there.
6. Navigate to `http://devops2020demo.s3-website.eu-central-1.amazonaws.com/autodeploy/<branch_name>` - enjoy changes! 🥳

You can notice that GitHub doesn't allow PR to be merged to `master` with `.auto-deploy` file in it - [see this example PR](https://github.com/GGurbanov/devops2020demo/pull/4). The reason is that `ensure_autodeploy_file_absence` job marked as required and it will always fail if you include `.auto-deploy` file to your PR. As you can guess you'll need to remove `.auto-deploy` file from PR, this will also remove appropriate folder from AWS S3.
