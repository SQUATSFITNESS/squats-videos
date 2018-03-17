# Contributing Guidelines

Welcome to SQUATS open source initiative and thanks for your interest to contribute. 
Please go through the following steps to start contributing.


## Steps to add Feature or Bug fix 
We will follow the following workflow to accept contributions for https://github.com/SQUATSFITNESS/squats-videos
* All developments will happen on the master branch
* Developer will fork https://github.com/SQUATSFITNESS/squats-videos into their own Github repo. We will call this `upstream` repo and the forked repo as `origin`
* Developer will clone `origin` into their local box (laptop)
* For any feature or bug fix, developer will first create an [issue](https://github.com/SQUATSFITNESS/squats-videos/issues) in `upstream`
* Once the feature is approved to be developed and assigned to the developer, they will create commit(s) on their local box and push to `origin`
* Developer will then send a pull request (PR) from `origin` to `upstream`
* Upstream admin will review and accept the PR to be merged with `upstream`
* Heroku will auto deploy the changes to [test env](https://squats-videos-test-pwa.herokuapp.com/)
* Testers will test the feature/bug fix in test env
* Once the feature is well tested, admin will release the feature to [live site](https://www.squats-videos.in/)


## Detailed steps
In following sections we are going to break down the above steps in detail assuming that you are new to Git and Github. If you are already contributing to other open source projects and are aware of the process, you can ignore the following sections.

### Forking the repo to your Github account
* Before you can start contributing, you need to fork this repo into your Github account
* Go to https://github.com/SQUATSFITNESS/squats-videos
* Click on Fork at top right and select your Github account as target 
* The repo will be forked into your Github account as https://github.com/<your username>/squats-videos

## Cloning repo to your local box
* Clone your Github repo into your local box (laptop) using command: 
    ```shell
    git clone git@github.com:<your username>/squats-videos.git
    ```
* Following steps in [README.md](../README.md) to build and run the project on your local box
* Create a reference to `upstream` in your local box. This will be needed later to pull changes from `upstream`
    ```shell
    git remote add upstream git@github.com:SQUATSFITNESS/squats-videos.git
    ```

## Proposing a new feature or bug fix
* Please make sure there is an open issue related to the feature or bug
* If there isn't, please open an issue in https://github.com/SQUATSFITNESS/squats-videos/issues so we can talk about it before you invest time into the implementation
* When creating an issue follow the template that Github shows so we have enough information about your proposal
* Also join the [Slacks channel](https://squatsx.slack.com/messages/squats_open/) for detailed discussions

## Working on a feature or bug fix
* Once an issue is created and agreed to be implemented, admin will assign the issue to you to start work on
* You will make appropriate changes in the code and test it on your local box 
* You will create a commit for the changes. Preferably create only one commit per issue unless you need to create multiple commits
    ```shell
    git add .
    git commit -m"Commit message"
    ```
* Commit message should follow format
    ```
    #<issue number>: <one line description of the change made for the issue>
    ```
    Use lower case. Use words in present tense like `add`, `refactor`, etc. in the commit message
    
    e.g. of commit message ` #15: add page for unrecognised url`
* Pull changes from upstream onto your laptop
    ```shell
    git fetch upstream
    git checkout master
    git pull upstream master --rebase
    ```
* Resolve conflilcts, if any
* Push commits to origin
    ```shell
    git push origin master --force
    ```

## Pull Requests
* Once your commit is pushed to `origin`, you need to send a Pull Request (PR) to the `upstream` repo
* Go to your Github repo page and click on `New pull request` button
* Select master as the branch
* Make sure it shows a message that the changes can be merged automatically 
* Confirm to create the PR
* Admin will review the PR and may ask you to rework on any item
* If rework is needed then fix that and modify your commit and push to `origin`
* Once, all changes are fine, admin will merge your commit with `upstream`


## Deploy to test and production
* On merge of PR, Heroku will auto deploy changes to the test environment
* A tester will test the changes in the [test env](https://squats-videos-test-pwa.herokuapp.com/)
* Once approved by the tester, admin will deploy code to [live site](https://www.squats-videos.in/)
* Hurray, you just published your first change to squats-videos.in :)

## Code Style
We aim for clean, consistent code style.  We're using ESlint to check for codestyle issues. If ESlint issues are found our build will fail and we can't merge the PR. To help reduce the effort of creating contributions with this style, an [.editorconfig file](http://editorconfig.org/) is provided that your editor may use to override any conflicting global defaults and automate a subset of the style settings. You may need to enable EditorConfig's use by changing a setting or installing a plugin.  Using it is not compulsory.

## Support
You can find the team and ask questions on
[Slack](https://squatsx.slack.com/messages/squats_open/)
