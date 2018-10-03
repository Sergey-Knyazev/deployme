/* var webSocket = $.simpleWebSocket({ url: 'http://alan.cs.gsu.edu:3030/' });
    
    // reconnected listening
    webSocket.listen(function(message) {
        console.log(message.text);
    });

    

$("#submit-btn").on("click", function(){
    webSocket.send({ 'text': 'hello' }).done(function() {
        // message send
    }).fail(function(e) {
        // error sending
    });
}); */

const mysql = require('mysql');
const connection = mysql.createConnection({
    host: "http://alan.cs.gsu.edu",
    user: "deployme",
    password: "Vdq124uiyR4"
  database: 'database name'
});
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected!');
});