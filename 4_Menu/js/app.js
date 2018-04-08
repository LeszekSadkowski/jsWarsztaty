document.addEventListener('DOMContentLoaded', function () {

    var lists = document.querySelectorAll('.nav>ul>li');

    console.log(lists);
    for (var i = 0; i < lists.length; i++) {
        lists[i].addEventListener('mouseover', function (ev) {

            var sublist=this.firstElementChild;
            if(sublist!==null){
               sublist.style.display='block';
            }

        });
        lists[i].addEventListener('mouseout', function (ev) {
            console.log('fff');
            var sublist=this.firstElementChild;
            if(sublist!==null){
                sublist.style.display='none';
            }
        })
    }
});