const {Client} = require('pg')
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const connectionData = {
    user: 'vllurhyopsaqpr',
    host: 'ec2-3-210-23-22.compute-1.amazonaws.com',
    database: 'd1li1r31987ipj',
    password: '63b6badd697c04285a388abdf37abe57f0d1bc51651d2cbf6833d0c9c02db0ce',
    port: 5432,
    ssl : true
}

const client = new Client(connectionData);
client.connect(function(err){
    if (err) throw err;
});

module.exports = client;