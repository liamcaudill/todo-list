function addListElement() {
    if(!document.getElementById("addItem").value==""){
        var todoList = document.getElementById("list")
        var li = document.createElement("li")
        var listCheckbox = document.createElement("input")
        var label = document.createElement("label")
        var inputBox = document.getElementById("addItem")

        listCheckbox.type = "checkbox"
        label.appendChild(document.createTextNode(document.getElementById("addItem").value))
        li.appendChild(listCheckbox)
        li.appendChild(label)
        todoList.appendChild(li);
        inputBox.value = ""
        inputBox.focus()
    }
}

function removeChecked() {
    var todoList = document.getElementById('list')
    var items = Array.from(todoList.childNodes)
    var item
    
    while (item = items.pop()) {
        if (item.firstChild && item.firstChild.checked) {
            todoList.removeChild(item);
        }
    }

}