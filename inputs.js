function getInfo() {
    var nameInput = document.getElementById("username");
    var name = nameInput.value;
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var ageInput = document.getElementById("age");
    var age = ageInput.value;
    if (!name || !email || !age) {
        console.error("All fields are required.");
        return;
    }
    console.log("Get Info");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Age:", age);
}
