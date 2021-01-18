document.addEventListener('DOMContentLoaded', function() {

    const form = document.querySelector('#form');
    const btn = document.querySelector('.btn');

    btn.addEventListener('click', function(e){
        e.preventDefault();
        console.log(form.elements);

    })
    

});