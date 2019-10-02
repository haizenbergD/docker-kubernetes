const express = require('express');
const redis = require('redis');

const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits', 0);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    client.get('visits', (err, visits) => {
        res.send(`Visits ${visits}`);
        client.set('visits', +visits + 1);
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));