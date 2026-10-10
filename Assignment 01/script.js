// Store student details
var student = {};


// Page 1 - Student Details
document.getElementById("nextButton").addEventListener("click", function() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var rollNo = document.getElementById("rollNo").value;
    var course = document.getElementById("course").value;

    var message = document.getElementById("message");

    // Validate student details
    if (name == "" || email == "" || rollNo == "" || course == "") {
        message.innerHTML = "Please fill all the student details.";
        return;
    }

    // Store student details in object
    student.name = name;
    student.email = email;
    student.rollNo = rollNo;
    student.course = course;

    message.innerHTML = "";

    // Move to Page 2
    document.getElementById("page1").style.display = "none";
    document.getElementById("page2").style.display = "block";
});


// Page 2 - Back button
document.getElementById("backButton").addEventListener("click", function() {

    document.getElementById("page2").style.display = "none";
    document.getElementById("page1").style.display = "block";

});


// Page 2 - Calculate Result
document.getElementById("resultButton").addEventListener("click", function() {

    var python = Number(document.getElementById("python").value);
    var dsa = Number(document.getElementById("dsa").value);
    var database = Number(document.getElementById("database").value);
    var maths = Number(document.getElementById("maths").value);
    var ai = Number(document.getElementById("ai").value);
    var linux = Number(document.getElementById("linux").value);
    var communication = Number(document.getElementById("communication").value);
    var fullstack = Number(document.getElementById("fullstack").value);

    var marksMessage = document.getElementById("marksMessage");

    // Validate marks
    if (
        python < 0 || python > 100 ||
        dsa < 0 || dsa > 100 ||
        database < 0 || database > 100 ||
        maths < 0 || maths > 100 ||
        ai < 0 || ai > 100 ||
        linux < 0 || linux > 100 ||
        communication < 0 || communication > 100
        || fullstack < 0 || fullstack > 100
    ) {
        marksMessage.innerHTML = "Please enter marks between 0 and 100.";
        return;
    }

    // Calculate total
    var total =
        python +
        dsa +
        database +
        maths +
        ai +
        linux +
        communication +
        fullstack;

    // Calculate percentage
    var percentage = total / 8;

    // Check Pass or Fail
    var status;

    if (
        python >= 40 &&
        dsa >= 40 &&
        database >= 40 &&
        maths >= 40 &&
        ai >= 40 &&
        linux >= 40 &&
        communication >= 40 &&
        fullstack >= 40
    ) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    // Add marks to student object
    student.marks = {
        pythonSQL: python,
        dsa: dsa,
        databaseSystems: database,
        mathematicalFoundations: maths,
        agenticAI: ai,
        linuxGit: linux,
        businessCommunication: communication,
        fullStack: fullstack
    };

    student.total = total;
    student.percentage = percentage;
    student.result = status;

    // Convert object to JSON
    var studentJSON = JSON.stringify(student);

    // Store JSON in Local Storage
    localStorage.setItem("studentResult", studentJSON);

    // Display student details
    document.getElementById("studentDetails").innerHTML =
        "<div class='student-info'>" +
        "<p><b>Name:</b> " + student.name + "</p>" +
        "<p><b>Email:</b> " + student.email + "</p>" +
        "<p><b>Roll Number:</b> " + student.rollNo + "</p>" +
        "<p><b>Course:</b> " + student.course + "</p>" +
        "</div>";


    // Display subject marks
    document.getElementById("result").innerHTML =

        "<div class='result-box'>" +

        "<div class='result-row'>" +
        "<span>Python + SQL Programming</span>" +
        "<span>" + python + "</span>" +
        "</div>" +

        "<div class='result-row'>" +
        "<span>Data Structures & Algorithms</span>" +
        "<span>" + dsa + "</span>" +
        "</div>" +

        "<div class='result-row'>" +
        "<span>Database Systems — SQL + NoSQL</span>" +
        "<span>" + database + "</span>" +
        "</div>" +

        "<div class='result-row'>" +
        "<span>Mathematical Foundations for AI</span>" +
        "<span>" + maths + "</span>" +
        "</div>" +

        "<div class='result-row'>" +
        "<span>Agentic AI Foundations</span>" +
        "<span>" + ai + "</span>" +
        "</div>" +

        "<div class='result-row'>" +
        "<span>Linux, Git & Dev Tooling</span>" +
        "<span>" + linux + "</span>" +
        "</div>" +

        "<div class='result-row'>" +
        "<span>Business Communications</span>" +
        "<span>" + communication + "</span>" +
        "</div>" +

        "<div class='result-row'>" +
        "<span>Full Stack Development</span>" +
        "<span>" + fullstack + "</span>" +
        "</div>" +

        "</div>";


    // Display final result
    document.getElementById("summary").innerHTML =

        "<div class='summary'>" +
        "<p><b>Total Marks:</b> " + total + " / 800</p>" +
        "<p><b>Percentage:</b> " + percentage.toFixed(2) + "%</p>" +
        "<p><b>Result:</b> <span class='" +
        (status == "Pass" ? "pass" : "fail") +
        "'>" + status + "</span></p>" +
        "</div>";


    // Move to Page 3
    document.getElementById("page2").style.display = "none";
    document.getElementById("page3").style.display = "block";

    marksMessage.innerHTML = "";
});


// Register another student
document.getElementById("newStudentButton").addEventListener("click", function() {

    document.getElementById("studentForm").reset();
    document.getElementById("marksForm").reset();

    student = {};

    document.getElementById("page3").style.display = "none";
    document.getElementById("page1").style.display = "block";

});