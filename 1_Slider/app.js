document.addEventListener("DOMContentLoaded", function() {

    var btnNext=document.querySelector('#nextPicture');
    var btnPrev=document.querySelector('#prevPicture');
    var list = document.querySelectorAll('li');
    var counter =0;
    list[counter].classList.add('visible');


    btnNext.addEventListener('click',function (event) {
        counter++;
        if (counter >= list.length){
            counter=0;
        }
        var obrazek=document.querySelector('.visible');
        obrazek.classList.toggle('visible');

        list[counter].classList.add('visible');

    });
    btnPrev.addEventListener('click',function (event) {
        if (counter <= 0){
            counter=list.length-1;
            console.log('123');

        }counter--;
        var obrazek=document.querySelector('.visible');
        obrazek.classList.toggle('visible');
        list[counter].classList.add('visible');
    })


});