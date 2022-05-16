let form = document.querySelector('#form');


form.addEventListener('submit',function(event) {
    event.preventDefault()

    var data1 = document.querySelector('#input__expense--id').value;
    document.querySelector("#first__output").innerHTML += data1

    var data2 = document.querySelector('#input__date--id').value;
    document.querySelector("#second__output").innerHTML += data2 

    var data3 = document.querySelector('#input__amount--id').value;
    document.querySelector("#third__output").innerHTML += data3 

})






// var data = document.querySelectorAll('#input__expense--id, #input__date--id, #input__amount--id').value;
//     document.querySelectorAll("#first__output, #second__output, #third__output").innerHTML += data 

// })




// form.addEventListener('submit',function(event) {
//     event.preventDefault()

//     var activities = document.querySelectorAll('#input__expense--id, #input__date--id, #input__amount--id').value;
//     document.querySelector(".output__text").innerHTML += activities 

// })