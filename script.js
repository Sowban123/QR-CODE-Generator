        // let container = document.querySelector("conatiner"),
// generateBtn = container.querySelector(".forn button");

// generateBtn.addEventListener("click",()=>{
// container.classList.add("active")

// })





















// const conatiner = document.querySelector(".container"),
// qrInput = conatiner.querySelector(".form input"),
// generateBtn = conatiner.querySelector(".form button"),
// qrImg = conatiner.querySelector(".img");
// let preValue;

// generateBtn.addEventListener("click", () => {
//     let qrValue = qrInput.value.trim();
//     if(!qrValue || preValue === qrValue) return;
//     preValue = qrValue;
//     generateBtn.innerText = "Generating QR Code...";
//     qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
//     qrImg.addEventListener("load", () => {
//         wrapper.classList.add("active");
//         generateBtn.innerText = "Generate QR Code";
//     });
// });

// qrInput.addEventListener("keyup", () => {
//     if(!qrInput.value.trim()) {
//         wrapper.classList.remove("active");
//         preValue = "";
//     }
// });









const container = document.querySelector(".container"),
      qrInput = container.querySelector(".form input"),
      generateBtn = container.querySelector(".form button"),
      qrImg = container.querySelector("#img"); 
let preValue = "";

// Event listener for generating QR code on button click
generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;  // Prevent duplicate generation for the same input
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(qrValue)}`;
    qrImg.style.display='block';

    // Ensure QR code is displayed after it loads
    qrImg.addEventListener("load", () => {
        container.classList.add("active"); // Shows the QR code
        generateBtn.innerText = "Generate QR Code";
    });
});

// Event listener for clearing QR code when input is empty
qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        container.classList.remove("active");  // Hides the QR code
        preValue = "";
        qrImg.style.display='none';

    }
});
