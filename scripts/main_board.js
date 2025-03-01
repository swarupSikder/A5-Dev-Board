let totalCompletedTaskCount = parseInt(document.getElementById('total-completed-task-count').innerText);
let assignedTaskCount = parseInt(document.getElementById('assigned-task-count').innerText);

completeTask('c1', 'item-1');
completeTask('c2', 'item-2');
completeTask('c3', 'item-3');
completeTask('c4', 'item-4');
completeTask('c5', 'item-5');
completeTask('c6', 'item-6');

function completeTask(id, itemID) {
    document.getElementById(id).addEventListener('click', function (event) {
        event.preventDefault();
        assignedTaskCount--;
        totalCompletedTaskCount++;
        document.getElementById('assigned-task-count').innerText = assignedTaskCount;
        document.getElementById('total-completed-task-count').innerText = totalCompletedTaskCount;

        //date function
        const curTime = getCurrentTime();

        //target layout
        const targetLayout = document.getElementById(itemID).childNodes;
        const taskTitle = targetLayout[5].innerText;

        //parent
        const parent = document.getElementById('activity-container');
        //child
        const child = document.createElement('div');
        child.innerHTML =
            `
            <p class="bg-base-color p-3 my-3 rounded-md text-sm">
                You have Complete The Task ${taskTitle} at ${curTime}
            </p>
        `;
        //parent << child
        parent.appendChild(child);
        this.disabled = true;

        //---------------//
        //  build alert  //
        //---------------//
        if (assignedTaskCount == 0) {
            alert('congrates!! You have completed all the current task');
        }
        else {
            alert('Board updated Successfully');
        }
    });
}


//--------------------//
//  ch limit in task  //
//--------------------//
const paraList = document.getElementsByClassName('task-details');
for (let i = 0; i < paraList.length; i++) {
    paraList[i].innerText = truncateText(paraList[i].innerText);
}

function truncateText(text, maxLength = 60) {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
}



//------------------//
//  goto blog page  //
//------------------//
document.getElementById('discover').addEventListener('click', function(){
    window.location.href = './blogs.html';
});
