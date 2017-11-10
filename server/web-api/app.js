const express = require('express');
const Router = require('./router');
const bodyParser = require('body-parser');

class Application {
    constructor(config) {
        this.app = express();
        this.registerMiddlewares(this.app);

        let router = new Router(this.app);
        router.Initialize(this.app);
    }

    registerMiddlewares(app) {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(function(req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            res.setHeader('Access-Control-Allow-Credentials', true);
            next();
        });
    }

    get ExpressApp() {
        return this.app;
    }
}

module.exports = Application;
