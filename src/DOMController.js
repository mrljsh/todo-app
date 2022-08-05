
let list = ["Default list", "New List"];

const listSelector = document.querySelector(".folderLists");


export function renderFolders() {
    listSelector.replaceChildren();
    list.forEach(element => {
        const listItem = document.createElement('p');
        listItem.textContent = element;
        listSelector.append(listItem);
    });
};

let addNewFolder = (() => {
    const folderInput = document.querySelector(".addFolderContainer > input");
    console.log(folderInput);

    const addFolderButton = document.querySelector(".addFolderContainer > button");
    console.log(addFolderButton);

    addFolderButton.addEventListener('click',() => {
        if(folderInput.value === ""){
            console.log("ERROR");
            return;
        }

        list.push(folderInput.value);
        folderInput.value = "";
        renderFolders();
    })
})();


