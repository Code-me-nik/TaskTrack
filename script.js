
let addtaskbtn = document.querySelector('.addtask')
let inputtask = document.querySelector('.inputtask')

addtaskbtn.addEventListener('click', () => {

  let tasklist = document.querySelector('.tasklist')
  tasklist.appendChild( createTask() )

})












function createTask() {

    let div = document.createElement('div')
    div.className = 'tasks'

    let label = document.createElement('label')
    label.className = 'container'

    div.appendChild(label)

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.checked = false

    label.appendChild(checkbox)

    let checkmark = document.createElement('span')
    checkmark.className = 'checkmark'

    label.appendChild(checkmark)

    let tasktext = document.createElement('span')
    tasktext.className = 'tasktext'
    tasktext.innerHTML = inputtask.value
    label.appendChild(tasktext)

    let btnsdiv = document.createElement('div')
    btnsdiv.className = 'btnsdiv'

    div.appendChild(btnsdiv)

    let editbtn = document.createElement('button')
    editbtn.classList = 'edit sameformatbtn'

    btnsdiv.appendChild(editbtn)

    let icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-pencil");

    editbtn.appendChild(icon)

    return div 
}