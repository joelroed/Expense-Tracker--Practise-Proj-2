let form = document.querySelector('#form');


form.addEventListener('submit',function(event) {
    event.preventDefault()

    var activities = document.querySelectorAll('#input__expense--id, #input__date--id, #input__amount--id').value;
    document.querySelector(".output__text").innerHTML += activities 

})