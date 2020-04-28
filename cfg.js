var config = {}

config.mongodb = {}
config.mongodb.hostname = process.env.MONGODB_HOSTNAME;
config.mongodb.port = process.env.MONGODB_PORT;
config.mongodb.db_name = process.env.MONGODB_DB_NAME;
config.mongodb.username = process.env.MONGODB_USERNAME;
config.mongodb.password = process.env.MONGODB_PASSWORD;

module.exports = config;
