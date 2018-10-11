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

// PROFILE ENTRY PAGE ********************************

$("#submit-btn").on("click", function(){
    event.preventDefault();
    let firstName = $("#first-name").val().trim();
    let lastName = $("#last-name").val().trim();

    // DISABLED - ajax call to Tomcat server - need to enable server-side CORS connection

    /* $.ajax({
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
    }); */
    window.location.href = "thankyou.html"
});

// PROFILE ENTRY PAGE AND QUERY PAGE ********************

$("#add-language-btn").on("click", function(){
    $(".language-box").append(
        `
        <div class="col-6 form-group">
            <label class="form-label" for="language">Languages</label>
            <select id="language" class="form-control">
                <option></option>
                <option>French</option>
                <option>Russian</option>
                <option>Korean</option>
            </select>
        </div>
        <div class="col-6 form-group">
            <label class="form-label" for="proficiency">Language Proficiency</label>
            <select id="proficiency" class="form-control">
                <option></option>
                <option>Novice</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
        </div>
        `
    )
});

$("#add-skill-btn").on("click", function(){
    $(".health-skills-box").append(
        `
        <div class="col-6 form-group">
            <label class="form-label" for="health-comm-skills">Health Communication Skills</label>
            <select id="health-comm-skills" class="form-control form-check-label">
                <option></option>
                <option>Developing social media content and strategy</option>
                <option>Strategic communication planning</option>
                <option>Writing, editing, or creating content</option>
            </select>
        </div>
        <div class="col-6 form-group">
            <label class="form-label" for="proficiency">Skill Proficiency</label>
            <select id="proficiency" class="form-control">
                <option></option>
                <option>Novice</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
        </div>
        `
    )
});

$("#add-language-btn-admin").on("click", function(){
    $(".language-box-admin").append(
        `
        <div class="col-6 form-group">
            <label class="form-label" for="language">Languages</label>
            <select id="language" class="form-control">
                <option></option>
                <option>French</option>
                <option>Russian</option>
                <option>Korean</option>
            </select>
        </div>
        <div class="col-6 form-group">
            <label class="form-label" for="proficiency">Language Proficiency</label>
            <select id="proficiency" class="form-control">
                <option></option>
                <option>Novice</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
        </div>
        `
    )
});

$("#add-skill-btn").on("click", function(){
    $(".health-skills-box-admin").append(
        `
        <div class="col-6 form-group">
            <label class="form-label" for="health-comm-skills">Health Communication Skills</label>
            <select id="health-comm-skills" class="form-control form-check-label">
                <option></option>
                <option>Developing social media content and strategy</option>
                <option>Strategic communication planning</option>
                <option>Writing, editing, or creating content</option>
            </select>
        </div>
        <div class="col-6 form-group">
            <label class="form-label" for="proficiency">Skill Proficiency</label>
            <select id="proficiency" class="form-control">
                <option></option>
                <option>Novice</option>
                <option>Intermediate</option>
                <option>Advanced</option>
            </select>
        </div>
        `
    )
});

// THANK YOU PAGE ********************************

$("#return-btn").on("click", () => {
    window.location.href = "index.html";
})

// QUERY PAGE *************************************

$("#employee-type-select").change(() => {
    console.log("hi");
    if ($("#employee-type-select").val() === "Other") {
        $("#employee-type-other-input").prop("disabled", false);
    }
});

$("#qry-search-btn").on("click", () => {
    event.preventDefault();
    window.location.href = "query-results.html";
})

// STAFFING QUERY RESULTS PAGE ********************
$("#qry-select-btn").on("click", () => {
    event.preventDefault();
    window.location.href = "status.html";
})

// DEPLOYMENT STATUS PAGE *************************
$(document).on('click', '.confirmed-checkbox', function (){
    const id = ($(this).attr('data-target'));
    if ($(this).prop("checked")) {
        $(`${id}`).text("Confirmed");
    } else {
        $(`${id}`).text("Pending");
    }
});

// RESPONSE PAGE **********************************
let count = 3;
$("#add-response-btn").on("click", () => {
    event.preventDefault();
    $(".table-content").append(`
        <tr>
            <td class="red-text">Enter Response Name</td>
            <td class="red-text">Enter Location</td>
            <td class="red-text">Enter Language</td>
            <td class="red-text">Enter Start Date</td>
            <td></td>
            <td>
                <button data-toggle="collapse" type="button" data-target="#response-${count}-view" class="clickable">View</button>
            </td>
            <td>
                <button data-toggle="collapse" type="button" data-target="#response-${count}-edit" class="clickable">Edit</button>
            </td>
        </tr>
        <tr>
            <td class="td-toggle" colspan="7">
                <div id="response-${count}-view" class="collapse toggle-content text-center">
                    No deployments assigned for this response
                </div>
            </td>
        </tr>
        <tr>
            <td class="td-toggle" colspan="7">
                <div id="response-${count}-edit" class="collapse toggle-content">form to edit response
                    details</div>
            </td>
        </tr>
    `);
    count++;
})
