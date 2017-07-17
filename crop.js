const fs  = require('fs');
const pagarme = fs.readFileSync('pagarme.js', 'utf-8');

const final = '{ elo:' + pagarme.split('elo:')[1].split('};')[0] + '}';
const stream = fs.createWriteStream('./bin.js');

stream.once('open', () => {
    stream.write(final);
    stream.end();
});