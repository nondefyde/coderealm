## CodeReal

This project is a react-based project setup from scratch using webpack(v4).

Project structure has a main `src/` folder containing the business logic of the application,
also with `__tests__` folder. Also I implemented tiny unit tests for some components' basic rendering and the sequencers.

#### Running The Code
* Run `npm install` in project directory to install dependencies
* Run `npm run dev` to start up the webpack dev server, a mini web server by webpack to serve applications
* For tests, run `npm test`

#### Deployment
In case of deployment, the package.json file's `prestart` hook bundles the application into a `build/` folder
and ready to be served by a tiny express server.
