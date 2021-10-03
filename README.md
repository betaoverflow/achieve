<h1 align='center'>Achieve</h1>

![hacktoberfest 2021 banner](https://user-images.githubusercontent.com/76111005/135587745-7bcfee18-3fd0-47e5-be37-1def03593f9e.png)

# Prerequisites 👨‍💻

### Install Node JS
Refer to https://nodejs.org/en/ to install nodejs

## Cloning and Running the Application in local 💻

Clone the project in localhost
```bash
git clone https://github.com/betaoverflow/achieve.git
```
Install all the npm packages. Go into the `client` folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application Type the following command. Refer [here](https://github.com/betaoverflow/achieve/blob/main/client/readme.md)

The Application Runs on **localhost:8000**

### To spin up the backend server

Navigate to the `backend` project folder in a seperate terminal. Then install all npm packages
```bash
npm install 
```

If you don't have nodemon globally installed on your system, install it so the server can autorefresh 
```bash
npm install -g nodemon
```

Now it's time to spin up the backend server. Run the lines
```bash
npm run dev
```
If you get an error immediately, don't worry. The final step is to connect to the MongoDB database.

Note: The Server Runs on **localhost:8080**

## Connecting to the Database
Spin up your cluster in MongoDB and replace your connection with URI in `config/keys.js`
If you face any problems, refer to the [MongoDB](https://www.mongodb.com/blog/postquick-start-nodejs-mongodb--how-to-get-connected-to-your-database) website.


## Connecting to the Database if you haven't used MongoDB Atlas before
Install the MongoDB Node.js Driver with the following command:
```bash
npm install mongodb
```

Set up a [MongoDB Atlas Database](https://www.youtube.com/watch?v=rPqRyYJmx2g) by following this short MongoDB setup video till the *3:20* mark. Stop after that mark!

On your Cluster home page, select CONNECT > Connect your application. 
1. Select Node.js in the drop down for your driver, and select the latest version. 
1. Then, copy the connecting string (URI).
1. Paste this string as the value of mongoURI inside `config/keys.js` of this project.

Replace the `<password>` section of the string with your Database Access password. Viola, your server should now successfuly connect to MongoDB!

Create a `.env` at the root of the `backend` folder and add these

```
PORT = 
DB_CONNECTION = 
```

## Running app frontend

This project is a starting point for a Flutter application.

A few resources to get you started if this is your first Flutter project:

- [Lab: Write your first Flutter app](https://flutter.dev/docs/get-started/codelab)
- [Cookbook: Useful Flutter samples](https://flutter.dev/docs/cookbook)

For help getting started with Flutter, view our
[online documentation](https://flutter.dev/docs), which offers tutorials,
samples, guidance on mobile development, and a full API reference.


`All contributions are welcome 🎉🎉`


# Ways to contribute 🤓
1. Solve the issues which are listed
2. Create your own issue and then send PR.

Please refer to the project's style and contribution guidelines for submitting patches and additions. In general, we follow the "fork-and-pull" Git workflow.

 1. **Fork** the repo on GitHub
 2. **Clone** the project to your own machine
 3. **Commit** changes to your own branch
 4. **Push** your work back up to your fork
 5. Submit a **Pull request** so that we can review your changes
 6. We follow first-come-first-serve policy
 7. If after being assigned, we don't hear from you within three days, the issue will be unassigned.

### 🚀 Please abide by  [Contributing Guidelines](https://github.com/betaoverflow/achieve/blob/main/CONTRIBUTING.md) and [Code of Conduct](https://github.com/betaoverflow/achieve/blob/main/CODE_OF_CONDUCT.md).
