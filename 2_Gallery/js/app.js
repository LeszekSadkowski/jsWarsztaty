/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */

document.addEventListener("DOMContentLoaded", function() {

    var liTabl = document.querySelectorAll('li');
    var body = document.querySelector('body');
    var galery = document.querySelector('div');
    galery.classList.add ('gallery');

    for (var i = 0; i < liTabl.length; i++) {
        liTabl[i].addEventListener('click', function (event) {
            var src= this.firstChild.getAttribute('src');
            function close () {
                newDiv.parentElement.removeChild(newDiv);
            }
            var newDiv= document.createElement('div');
            newDiv.classList.add('fullScreen');
            body.appendChild(newDiv);
             var newBtn = document.createElement('button');
             newBtn.classList.add('close');
             newBtn.innerText = 'Zamknij';
             var obrazek=document.createElement('img');
            newDiv.appendChild(obrazek);
            newDiv.appendChild(newBtn);
            obrazek.setAttribute('src',src);
            console.log ('spr');
            newBtn.addEventListener('click',function (event) {
                close()
            } )


        })
    }


});
