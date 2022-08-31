const checkbox = document.getElementById('checkbox');
const addLine = document.getElementById('add-line')
const list = document.getElementById('list')
const subLine = document.getElementById('sub-line') 

checkbox.addEventListener('click', function onClick() {
    if (checkbox.style.backgroundColor != '#202020') {
        checkbox.style.backgroundColor = '#202020'
    } else if (checkbox.style.backgroundColor = '#202020') {
        checkbox.style.backgroundColor = '#fdf8e1'
    }
    
})


addLine.addEventListener('click', function() {
    list.innerHTML += 
    `<div class="list-item new-item">
        <button class="checkbox" id="checkbox"></button>
        <input type="text" class="textbox">
    </div>`

    subLine.style.display = "inline"

})

subLine.addEventListener('click', function() {
    list.remove('new-item')
})

