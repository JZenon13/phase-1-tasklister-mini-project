// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.
// As a user, I expect to see the task...
// string that I provided appear in the DOM after the submit button has been activated.

//Deliverable1
//Selectors
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener("submit", submitFormHandler);
  form.reset();
});


//Event listeners

//callbacks

function submitFormHandler(e) {
  e.preventDefault();
  let li = document.createElement("li");
  li.textContent = e.target["new-task-description"].value;
  let btn = document.createElement("button");
  btn.addEventListener("click", deleteToDo);
  btn.textContent = " X ";

  document.getElementById("tasks").append(li);
  li.appendChild(btn);
  function deleteToDo(e) {
    e.target.parentNode.remove();
  }
}
