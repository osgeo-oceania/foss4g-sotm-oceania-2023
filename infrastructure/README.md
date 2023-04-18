# Webapp Infrastructure

Learning from [this](https://aws.amazon.com/blogs/containers/create-a-ci-cd-pipeline-for-amazon-ecs-with-github-actions-and-aws-codebuild-tests/) article
and intending on creating a very minimal CI/CD environment using ECR Fargate, deployed with
the AWS CDK.

# Installation and Setup

Install CDK:

`pip install aws-cdk-lib`

Make sure your AWS environment works:

`aws s3 ls`

Install dependencies:

`pip install -r requirements.txt`

# Deploy

Set up the initial CDK environment:

`cdk bootstrap`

and then create the environment:

`cdk deploy`


## Useful commands

 * `cdk ls`          list all stacks in the app
 * `cdk synth`       emits the synthesized CloudFormation template
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk docs`        open CDK documentation
