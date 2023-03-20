async function renderList() {
    var list
    await fetch("http://localhost:3000/api/todo").then(function (response) {
        return response.json();
    }).then(function (data) {
        list = data
    }).catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

    var todoList = document.getElementById("list")
    //console.log(list)

    for (item of list) {
        if (!item) {
            continue;
        }
        //console.log(item)
        var li = document.createElement("li")
        var label = document.createElement("label")

        var listCheckbox = document.createElement("input")
        listCheckbox.type = "checkbox"
        listCheckbox.setAttribute("onclick", "toggleStatus(this)")
        //listCheckbox.setAttribute("data",`item=${item.title}`)
        label.appendChild(document.createTextNode(item.title))
        listCheckbox.id = `item-${item.id}`
        if (item.status == 'done') {
            listCheckbox.checked = true;
        } else {
            listCheckbox.checked = false;
        }
        li.appendChild(listCheckbox)
        li.appendChild(label)
        todoList.appendChild(li)
    }
    //console.log(list)
    //console.log(todoList)
}

async function toggleStatus(checkbox) {
    const itemId = checkbox.id.split("-")[1]
    //console.log(itemId)
    //console.log(checkbox)
    //console.log(`checked status = ${checkbox.checked}`)


    if (checkbox.checked) {
        await fetch(`http://localhost:3000/api/todo/${itemId}`, {
            method: 'PUT',
            headers: {
                'Accept': '*/*',
                'Connection': 'keep-alive',
                'Content-Type': 'application/json'
            },
            body: `{"status": "done"}`,
        })
    } else {
        await fetch(`http://localhost:3000/api/todo/${itemId}`, {
            method: 'PUT',
            headers: {
                'Accept': '*/*',
                'Connection': 'keep-alive',
                'Content-Type': 'application/json'
            },
            body: `{"status": "todo"}`,
        })
    }
    /*
    
    */
}

async function addListElement() {
    if (!document.getElementById("addItem").value == "") {
        var inputBox = document.getElementById("addItem")
        var todoList = document.getElementById("list")

        await fetch("http://localhost:3000/api/todo", {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Connection': 'keep-alive',
                'Content-Type': 'application/json'
            },
            body: `{"title": "${inputBox.value}", "status": "todo"}`,
        })
        /*response.json().then(data => {
            //console.log(JSON.stringify(data));
        })*/

        if (todoList) {
            while (todoList.firstChild) {
                todoList.removeChild(todoList.firstChild)
            }
        }

        renderList()
        inputBox.value = ""
        inputBox.focus()
    }
}

async function removeChecked() {

    var fetchedList

    await fetch("http://localhost:3000/api/todo").then(function (response) {
        return response.json();
    }).then(function (data) {
        fetchedList = data
    }).catch(function (err) {
        console.log('Fetch Error :-S', err);
    });

    //console.log(fetchedList)

    for (const item of fetchedList) {
        if (item && item.status == 'done') {
            console.log(item)
            await fetch(`http://localhost:3000/api/todo/${item.id}`, {
                method: 'DELETE',
                headers: {
                    'Accept': '*/*',
                    'Connection': 'keep-alive',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    var todoList = document.getElementById("list")
    if (todoList) {
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild)
        }
    }

    renderList()
}