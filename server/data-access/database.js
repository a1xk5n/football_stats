const mongoose = require('mongoose');
const config = require('../configuration');

class DatabaseService {
    static connect() {
        return mongoose.connect(config.get('mongooseUri'));
    }
}
module.exports = DatabaseService;
