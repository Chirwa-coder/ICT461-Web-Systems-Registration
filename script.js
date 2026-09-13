const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const email = document.getElementById("email").value.trim();
    const course = document.getElementById("course").value;
    const registrationType = document.querySelector(
        'input[name="registrationType"]:checked'
    );

    if (studentName === "") {
        message.textContent = "Please enter your student name.";
        return;
    }

    if (studentId === "") {
        message.textContent = "Please enter your student ID.";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter your email address.";
        return;
    }

    if (course === "") {
        message.textContent = "Please select a course.";
        return;
    }

    if (!registrationType) {
        message.textContent = "Please select a registration type.";
        return;
    }

    message.textContent =
        "Registration successful! You have registered for ICT461.";
});