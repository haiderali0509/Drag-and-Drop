let lists=document.getElementsByClassName("list")
let rightBox = document.getElementById("right");
let leftBox = document.getElementById("left");

for (const list of lists) {
    list.addEventListener('dragstart', (e) => {
        let selected = e.target;
        rightBox.addEventListener('dragover', (e) => {
            e.preventDefault();
        })
    })
}