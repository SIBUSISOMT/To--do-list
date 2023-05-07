
const input_field = document.getElementById("new-task-input");
const submit_button= document.getElementById("new-task-submit");
const output = document.getElementById("List");
const setDate = document.getElementById("date");
const spacing=document.getElementById('space');


submit_button.addEventListener('click',(e)=>{
 e.preventDefault()
if (input_field.value.length == 0){
    alert("Please input task");
    
} else {
     
 let list = document.createElement('p')
 list.innerText= input_field.value;
 input_field.value = ''; 
 output.appendChild(list);

list.addEventListener('click',(e)=>{
    list.style.textDecorationColor= 'orange'
    list.style.textDecorationLine= 'line-through'
})
list.addEventListener('dblclick',()=>{
    output.removeChild(list);
})
    
    let dateAndTime = setDate.value;
    list.innerHTML +="    "+"       [ "+dateAndTime+ " ]";
   

   


}});
 
