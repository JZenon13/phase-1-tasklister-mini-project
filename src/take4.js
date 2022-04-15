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