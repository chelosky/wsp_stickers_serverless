require('dotenv').config();
const redis = require('redis');

const client = redis.createClient({
    username: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

exports.handler = async function(data) {
    try {
        await client.connect();
        await Promise.all(data.map(({ key, value }) => client.incrBy(key, value)));
        await client.disconnect();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Completed correctly!' }),
        };
    } catch (error) {
        await client.disconnect();
        return {
            statusCode: 200,
            body: JSON.stringify({ error: error.toString() }),
        };
    }
}