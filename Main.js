
const input_field = document.getElementById("new-task-input");
const submit_button= document.getElementById("new-task-submit");
const output = document.getElementById("List");
   

submit_button.addEventListener('click',(e)=>{
    e.preventDefault()
 let list = document.createElement('p')
 list.innerText= input_field.value;
 input_field.value = '';
 output.appendChild(list)
});
