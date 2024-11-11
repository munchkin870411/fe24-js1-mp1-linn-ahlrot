// Radfärg
for(let i=0; i<5; i++){

    const newH1 = document.createElement('h1');
    document.body.append(newH1);
    const newHue = 130 + i*20;

    newH1.innerText = `Rad ${i+1}`;
    newH1.style.color = 'hsl(240 100% 70%)';
    const fontSize = (i + 1) * 9;
    newH1.style.fontSize = `${fontSize}px`;

    newH1.style.backgroundColor =`hsla(${newHue}, 100%, 70%, 0.50)`;
}



// funktion för att skapa lista
// const createList = () => {
//     const list = document.createElement('ul');
//     for(let i=0; i<10; i++){
//         const listRow = document.createElement('li');
//         listRow.innerText = `${i}`
//         list.append(listRow)
//     }
//     return list;
// }

// main container
const mainContainer = document.createElement('div');
mainContainer.className = 'main-container';
mainContainer.style.border = '1px solid black'
document.body.append(mainContainer);
// 
const listContainer1 = document.createElement('div');
const listContainer2 = document.createElement('div');
const listContainer3 = document.createElement('div');

const ulist1 = document.createElement('ul');
ulist1.classList.add('firstList');
ulist1.style.backgroundColor = 'hsl(240 100% 80%)';

const ulist2 = document.createElement('ul');
ulist2.classList.add('secondList');
ulist2.style.backgroundColor = 'hsl(240 100% 80%)';

const ulist3 = document.createElement('ul');
ulist3.classList.add('thirdList');
ulist3.style.backgroundColor = 'hsl(240 100% 80%)';

// populate first list
for(let i=0; i<10; i++){
    const listItem1 = document.createElement('li');
    listItem1.innerText = i
    ulist1.append(listItem1)
    if (i == 4){
        listItem1.style.backgroundColor = 'hsl(240 100% 80%)';
        listItem1.style.color = 'white';
    }
    else if (i %2==0){
        listItem1.style.backgroundColor = 'black';
        listItem1.style.color = 'white';
    }
    else {
        listItem1.style.backgroundColor = 'white';
        listItem1.style.color = 'black';
    }
}

// populate second list
for(let i=9; i>=0; i--){
    const listItem2 = document.createElement('li');
    listItem2.innerText = i
    ulist2.append(listItem2)
    if (i == 8){
        listItem2.style.backgroundColor = 'hsl(240 100% 80%)';
        listItem2.style.color = 'white';
    }
    else if (i %2==0){
        listItem2.style.backgroundColor = 'black';
        listItem2.style.color = 'white';
    }
    else {
        listItem2.style.backgroundColor = 'white';
        listItem2.style.color = 'black';
    }
}

// populate third list
for(let i=0; i<10; i++){
    const listItem3 = document.createElement('li');
    const listStrings = ['ett','två','tre','fyra','fem','sex','sju','åtta','nio','tio']
    listItem3.innerText = listStrings[i]
    ulist3.append(listItem3)
    if (i == 6){
        listItem3.style.backgroundColor = 'hsl(240 100% 80%)';
    }
    else if (i %2==0){
        listItem3.style.backgroundColor = 'black';
        listItem3.style.color = 'white';
    }
    else {
        listItem3.style.backgroundColor = 'white';
        listItem3.style.color = 'black';
    }
}
// append lists to listContainers and listContainers to mainContainer
listContainer1.append(ulist1)
listContainer2.append(ulist2)
listContainer3.append(ulist3)
mainContainer.append(listContainer1)
mainContainer.append(listContainer2)
mainContainer.append(listContainer3)

// for(let i=0; i<3; i++){
//     const listContainer = document.createElement('div');
//     listContainer.className = `listContainer${i+1}` 
//     // const newList = createList();
//     listContainer.append(newList);
//     container.append(listContainer);
// }
