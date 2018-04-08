/**
 * Created by Jacek on 2015-12-16.
 */
document.addEventListener('DOMContentLoaded',function(){

    var ttList=document.querySelectorAll('.tooltip');
    console.log(ttList);

    for( var i=0; i<ttList.length;i++){
        ttList[i].addEventListener('mouseover',function (evt) {
            var info=this.dataset.text;
           var create=document.createElement('span');
           create.classList.add("tooltipText");
           create.innerText=info;
           this.appendChild(create);


        });

        ttList[i].addEventListener('mouseout',function (evt) {
            var ttip=document.querySelector('.tooltipText');
            ttip.parentElement.removeChild(ttip);
        });
    }


});

/*
 <span class="tooltipText">Text tooltipa</span>
 */
