var totalTasksAdded = 0;
var currentMode = "light";
function changeTitle() {
    let newTitle = window.prompt("Please Enter Title for your To Do List App..!!");
    if (newTitle === null) {
        return;
    }
    if (newTitle.trim() === "") {
        window.alert("Please Enter a valid Title");
        return;
    }
    $("#my-app-title").html(newTitle);
}
$("#todoTaskForm").submit(function (e) {
    e.preventDefault();
    if (e.target[0].value.trim() === "") {
        window.alert("Please enter a Valid title for task");
        return;
    }
    else if (e.target[1].value === "0") {
        window.alert("Please Select the task type");
        return;
    }
    else if (e.target[3].value === "") {
        window.alert("Please Select the task Date");
        return;
    }
    let taskDate = new Date(e.target[3].value);
    if (taskDate < new Date()) {
        window.alert("Please Select a Valid task Date. Past task date is not possible.");
        return;
    }

    if ($("#task-container-table tr").length === 0) {
        $("#no-task-alert").text("");
    }
    let priorityHtml = "";
    for (let i = 0; i < e.target[2].value; i++) {
        priorityHtml = priorityHtml + `<i class="fas fa-star gold-clr-font"></i>`;
    }
    for (let i = 0; i < (5 - e.target[2].value); i++) {
        priorityHtml = priorityHtml + `<i class="far fa-star gold-clr-font"></i>`;
    }
    ($("#task-container-table")).append(`<tr id="task-no-${totalTasksAdded}">
        <th scope="row">${e.target[0].value.trim()}</th>
        <td>${e.target[1].value}</td>
        <td>${e.target[3].value}</td>
        <td>${priorityHtml}</td>
        <td onClick="taskRemove(${totalTasksAdded})"><i class="fas fa-check-circle text-success fs-3"></i></td>
      </tr>`);
    totalTasksAdded = totalTasksAdded + 1;
});
function taskRemove(taskId) {
    $(`#task-no-${taskId}`).remove();
    if ($("#task-container-table tr").length === 0) {
        $("#no-task-alert").text("No Task Added Yet");
    }

}

function toggleMode() {
    if (currentMode === "light") {
        $("body").css("background-image", "url(./Assets/banner.jpg)");
        $("body").css("color", "white");
        $("#my-app-title").css("color", "white");
        $("#task-table").addClass('table-light');
        $("#task-table").removeClass('table-dark');
        $(".slideTwo").css("background-color", "white");
        $("#addToDoContainer").addClass("border-2px-white");
        currentMode = "dark";
    }
    else {
        $("body").css("background-image", "url(./Assets/white-banner.jpg)");
        $("body").css("color", "black");
        $("#my-app-title").css("color", "black");
        $("#task-table").addClass('table-dark');
        $("#task-table").removeClass('table-light');
        $(".slideTwo").css("background-color", "black");
        $("#addToDoContainer").removeClass("border-2px-white");

        currentMode = "light";
    }
}