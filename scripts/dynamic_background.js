let backgroundList = ['#d9ead3', '#fce5cd', '#CCC', '#c9bbc8', '#aac9ce', '#F4F7FF'];
let i = 0;

document.getElementById('dyn-bg').addEventListener('click', function(){
    //main task (bg change)
    //console.log(backgroundList[i]);
    document.body.style.backgroundColor = backgroundList[i];

    //increment
    i++;
    if(i===backgroundList.length){
        i=0;
    }
});