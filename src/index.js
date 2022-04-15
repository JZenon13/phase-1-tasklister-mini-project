document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", handleForm);
  console.log(form);
  form.reset();
});

const handleForm = function handleForm(e) {
  e.preventDefault();

  let taskList = document.createElement("li");
  taskList.textContent = e.target["new-task-description"].value;
  let btn = document.createElement("button");
  btn.addEventListener("click", deleteStuff);
  btn.textContent = " X ";
  taskList.appendChild(btn);

  document.getElementById("tasks").append(taskList);

  function deleteStuff(e) {
    e.target.parentNode.remove();
  }
};
// document.addEventListener("DOMContentLoaded", () => {
//   document
//     .getElementById("create-task-form")
//     .addEventListener("submit", (e) => {
//       e.preventDefault();
//       taskDescription(e.target["new-task-description"].value);
//       // taskDescription(e.target.tasks);
//     });
// });

// function taskDescription(text) {
//   let li = document.createElement("li");
//   li.textContent = text;
//   console.log(taskDescription());
// }
