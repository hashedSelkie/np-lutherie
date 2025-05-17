# np-lutherie
Website for luthier N. Poots

## Workflow setup

### Environments

Navigate to this repo's `Settings` - `Environments` and create the following environments:

- `test`
    - Don't set `Required reviewers` because we want to deploy to test automatically
- `prod`
    - Set `Required reviewers`
    - Untick `Allow administrators to bypass configured protection rules`

### Secrets and variables

Navigate to this repo's `Settings` - `Secrets and variables` - `Actions`. Create a `New Repository Secret` for all of the following:

- `DOCKERHUB_TOKEN` and `DOCKERHUB_USERNAME`
    - These are to allow workflows to push images to Dockerhub
    - Generate these from DockerHub - `Account Settings` - `Personal access tokens`
        - Generate a PAT with `Read & Write` permissions
        - Once created, set `DOCKERHUB_TOKEN` and `DOCKERHUB_USERNAME` from the values shown
- `SITE_ROOT_PAT`
    - This allows workflows in this repo to commit to the `site-root` repo
    - Generate this from Github - your profile image - `Settings` - `Developer settings` - `Personal access tokens` - `Fine-grained tokens`
        - For Repository access, choose `Only select repositories` and select `such-a-scorpio-site-root`
        - For `Permissions` - `Repository permissions`:
            - Select `Read and write` for `Contents`
