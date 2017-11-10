const config = require('../configuration');
const express = require('express');
const path = require('path');

const TwitterController = require('./controllers/twitter-сontroller');

class Router {
    constructor() {
        this._controllers = [
            {
                path: '/twits',
                controller: new TwitterController(),
            },
        ];
    }

    registerPublicMiddlewares(app) {
        app.use(express.static(__dirname + '/public'));
    }

    registerClientRouterPaths(app) {
        app.get('/*', (req, res, next) => {
            if (req.originalUrl.startsWith(config.get('apiPrefix'))) {
                return next();
            }
            return res.sendFile(path.resolve(__dirname + '/public/index.html'));
        });
    }

    registerControllers(app) {
        this._controllers.forEach(route => {
            app.use(config.get('apiPrefix') + route.path, route.controller.Router);
        });
    }

    Initialize(app) {
        this.registerPublicMiddlewares(app);
        this.registerControllers(app);
        this.registerClientRouterPaths(app);
    }
}

module.exports = Router;
