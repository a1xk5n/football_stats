const express = require('express');
const Twitter = require('twitter');
const config = require('../../configuration');

class TwitterController {
    constructor() {
        this.router = express.Router();
        this.service = new Twitter(config.get('twitterConfig'));
        this.registerRoutes(this.router);
    }
    getTwits(req, res, next) {
        this.service
            .get('search/tweets', { q: req.body.query })
            .then(result => {
                res.send(result);
            })
            .catch(error => {
                return next(error);
            });
    }

    registerRoutes(router) {
        router.post('/', this.getTwits.bind(this));
    }

    get Router() {
        return this.router;
    }
}

module.exports = TwitterController;
