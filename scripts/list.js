async function renderList() {
    var list
    await fetch("http://129.213.47.146:3000/api/todo").then(function (response) {
        return response.json();
    }).then(function (data) {
        list = data
    }).catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

    var todoList = document.getElementById("list")
    //console.log(list)

    for (item of list) {
        //console.log(item)
        var li = document.createElement("li")
        var listCheckbox = document.createElement("input")
        var label = document.createElement("label")
        listCheckbox.type = "checkbox"
        listCheckbox.setAttribute("onclick","toggleStatus(this)")
        label.appendChild(document.createTextNode(item.title))
        listCheckbox.id = `item-${item.id}`
        if(item.status == 'done'){
            listCheckbox.checked = true;
        }else{
            listCheckbox.checked = false;
        }
        li.appendChild(listCheckbox)
        li.appendChild(label)
        todoList.appendChild(li)
    }
}

async function toggleStatus(id){
    console.log(id)
}

async function addListElement() {
    if (!document.getElementById("addItem").value == "") {
        var inputBox = document.getElementById("addItem")
        var todoList = document.getElementById("list")

        const response = await fetch("http://129.213.47.146:3000/api/todo", {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Connection': 'keep-alive',
                'Content-Type': 'application/json'
            },
            body: `{"title": "${inputBox.value}", "status": "todo"}`,
        });
        response.json().then(data => {
            //console.log(JSON.stringify(data));
        });

        if(todoList){
            while(todoList.firstChild){
                todoList.removeChild(todoList.firstChild)
            }
        }

        renderList()
        inputBox.value = ""
        inputBox.focus()
    }
}

async function removeChecked() {
    var todoList = document.getElementById('list')
    var items = Array.from(todoList.childNodes)
    var item

    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            todoList.removeChild(item);
        }
    }
}