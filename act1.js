const form = document.getElementById("myform");
const input = document.getElementById("myinput");
const list = document.getElementById("myitem");

// Form submit event
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const task = input.value.trim();

    if (task !== "") {
        addTask(task);
        input.value = "";
        input.focus();
    }
});

// Function to add task
function addTask(taskText) {
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(deleteBtn);
    list.appendChild(li);
}
