/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener("DOMContentLoaded", function () {

    var images = document.querySelector('#gallery').children;
    var hide = document.querySelector('#hideButton');
    var show = document.querySelector('#showButton');
    var input = document.querySelector('#tagInput');

    // function tagInfo(elem){
    //     for( var i=0 ; i<elem.length;i++){
    //        var dtaElem=this.elem[i].dataset.tag;
    //         if (dtaElem.indexOf(textInput)!==-1){
    //             console.log(dtaElem);
    //         }else{
    //             console.log('brak tagu')
    //         }
    //
    //     }
    // }

    hide.addEventListener('click', function (event) {
        var txtInp = input.value;

        for (var i = 0; i < images.length; i++) {
            images[i].classList.remove('invisible');//gdyby był już pokazany inny obrazek
            var tagInf = images[i].dataset.tag;//wrazie grdyby było wpisane z dużych liter
            var tagInfo=tagInf.toLowerCase();
            if (tagInfo.indexOf(txtInp) !== -1) {
                images[i].classList.add('invisible')
            }
        }

        input.value = '';
    });

    show.addEventListener('click', function (event) {
        var txtInp = input.value;

        for (var i = 0; i < images.length; i++) {
           images[i].classList.add('invisible');//aby pokazac tylko zdjęcie z tagirm trzeba ukryć wszystkie i pozniej sprawdzić warunek.
            var tagInf = images[i].dataset.tag;
            var tagInfo=tagInf.toLowerCase();
            if (tagInfo.indexOf(txtInp) !== -1) {//wszystkie obrazki sa ukryte i szukamy tego z wpisanego inputu
                console.log(tagInfo);
                images[i].classList.remove('invisible');
            }
        }

        input.value = '';


    });

});
