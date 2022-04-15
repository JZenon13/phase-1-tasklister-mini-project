// * As a user, I should be able to type a task into the input field.
// * As a user, I should be able to click some form of a submit button.
// * As a user, I expect to see the task string that I provided appear in the DOM
//   after the submit button has been activated.

//event listeners
document.addEventListener("DOMContentLoaded", submitHandler)= ()=> {
    const form = document.querySelector("#create-task-form");
    form.addEventListener("submit", submitHandler);
    form.reset()
}

//DOM selector

function submitHandler(e) {
  e.preventDefault();
  let li = document.createElement("li");
   li.textContent = e.target['new-task-description'].value
  let btn = document.createElement('button')
  
  btn.addEventListener('click', deleteStuff)
btn.textContent = 'x'
  
  document.querySelector("#tasks").append(li);
    li.appendChild(btn)

  function deleteStuff(e) {
    e.target.parentNode.remove()
  }
}
