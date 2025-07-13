let count = 0;
let seconds = 5;

let progressbar = document.querySelector("#progress-bar");
let progressPercentText = document.querySelector("#progress-text");

let inv = setInterval(() => {
    if (count <= 99) {
        count++;
        progressbar.style.width = `${count}%`;
        progressPercentText.textContent = `${count}%`;
    } else {
        document.querySelector("h2").textContent = "Downloaded";
        clearInterval(inv);
    }
}, (seconds*1000)/100);


// Chat GPT Code
// const btn = document.getElementById("start-btn");
// const bar = document.getElementById("progress-bar");
// const text = document.getElementById("progress-text");

// btn.addEventListener("click", () => {
//   let progress = 0;
//   text.textContent = "0%";
//   bar.style.width = "0%";
//   btn.disabled = true;
//   btn.textContent = "Downloading...";

//   const interval = setInterval(() => {
//     progress += Math.random() * 10; // simulate uneven speed
//     if (progress >= 100) {
//       progress = 100;
//       clearInterval(interval);
//       btn.disabled = false;
//       btn.textContent = "Download Again";
//     }

//     bar.style.width = `${progress}%`;
//     text.textContent = `${Math.floor(progress)}%`;
//   }, 300);
// });
