const $ = (s)=>document.querySelector(s);
const nav = $("#mainNav");
$(".menu-toggle").addEventListener("click", ()=>nav.classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
$("#year").textContent = new Date().getFullYear();

const galleryFiles = [
  "project-01.jpg","project-02.jpg","project-03.jpg","project-04.jpg",
  "project-05.jpg","project-06.jpg","project-07.jpg"
];
$("#gallery").innerHTML = galleryFiles.map((f,i)=>
  `<div class="gallery-item"><img loading="lazy" src="assets/images/${f}" alt="Aram Essentials project ${i+1}"></div>`
).join("");

const videoFiles = [
  "project-video-01.mp4","project-video-02.mp4","project-video-03.mp4",
  "project-video-04.mp4","project-video-05.mp4"
];
$("#videoGrid").innerHTML = videoFiles.map((f,i)=>
  `<article class="video-card"><video controls preload="metadata" src="assets/videos/${f}"></video><p>Project Video ${i+1}</p></article>`
).join("");

$("#serviceForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const data = new FormData(e.target);
  const ref = "AEL-" + new Date().getFullYear() + "-" + Math.floor(10000 + Math.random()*90000);
  localStorage.setItem("lastAramRequest", JSON.stringify({ref, data:Object.fromEntries(data.entries())}));
  const result = $("#formResult");
  result.style.display = "block";
  result.innerHTML = `<strong>Request submitted locally.</strong><br>Your Project Reference: <b>${ref}</b><br><small>Connect this form to your email, WhatsApp, database or backend before using it as a live lead system.</small>`;
  e.target.reset();
  result.scrollIntoView({behavior:"smooth",block:"center"});
});