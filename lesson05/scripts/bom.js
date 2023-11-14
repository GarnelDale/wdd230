const addChapter = document.querySelector("button");
const topTen = document.querySelector("#list");
const input = document.querySelector("#favchap");

addChapter.addEventListener('click', ()=>{
    if (input.value === '') {
        input.focus();
    }
    else {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        topTen.append(li);

        deleteButton.addEventListener('click', ()=>{
            topTen.removeChild(li);
            input.focus();
        });
    }
    input.value = '';
    input.focus();
});