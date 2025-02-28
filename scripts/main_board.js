let totalCompletedTaskCount = parseInt(document.getElementById('total-completed-task-count').innerText);
let assignedTaskCount = parseInt(document.getElementById('assigned-task-count').innerText);

completeTask('c1');
completeTask('c2');
completeTask('c3');
completeTask('c4');
completeTask('c5');
completeTask('c6');

function completeTask(id) {
    document.getElementById(id).addEventListener('click', function (event) {
        event.preventDefault();
        assignedTaskCount--;
        totalCompletedTaskCount++;
        document.getElementById('assigned-task-count').innerText = assignedTaskCount;
        document.getElementById('total-completed-task-count').innerText = totalCompletedTaskCount;

        //parent
        const parent = document.getElementById();
        this.disabled = true;
    });
}