console.log('%c Question 1','color:green;font-size:20px;')

localStorage.setItem('count',0);
// handles to use
let btn = document.todo_form.btn;
let not_completed =document.getElementById('show');
let completed = document.getElementById('completed');
let clear = document.todo_form.clear;

// debug
console.log(clear)

function new_el_create(entry,count){
    // checkbox create
    let new_el = document.createElement('input');
    new_el.type = 'checkbox';
    new_el.name = 'todo'+count;
    new_el.id = 'todo'+count;
    new_el.setAttribute('onclick','done_or_not(event)');
    console.log(new_el);
    console.log(typeof(count));
    // label create
    let new_label = document.createElement('label');
    new_label.htmlFor =new_el.id;
    new_label.setAttribute('name',new_el.id);
    new_label.appendChild(document.createTextNode(entry));
    console.log(new_label);

    
    // append to html page
    not_completed.appendChild(new_el);
    not_completed.appendChild(new_label);
    not_completed.appendChild(document.createElement('br'));
}

btn.onclick = () =>{
    let entry = document.todo_form.entry.value;
    console.log(entry);
    document.todo_form.entry.value = "";
    if(entry == '')
        alert("Can't insert empty item");
    else{
        // for keeping number of checkbox(for 'name' and 'id' value generate)
        let count = Number(localStorage.getItem('count'));
        count+=1;
        localStorage.setItem('count',count);
        
        new_el_create(entry,count);  //fn call to create checkboxes
        localStorage.setItem(`todo${count}`,entry); // entry in local storage
        console.log(localStorage.getItem(`todo${count}`))
        // style change on add button click
        document.todo_form.entry.focus();
        document.todo_form.clear.style.visibility ='visible';
        console.log('debug test')
        console.log(entry,count);
    }
}   


// function to manage checkbox click event
function done_or_not(ev){
    console.log(ev);
    let id = ev.target.attributes.id.value;
    let id_ev =ev.target.attributes.id;
    console.log('aa',id_ev);
    console.log(id);
    // completed.appendChild(document.getElementById(id));
    // document.getElementById(id).remove();
    console.log(document.getElementsByName(id)[1]);
    // document.getElementsByName(id)[0].remove();
    if(document.getElementById(id).checked == true)
        document.getElementsByName(id)[1].style.textDecoration = 'line-through';
    else{
        document.getElementsByName(id)[1].style.textDecoration = 'None';
        // document.getElementById(id).checked = false;
    }

}


let cnt =0;
// fn to remove all completed item
clear.onclick = () => {
    // remove 'completed task' item entry from local storage
    for(val in localStorage){
        console.log('xxxxx',val)
        if(val.includes('todo') && localStorage.getItem(val) != null){
            let check = document.getElementById(val);
            console.log(check)
        console.log(check.chcked == true )
            if(check.checked == true){
                localStorage.removeItem(val);
                console.log(check.checked);
            }
        }
        
        
    }

    let arr = [];
    // store all 'not done' tasks into an array
    for(val in localStorage){
        
        if(val.includes('todo'))
            console.log('yyyy',val);
            let tmp_var = localStorage.getItem(val);
            if(tmp_var != null && Number(tmp_var) != NaN && 
            Number(tmp_var)!= 0 && val !='count' )
                arr.push(localStorage.getItem(val))
            //new_el_create()
    }

    console.log(localStorage);
    localStorage.clear();  // clear local storage data
    console.log(localStorage);
    console.log(arr);
    localStorage.setItem('count',0);
    not_completed.innerHTML = "";
    // re generate 'not completed' task to html document
    for (str of arr){
        count = Number(localStorage.getItem('count'));
        count+=1;
        localStorage.setItem('count',count);
        new_el_create(str,count);
        localStorage.setItem(`todo${count}`,str);  
    }
    
    console.log(localStorage)
     // // not_completed.innerHTML = "";  
    // let checkboxes = document.querySelectorAll('input[type="checkbox"]');
    // // console.log(checkboxes)
    // for(el of checkboxes){
    //     // console.log(el.checked);
    //     if(el.checked === false){
    //         cnt++;
    //         console.log('e',el);
    //         localStorage.setItem(el.id,el);
    //     }
    //     console.log(localStorage.getItem(el));
     
    // }  
    // console.log('log storage',localStorage); 
    // // not_completed.innerHTML = "";   
}