
/*
	var addTodo = document.getElementById('addTodo');
	var ulList = document.getElementById('ulList');
	
	addTodo.addEventListener('keypress', (e) => {
		if(e.code === "Enter" && e.target.value !== ''){
			var todo = e.target.value;
			var todoList = document.createElement('li');
			
			var todoId = new Date().getTime();
			
			todoList.innerHTML = `
				<input id="${todoId}" type="checkbox">
				<label for="${todoId}">${todo}</label>
			`;
			
			ulList.append(todoList);
			
			
			addTodo.value = "";
		}
		
		
	});
	
*/
//set variables for todolist.

var addTodo = document.getElementById('addTodo');
var addTododescription = document.getElementById('addTododescription');
var addbtn = document.getElementById('addbtn');
var inputText2 = document.getElementById('inputText2');
var wrap= document.getElementsByClassName('wrap');
var headEL = document.getElementsByClassName('box1');
var para = document.getElementsByClassName('para');
var updatebtn = document.getElementById("updatebtn");
var creatId = 0, getBxId = "";


addbtn.addEventListener('click', () =>{
	var input = addTodo.value,addDes=addTododescription.value;
	
	if(input&&addDes){
		//
		var divWrap = document.createElement('div');
		divWrap.className="wrap"
		inputText2.append(divWrap);
		
		//h2 element.
		var headEL = document.createElement('h2');
		headEL.className="head";
		headEL.innerHTML = input;
		divWrap.append(headEL);
		
		//paragraph Element.
		var para = document.createElement("p");
		para.className="para";
		para.innerHTML = addTododescription.value;
		divWrap.append(para);
		
		//create edit button.
		var editButton = document.createElement('button');
		editButton.className="editbtn";
		// editButton.setAttribute('onclick','editbtn()')
		editButton.innerText="Edit";
		divWrap.append(editButton);
		
		//create delete button.
		var deleteButton = document.createElement('button');
		deleteButton.className="deletebtn";
		deleteButton.innerHTML="Delete";
		divWrap.append(deleteButton);
		
		addTodo.value = '';
		addTododescription.value = '';
		
	}else{
		alert('you must write something');
	}
	
	//function for delete button
	let delBtn=document.getElementsByClassName("deletebtn");
	for(i=0;i<delBtn.length;i++){
		delBtn[i].addEventListener("click",delEle);
	}
	
	function delEle(){
	this.parentNode.remove();
	}
	
	//fucntion for edit button.
	var editbtn=document.getElementsByClassName("editbtn");
	console.log(editbtn);
	for(i=0;i<editbtn.length;i++){
		editbtn[i].addEventListener("click",editbtns);
	}
	
});

let editbtns = function(e){
	let pEdit =e.target.parentNode;
	
	var editTitle = pEdit.getElementsByClassName('head')[0];
	var paraTitle = pEdit.getElementsByClassName('para')[0];
	addTodo.value = editTitle.innerText;
	addTododescription.value = paraTitle.innerText;
	getbxId = pEdit.id;
}


function updateBx(){
	if(getBxId != ""){
		var upbxId = document.getElementById(getBxId);
		var editTitle = upbxId.getElementsByClassName("head")[0];
		var paraTitle = upbxId.getElementsByClassName("para")[0];
		editTitle.innerText = addTodo.value;
		paraTitle.innerText = addTododescription.value;
		addbtn.classList.add("show");
		updatebtn.classList.remove("show");
	}else{
		alert("There is no update");
	}
}

updatebtn.addEventListener("click", updateBx);