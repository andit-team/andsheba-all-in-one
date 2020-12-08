
function socket( io ){
    io.on('connection', () => { 
        console.log("Socket connected--------------")
    });
}
module.exports = socket;