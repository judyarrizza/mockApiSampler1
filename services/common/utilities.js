module.exports = {
  callDump: req => {
        console.log('\n==========================================');
        console.log(req.method + ': ' + req.originalUrl);
        console.log('HEADERS: ');
        console.log (req.headers);
        console.log('BODY: ');
        console.log(req.body);
        console.log('PARAMS: ');
        console.log(req.params);
        console.log('QUERY: ');
        console.log(req.query);
    }
};
