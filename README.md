# Hackathon Project

GIT Clone this repo and follow the below steps to setup the project.

> Pre-requisites for installation

Install Node.js® and NPM if they are not already on your machine.
Verify that you are running at least Node.js version 10.x and npm version 6.x or greater by running node -v and npm -v in a terminal/console window

> Create AWS Account. 

If you don’t already have an AWS account, you’ll need to create one in order to follow the steps outlined in this tutorial.

> Install VUE CLI
```
npm install -g @vue/cli
```

> Install Packages:
```
npm install
npm rebuild node-sass
```

> Install the Amplify CLI

The Amplify Command Line Interface (CLI) is a unified toolchain to create AWS cloud services for your app. Let’s go ahead and install the Amplify CLI.
```
npm install -g @aws-amplify/cli
amplify configure --usage-data-off
```

> Configure Amplify by running the following command:
```
amplify configure
```
amplify configure will ask you to sign into the AWS Console.

Once you’re signed in, Amplify CLI will ask you to create an IAM user.
```
Specify the AWS Region
region:  # Your preferred region

Specify the username of the new IAM user:
user name:  # User name for Amplify IAM user
```
Complete the user creation using the AWS console

> Create a user with AdministratorAccess to your account to provision AWS resources for you like AppSync, Cognito etc.

Once the user is created, Amplify CLI will ask you to provide the accessKeyId and the secretAccessKey to connect Amplify CLI with your newly created IAM user.

```
Enter the access key of the newly created user:
accessKeyId:  # YOUR_ACCESS_KEY_ID
secretAccessKey:  # YOUR_SECRET_ACCESS_KEY
This would update/create the AWS Profile in your local machine
Profile Name:  # (default)
```
Successfully set up the new user.

> Work within your frontend project:
```
amplify init
```

> Add Authentication
```
amplify add auth
```

```
Do you want to use the default authentication and security configuration? 
❯ Default configuration 
  Default configuration with Social Provider (Federation) 
  Manual configuration 
  I want to learn more.
```
