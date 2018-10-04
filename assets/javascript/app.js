/* var webSocket = $.simpleWebSocket({ url: 'http://alan.cs.gsu.edu:3030/' });
    
    // reconnected listening
    webSocket.listen(function(message) {
        console.log(message.text);
    });

    webSocket.send({ 'text': 'hello' }).done(function() {
        // message send
    }).fail(function(e) {
        // error sending
    }); */


/* 
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
}); */

$("#submit-btn").on("click", function(){
    let firstName = $("#first-name").val().trim();
    let lastName = $("#last-name").val().trim();

    $.ajax({
        url: "/deployme/test.py",
        type: "post",
        datatype: "json",
        async: false,
        data: {'firstName': firstName,'lastName': lastName, 'key':'dummyvalue'},

        success: function(response){
            console.log("yay!");
            console.log(response);
            alert(response.message);
            alert(response.keys);
        }
    });
});
