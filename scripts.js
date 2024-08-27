
document.addEventListener('DOMContentLoaded', function () {
    const formContainer = document.getElementById('static-form-container');
    const popupScript = document.createElement('script');
    popupScript.src = "https://sf2df4j6wzf.s3.eu-central-1.amazonaws.com/popups/popup.js";
    document.body.appendChild(popupScript);

    popupScript.onload = function () {
        window.popupForSubscriptionsForm("https://apig.selzy.com");
    };
});


document.getElementById('redirectButton').addEventListener('click', function() {
    // Substitua pelo link desejado
    window.location.href = 'https://chat.whatsapp.com/HLutfQiUb095o6oI29HW0m';
});
