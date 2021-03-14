let names = ['bag','banana','bathroom',
'boots','breakfast','bubblegum',
'chair','cthulhu','dog-duck',
'dragon','pen','pet-sweep',
'scissors','shark','sweep',
'tauntaun','unicorn','usb',
'water-can','wine-glass'];



function Store(name){
    this.name=name;
    this.times=0;
    this.likes=0;
    this.path=`./img/${name}.jpg`

    Store.all.push(this);


}

Store.all=[];

const imageSection=document.getElementById('images-section');
const rightImage=document.getElementById('right');
const leftImage=document.getElementById('left');
const middleImage=document.getElementById('middle');

for (let index = 0; index < names.length; index++) {
    new Store(names[index]);
    
}
console.table(Store.all);

function randomNumber(min,max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;

}

function render() { 

    const leftIndex=randomNumber(0,Store.all.length-1);
    const leftrandomStore=Store.all[leftIndex];
    leftImage.src=leftrandomStore.path;
    leftImage.title=leftrandomStore.name;

    const rightIndex=randomNumber(0,Store.all.length-1);
    const rightrandomStore=Store.all[rightIndex];
    rightImage.src=rightrandomStore.path;
    rightImage.title=rightrandomStore.name;

    const middleIndex=randomNumber(0,Store.all.length-1);
    const middlerandomStore=Store.all[middleIndex];
    middleImage.src=middlerandomStore.path;
    middleImage.title=middlerandomStore.name;
    
    
}
 render();

 imageSection.addEventListener('click',handler);

 function handler(event){

    if (event.target.id === 'left' || 'right' || 'middle'){
        for (let i=0;i<Store.all.length;i++){
            if (Store.all[i].name === event.target.title){
                Store.all[i].likes++;
                Store.all[i].times++;
                console.table(Store.all);
            }
            
        }
        render();
    }

 }

 imageSection.addEventListener('',handler);

 function handler(event){

    if (event.target.id === 'left' || 'right' || 'middle'){
        for (let i=0;i<Store.all.length;i++){
            if (Store.all[i].name === event.target.title){
            
                Store.all[i].times++;
                console.table(Store.all);
            }
            
        }
        render();
    }

 }
