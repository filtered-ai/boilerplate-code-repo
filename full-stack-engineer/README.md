# Full Stack Engineer

## Steps to create new libs / update default code
All libs in this PR are based on this image: https://www.googleapis.com/compute/v1/projects/filtered-theia/global/images/full-stack-v3, except the `Spring-boot-app`.

#### Explanation
1. We have a base full stack image on google side, called `full-stack-v3`.
2. Upon machine start, we will download the default code from [github](https://github.com/filtered-ai/boilerplate-code-repo/tree/main/full-stack-engineer) 
3. Then we will start the vscode in the folder.

#### Update existing default code.
Simply go to https://github.com/filtered-ai/boilerplate-code-repo/tree/main/full-stack-engineer and update the code here.
* Except `Spring-boot-app`, because the way we start spring-boot-app is different due to eclipse limitation.

#### Create new libs based on full-stack-v3 image
1. Create a new folder under [boilerplate-code-repo/full-stack-engineer/](https://github.com/filtered-ai/boilerplate-code-repo/full-stack-engineer/), for example `/newCode-app`
2. Update the default code under `/newCode-app`.
3. Create a `newCode-app.sh` startup script on main-app side `Filtered/api-service/FilteredSharedFiles/workspace-scripts/vnc/auto-start-apps/newCode-app.sh`
4. Create a new document on `rdsAutoStartAppCollection` and `workspaceLibCollection` by following the same pattern [below](https://github.com/filtered-ai/FilteredSharedFiles/pull/872).
5. All set.
