const inputBox = document.getElementById("inputBox");
const tasks = document.getElementById("tasks");
const unchecked = "fa-regular fa-circle";
const checked = "fa-regular fa-check-circle";
const trash = "fa-solid fa-trash";

//* Enter keypress event
inputBox.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        if(inputBox.value === ""){
            alert("Please enter a task");
            //console.log("1");   //? Testing the input
        }
        else{
            addTask();
            inputBox.value = "";
            //console.log("2");   //? Testing the input
        }
    }
},false);

//* Button click event
function addTask(){
    if(inputBox.value === ""){
        alert("Please enter a task");
        //console.log("3");   //? Testing the input
    }
    else{
        const task = newTask(inputBox.value);
        tasks.appendChild(task);
        //console.log("4");   //? Testing the input
    }
}

//* Add a task to the list
function newTask(value){
    const list = document.createElement("li");
    const licircle = document.createElement("i");
    const litrash = document.createElement("i");
    const text=document.createTextNode(value);
    licircle.classList = unchecked;
    litrash.classList = trash;
    list.appendChild(licircle);
    list.appendChild(text);
    list.appendChild(litrash);
    inputBox.value = "";
    //console.log("5");   //? Testing the input
    return list;
}

//* Trash click event
tasks.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        if(e.target.classList.contains("checked")){
            e.target.childNodes[0].classList.remove("fa-circle");
        e.target.childNodes[0].classList.add("fa-check-circle");
        }
        else{
            e.target.childNodes[0].classList.remove("fa-check-circle");
            e.target.childNodes[0].classList.add("fa-circle");
        }
        
    }
    else if(e.target.tagName === "I"){
        e.target.parentElement.remove();
    }
    storeData();
    //console.log("6");   //? Testing the input
},false);

//* Store the data locally
function storeData(){
    localStorage.setItem("data", tasks.innerHTML);
    //console.log("7");   //? Testing the input
}

//* Show the local stored data
function showTask(){
    tasks.innerHTML = localStorage.getItem("data");
    //console.log("8");   //? Testing the input
}
showTask();


//! To delete the data from localStorage when needed;
// function deleteTask(){
//     localStorage.removeItem("data");
//     tasks.innerHTML = "";
// }
// deleteTask();