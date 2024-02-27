const fields = document.querySelectorAll(".pwd");
const note = document.querySelector(".pwd-note");
const form = document.querySelector("form");

fields.forEach(element => {
  element.addEventListener("keyup", () => {
    console.log(fields[0].value);
    console.log(fields[1].value);
    if (fields[0].value != fields[1].value) {
      fields[0].classList.add("error");
      fields[1].classList.add("error");
      note.style.display = "block";
    } else {
      fields[0].classList.remove("error");
      fields[1].classList.remove("error");
      note.style.display = "none";
    }
  });
});

form.addEventListener("submit", e => {
  if (fields[0].value == fields[1].value) {
    form.submit();
  }
});