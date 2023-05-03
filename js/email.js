const contactForm = document.getElementById("contactForm"),
    serviceID = "service_8f8v3xc",
    templateID = "template_tpduhl8",
    publicKey = "5xyIdTQKiDm9-zcNV",
    btn = document.getElementById("formButton");

const sendMail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, contactForm, publicKey).then(
        function (response) {
            btn.value = "Sending...";
            console.log("SUCCESS!", response.status, response.text);
            document.getElementById("formName").value = "";
            document.getElementById("formEmail").value = "";
            document.getElementById("formSubject").value = "";
            document.getElementById("formMessage").value = "";
            window.location.href = "./thanks.html";
        },
        function (error) {
            console.log("FAILED...", error);
            alert("Submission Failed");
        }
    );
};

contactForm.addEventListener("submit", sendMail);
