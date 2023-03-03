const startGameDom = document.querySelector('#startGame');
const gridContainerDom = document.querySelector('#gridContainer');
const boxNumber = 100;





startGameDom.addEventListener('click', function(){
    console.log(gridContainerDom.innerHTML);
    gridContainerDom.innerHTML = '';
    console.log(gridContainerDom.innerHTML);

    for(i=1 ; i <= boxNumber ; i++){
        const box = createNewBoxNumbered(i);
        box.addEventListener('click', function(){
            console.log(box.textContent);
            this.classList.add('selected');
        });
        gridContainerDom.append(box);
    }
});






function createNewBoxNumbered(number){
    const newBox = document.createElement('div');
    newBox.classList.add('box');
    newBox.innerHTML = number;
    return newBox;
}