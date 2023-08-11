const toggleBtn = document.querySelector(".sidebar-toggle");

const closeBtn = document.querySelector(".close-btn");

const sidebar = document.querySelector(".sidebar");

// toggleBtn.addEventListener("click", function () {
//   if (sidebar.classList.contains("show-sidebar")) {
//     sidebar.classList.remove("show-sidebar");
//   } else {
//     //remember no need for '.' classList already knows.
//     sidebar.classList.add("show-sidebar");
//   }
// });

//Have to toggle classList not the element itself.

toggleBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  //remove showing it, not the element itself
  sidebar.classList.remove("show-sidebar");
});
