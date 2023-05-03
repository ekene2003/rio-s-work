function singleelem(elem) {
     return document.querySelector(elem);
}
function multielem(elem) {
     return document.querySelectorAll(elem);
}
let toogleArea = singleelem(".toogle");
let lightModeBtn = singleelem(".light");
let darkModeBtn = singleelem(".dark");
let toogleBtn = singleelem(".circle");
let openBtn =  singleelem(".nav-icon");
let closeBtn = singleelem(".nav-icon2");
let nav = singleelem(".nav-wrap");
let darkBg = singleelem(".bg-section");
let aboutSection = singleelem(".about-section");
let skillSection = singleelem(".skill-section");
let projectSection = singleelem(".project-section");
let footer = singleelem(".footer");
let aboutHead = singleelem(".about-head");
let projectHead = singleelem(".project-head");
let projectBtn = multielem(".project-btn");
let footerLinks = multielem(".footer-links");
let navLinks = multielem(".nav-item");
let socials = singleelem(".socials");
let footerHead = singleelem(".get-in-touch");
let scrollBtn = singleelem(".scroll");
          let projectCards = multielem(".project");
          let modal = multielem(".modal-content");
          let projectTittle = multielem(".project-card-tittle");
openBtn.onclick = () => {
     openBtn.style.display = "none";
     nav.style.left = "0";
     closeBtn.style.display = "block";
}
closeBtn.onclick = () => {
     closeBtn.style.display = "none";
     openBtn.style.display = "block";
     nav.style.left = "-100%";
}
navLinks.forEach(link => {
     link.onclick = () => {
          navLinks.forEach(elem => {
               elem.classList.remove("active-page");
          });
               link.classList.add("active-page");

     }
});
darkModeBtn.onclick = () => {
     toogleBtn.style.right = "0%";
     toogleBtn.style.left = "";
     darkBg.innerHTML = `
     <video src="./assets/videos/pexels-eberhard-grossgasteiger-857251-1620x1080-25fps.mp4" class="bg" autoplay></video>
     `;
     darkBg.style.transition = "all 2s ease-in-out 5ms";
     aboutSection.style.background = "#121212";
     projectSection.style.background = "#121212";
     footer.style.background = "#121212";
     skillSection.style.background = "lightgrey";
     socials.style.boxShadow = "none"; 
     socials.style.background = "black";
     aboutHead.style.color = "white";
     projectHead.style.color = "white";
     footerHead.style.color = "white";
     footerLinks.forEach(link => {
     link.style.color = "white";
     });
     nav.style.background = "#121212";
     navLinks.forEach(link => {
          link.style.color = "white";
     });
     modal.forEach(elem => {
          elem.style.background = "#121212";
     });
     projectTittle.forEach(tittle => {
          tittle.style.color = "white";
     });
}
lightModeBtn.onclick = () => {
     toogleBtn.style.left = "0%";
     toogleBtn.style.right = "";
     darkBg.innerHTML = `
               <video  src="./assets/videos/pexels-chris-galkowski-1987421-1920x1080-30fps.mp4" class="bg" autoplay></video>
     `;
     darkBg.style.transition = "all 2s ease-in-out 5ms";
     aboutSection.style.background = "#fbf8f5";
     projectSection.style.background = "#fbf8f5";
     footer.style.background = "#fbf8f5";
     skillSection.style.background = "#eeeeeb";
     socials.style.boxShadow = "2px 2px 6px 3px gray"; 
     socials.style.background = "black"; 
     projectBtn.forEach(btn => {
          btn.style.color = "black"; 
          btn.style.boxShadow = "2px 1px 4px 1px grey"
          
     });
     aboutHead.style.color = "black";
     projectHead.style.color = "black";
     footerHead.style.color = "black";
     footerLinks.forEach(link => {
     link.style.color = "black";
     });
     nav.style.background = "#fbf8f5";  
     navLinks.forEach(link => {
          link.style.color = "grey";
     });
          modal.forEach(elem => {
          elem.style.background = "#fbf8f5";
     });
     projectTittle.forEach(tittle => {
          tittle.style.color = "black";
     });
}
window.onscroll = () => {
     if (scrollY>450) {
     scrollBtn.style.position = "fixed";
     }
     else {
     scrollBtn.style.position = "relative";
     }
}
projectBtn.forEach(btn => {
     btn.onclick = () => {
          projectBtn.forEach(elem => {
               elem.classList.remove("active");
          });
               btn.classList.add("active");
          let category = btn.dataset.category;
          projectCards.forEach(card => {
               let type = card.dataset.type;
               if (category === "All") { 
                    card.style.opacity = "1";
                    card.style.display = "block";
               }
               else {
                    if (type === category) { 
                    card.style.opacity = "1";
                         card.style.display = "block";
                    }
                    else {
                    card.style.opacity = "0";
                         card.style.display = "none";
                    };
               }
               
               
          });
      }
     
});