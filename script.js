
document.getElementById("studentForm")
.addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;

    let li = document.createElement("li");
    li.textContent = name + " - " + roll;

    document.getElementById("studentList").appendChild(li);
    this.reset();
});
