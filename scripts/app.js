document.addEventListener("DOMContentLoaded", () => {

   const hamburgerBtn = document.querySelector(".navigation__hamburger");
   const hamburgerSpan = hamburgerBtn.querySelector(".navigation__hamburger-bar")
   const menu = document.querySelector(".menu");

   hamburgerBtn.addEventListener("click", () => {
      hamburgerSpan.classList.toggle("menu-active");
      menu.classList.toggle("menu-active");
   })

   const menuLinks = menu.querySelectorAll(".menu__link");

   for (let link of menuLinks) {
      link.addEventListener("click", function () {
         const nav = document.querySelector(".navigation");

         nav.style.opacity = "0";

         document.body.addEventListener("wheel", function () {
            nav.style.opacity = "1";
         })

         hamburgerSpan.classList.toggle("menu-active");
         menu.classList.toggle("menu-active");
      })
   }

   const skills1 = document.querySelector(".skills1");
   const icons1 = skills1.querySelectorAll(".skills__navigation-item");
   const descriptions1 = skills1.querySelectorAll(".skills__description-item");
   for (let icon of icons1) {

      // default - first element must be visible - add class skills-active
      descriptions1[0].classList.add("skills-active");
      icons1[0].classList.add("skills__navigation-item--active");

      icon.addEventListener("click", function () {

         for (let icon of icons1) {
            icon.classList.remove("skills__navigation-item--active");
         }
         this.classList.add("skills__navigation-item--active");

         const clickedIcon = this.dataset.skill;
         for (let description of descriptions1) {
            description.classList.remove("skills-active");
            if (description.dataset.skill == clickedIcon) {
               description.classList.add("skills-active");
            }
         }
      })
   }


   const skills2 = document.querySelector(".skills2");
   const icons2 = skills2.querySelectorAll(".skills__navigation-item");
   const descriptions2 = skills2.querySelectorAll(".skills__description-item");
   for (let icon of icons2) {

      // default - first element must be visible - add class skills-active
      descriptions2[0].classList.add("skills-active");
      icons2[0].classList.add("skills__navigation-item--active");

      icon.addEventListener("click", function () {
         for (let icon of icons2) {
            icon.classList.remove("skills__navigation-item--active");
         }
         this.classList.add("skills__navigation-item--active");

         const clickedIcon = this.dataset.skill;
         for (let description of descriptions2) {
            description.classList.remove("skills-active");
            if (description.dataset.skill == clickedIcon) {
               description.classList.add("skills-active");
            }
         }
      })
   }
});