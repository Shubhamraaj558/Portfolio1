var typed = new Typed(".text", {
    strings: ["Frontend Developer", "AI Engineer", "Data Engineer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function validateContactForm(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all required fields!");
        return false;
    } else {
        alert(" Details Successfully Submitted!");
        setTimeout(() => {
            document.getElementById("contact-form").submit();
        }, 100);
    }
}


function isMobileDevice() {
    return /Mobi|Android|iPhone/i.test(navigator.userAgent);
}

if (isMobileDevice()) {
    document.getElementById("message-box").style.display = "flex";
}

