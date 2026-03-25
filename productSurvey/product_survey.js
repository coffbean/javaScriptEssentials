

const username = document.getElementById("name").value;
const age = document.getElementById("age").value;
const email = document.getElementById("email").value;
const job = document.getElementById("job").value;
const designation = document.getElementById("designation").value;
const productType = document.getElementById("productType").value;
const feedbackText = document.getElementById("feedbackText").value;
const experienceText = document.getElementById("experienceText").value;
const submitBtn = document.getElementById("submitBtn");

function submitFeedback() {
    alert("Thank you for your valuable feedback.");
    document.getElementById("userInfo").style.display = "block";
    document.getElementById("userName").innerHTML = username;
    document.getElementById("userAge").innerHTML = age;
    document.getElementById("userEmail").innerHTML = email;
    document.getElementById("userJob").innerHTML = job;
    document.getElementById("userDesignation").innerHTML = designation;
    document.getElementById("feedbackProductChoice").innerHTML = productType;
    document.getElementById("experienceProductChoice").innerHTML = productType;
    document.getElementById("userFeedback").innerHTML = feedbackText;
    document.getElementById("userExperience").innerHTML = experienceText;
}

submitBtn.onclick = submitFeedback;
document.addEventListener ("keydown", function(event) {
    if (event.key === "Enter") {
        submitFeedback();
    }
});