document.querySelector("#push").onclick = function () {
    let input = document.querySelector("#newtask input");
    
    if (input.value.trim().length === 0) {
        alert("Please enter a task");
    } else {
        document.querySelector("#tasks").innerHTML += `
            <div class="task">
                <span>${input.value}</span>
                <button class="delete">
                    <span class="material-symbols-outlined">delete</span>
                </button>
            </div>
        `;
        input.value = "";
        let deleteButtons = document.querySelectorAll(".delete");
        deleteButtons.forEach(btn => {
            btn.onclick = function () {
                this.parentElement.remove();
            };
        });
    }
};


