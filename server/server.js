const http = require('http');
const config = require('./configuration');
const Application = require('./web-api/app');
const Database = require('./data-access/database');
const logger = require('./shared/logger');

class Server {
    constructor() {
        this.app = new Application(config);
        this.server = http.Server(this.app.ExpressApp);
    }

    start() {
        Database.connect()
            .then(() => this.startServer())
            .catch(err => {
                logger.error(err.message);
            });
    }

    startServer() {
        this.server.listen(config.get('port'), () => {
            logger.info('Application is listening on port ' + config.get('port'));
        });
    }
}

const server = new Server();
server.start();
