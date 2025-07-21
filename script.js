


const myList = [
    {task: 'dinner', date: '20-02-2034'},
    {task: 'chai', date: '22-29-28'},
    {task: 'coffee', date: '02-03-26'}
]

showContent();

function showContent(){
    

    let todoListHTML = '' ;

    for(let i=0; i < myList.length; i++){
        const myListObj = myList[i];
        console.log(myListObj)
        const {task, date} = myListObj;
        let html = `
        <div>${task}</div>
        <div>${date}</div>
        <button onclick="todoList.splice(${i},1);
        showContent;" class='delete-btn'>Delete</button>
        `        
        todoListHTML += html;
    }
    
    document.querySelector('.showMe').innerHTML = todoListHTML;
}

const addToList = () => {
    const inputTask = document.querySelector('#name');
    const inputDate = document.querySelector('#taareek');
    const date = inputDate.value;
    const task = inputTask.value;
    // console.log(task);    
    // console.log(date);
    myList.push({task, date})
 

    inputTask.value = '';
    inputDate.value = '';


    showContent();
    
}

