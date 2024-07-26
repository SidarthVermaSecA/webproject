// document.getElementById("cards").onmousemove = (e) => {
//   for (const card of document.getElementsByClassName("card")) {
//     const rect = card.getBoundingClientRect(),
//       x = e.clientX - rect.left,
//       y = e.clientY - rect.top;

//     card.style.setProperty("--mouse-x", `${x}px`);
//     card.style.setProperty("--mouse-y", `${y}px`);
//   }
// };

document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  });
});
