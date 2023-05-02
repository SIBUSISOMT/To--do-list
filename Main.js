
const input_field = document.getElementById("new-task-input");
const submit_button= document.getElementById("new-task-submit");
const output = document.getElementById("List");
const trash = document.getElementsByClassName("uil uil-airplay");
   

submit_button.addEventListener('click',(e)=>{
 e.preventDefault()
 let list = document.createElement('p')
 list.innerText= input_field.value;
 input_field.value = '';
 output.appendChild(list)

list.addEventListener('click',(e)=>{
    list.style.textDecorationColor= 'orange'
    list.style.textDecorationLine= 'line-through'


})
list.addEventListener('dblclick',()=>{
    output.removeChild(list);
})

});

