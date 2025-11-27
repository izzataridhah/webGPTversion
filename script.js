function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    const ul = document.getElementById("taskList");

    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("span");
    deleteBtn.textContent = "×";
    deleteBtn.onclick = function () {
        ul.removeChild(li);
    };

    li.appendChild(deleteBtn);
    ul.appendChild(li);

    input.value = "";
}
