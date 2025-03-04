var counter = 1;

function addTask() {
    var container = document.getElementById(`container`);
    var createDiv = document.createElement(`div`);
    var createNum = document.createElement(`p`);
    var createTask = document.createElement(`p`);
    var createButton = document.createElement(`button`); // button

    var input = document.getElementById(`input`).value; // textfield

    if (input === ""){
        alert(`Enter a content`);
        return 0;
    }

    createDiv.classList= "yourlistlist";
    createNum.classList = "num";
    createTask.classList = "task";
    createButton.classList = "remove";

    createNum.innerHTML = `${counter}. `;
    counter++;
    createTask.innerHTML = `${input}     `;
    createButton.textContent = `remove`;

    createButton.addEventListener('click', function() {
        let response = confirm(`Are you sure you want to delete this task? `);
        if (response == true){
            container.removeChild(createDiv);
        }else {
            return 0;
        }
    });

    createDiv.append(createNum);
    createDiv.append(createTask);
    createDiv.append(createButton);

    container.append(createDiv);

    document.getElementById(`input`).value = ``;
}



