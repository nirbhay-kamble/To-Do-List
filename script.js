const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const priorityBox = document.getElementById("priority-box");

function addTask() {
    if (inputBox.value === '') {
        alert("Write Something!");
    } else {
        let li = document.createElement("li");

        // Set the task text
        li.textContent = inputBox.value;

        // Assign priority class based on selection
        let priority = priorityBox.value;
        li.classList.add(priority);

        // Create and append the delete button (span)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // Delete button (X)
        li.appendChild(span);       // Append the delete button to the task item

        // Append the task item to the list container
        listContainer.appendChild(li);
    }

    // Clear the input field after the task is added
    inputBox.value = "";

    // Save the updated task list
    saveData();
} 
 

// Event listener for toggling task as checked (with dashed line)
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  // Toggle 'checked' class to add dashed line
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();  // Remove task if the delete button (span) is clicked
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
