let input1 = document.querySelector('.input__email');
let btn1 = document.querySelector('.input__btn');
let erro1 = document.querySelector('.erro__destaque');

let input2 = document.querySelector('.inputs__email');
let btn2 = document.querySelector('.inputs__btn');
let erro2 = document.querySelector('.erro__subscribe');

btn1.addEventListener('click', function () {
    if(input1.value == '') {
        erro1.classList.remove('none');
        erro1.classList.add('block');
        input1.classList.remove('bordaNormal');
        input1.classList.add('bordaVermelha');
    } else {
        if (!input1.checkValidity()) {
            erro1.classList.remove('none');
            erro1.classList.add('block');
            input1.classList.remove('bordaNormal');
            input1.classList.add('bordaVermelha');
        } else {
            erro1.classList.remove('block');
            erro1.classList.add('none');
            input1.classList.remove('bordaVermelha');
            input1.classList.add('bordaNormal');
            input1.value = '';
        }
    }
})

btn2.addEventListener('click', function () {
    if(input2.value == '') {
        erro2.classList.remove('none');
        erro2.classList.add('block');
        input2.classList.remove('bordaNormal');
        input2.classList.add('bordaVermelha');
    } else {
        if (!input2.checkValidity()) {
            erro2.classList.remove('none');
            erro2.classList.add('block');
            input2.classList.remove('bordaNormal');
            input2.classList.add('bordaVermelha');
        } else {
            erro2.classList.remove('block');
            erro2.classList.add('none');
            input2.classList.remove('bordaVermelha');
            input2.classList.add('bordaNormal');
            input2.value = '';
        }
    }
})