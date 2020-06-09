const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  var task = prompt("Enter Task","")
  if(task === ""){}
  else{

    const item = document.createElement('li')
    item.className = classNames.TODO_ITEM

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.className = classNames.TODO_CHECKBOX

    const deleteButton = document.createElement('button')
    deleteButton.className = classNames.TODO_DELETE
    deleteButton.innerHTML = "Delete"

    let itemCount = parseInt(itemCountSpan.innerHTML)
    let uncheckedCount = parseInt(uncheckedCountSpan.innerHTML)

    checkbox.addEventListener('change', function(){
      uncheckedCount = parseInt(uncheckedCountSpan.innerHTML)
      if(this.checked){
        uncheckedCount = uncheckedCount-1
      }
      else {
        uncheckedCount = uncheckedCount+1
      }
      uncheckedCountSpan.innerHTML = uncheckedCount
    })

    deleteButton.addEventListener('click', function(){
      if(!checkbox.checked){
        uncheckedCount = parseInt(uncheckedCountSpan.innerHTML)
        uncheckedCount = uncheckedCount-1
        uncheckedCountSpan.innerHTML = uncheckedCount
      }
      itemCount = parseInt(itemCountSpan.innerHTML)
      itemCount = itemCount-1
      itemCountSpan.innerHTML = itemCount
      this.parentNode.parentNode.removeChild(this.parentNode)
    })

    const label = document.createElement('label')
    label.appendChild(document.createTextNode(task))

    item.appendChild(checkbox)
    item.appendChild(label)
    item.appendChild(deleteButton)
    list.appendChild(item)

    itemCount = parseInt(itemCountSpan.innerHTML)
    itemCount = itemCount+1
    itemCountSpan.innerHTML = itemCount
    uncheckedCount = parseInt(uncheckedCountSpan.innerHTML)
    uncheckedCount = uncheckedCount+1
    uncheckedCountSpan.innerHTML = uncheckedCount
  }
}
