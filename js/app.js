'use strict'

let names = ['bag.jpg','banana.jpg','bathroom.jpg',
'boots.jpg','breakfast.jpg','bubblegum.jpg',
'chair.jpg','cthulhu.jpg','dog-duck.jpg',
'dragon.jpg','pen.jpg','pet-sweep.jpg',
'scissors.jpg','shark.jpg','sweep.png',
'tauntaun.jpg','unicorn.jpg','usb.gif',
'water-can.jpg','wine-glass.jpg']; // creating arry to the obj



function Store(name){
    this.name=name;
    this.views=0;
    this.likes=0;
    this.path=`./img/${name}`  // creating constracter to creat the obj

    Store.all.push(this);       // storing things in the store.all array



}

Store.all=[];       // store.all array

const imageSection=document.getElementById('images-section');       // gitting the elements in html by put it in vars
const rightImage=document.getElementById('right');
const leftImage=document.getElementById('left');
const middleImage=document.getElementById('middle');

for (let index = 0; index < names.length; index++) {
    new Store(names[index]);                             // make 25 obj by the array
    
}
console.table(Store.all);

function randomNumber(min,max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;                   // i want random number but i did not insert numbers yet

}

function render() { 
    
    

    
    let leftIndex, rightIndex, middleIndex
    while((leftIndex == rightIndex) || (rightIndex == middleIndex) || (leftIndex == middleIndex))  {
        leftIndex=randomNumber(0,Store.all.length-1);                     // want random number between 0,8 and store the result in var
        rightIndex=randomNumber(0,Store.all.length-1);
        middleIndex=randomNumber(0,Store.all.length-1);
    }

    
    const leftrandomStore=Store.all[leftIndex];                              // use the random number in the array to get any index for it
    leftImage.src=leftrandomStore.path;                                      // left photo id.src = store.all[1,2,3.....].path (i want just the path from the obj) every number in the array is opj
    leftImage.title=leftrandomStore.name;                                    // left photo id.title= store.all[1,2,3.....].path (i want just the title from the obj) every number in the array is opj

    
     
    const rightrandomStore=Store.all[rightIndex];                                     
    rightImage.src=rightrandomStore.path;
    rightImage.title=rightrandomStore.name;
    

    
    const middlerandomStore=Store.all[middleIndex];
    middleImage.src=middlerandomStore.path;
    middleImage.title=middlerandomStore.name;
    
// here we use the random number inside the arry to know the views
    
    Store.all[leftIndex].views++
    Store.all[rightIndex].views++
    Store.all[middleIndex].views++
    
}
    


    
    
    

 render();

 imageSection.addEventListener('click',handler);                       //when i click what will happen its the function have a same name in the arrg with event keyword
 let trys = 25                                                         // just var for clicks 
 function handler(event){                                              // the function that will do the things from  it
     trys--                                                            //trys-- when we click (the function start work) try will reduse by 1 

    if (event.target.id === 'left' || event.target.id === 'right' || event.target.id === 'middle'){            // i target the left,right,middle  event = click (if his click was equal to th ids)
        for (let i=0;i<Store.all.length;i++){
            if (Store.all[i].name === event.target.title){                // if the java elemint = the click title 
                Store.all[i].likes++;
            }
        }
        
        render();                                                         // we want another three images
    }

    
    if(trys===0){                                                          // after clicks the cickis will be zero
                                                                           
        imageSection.removeEventListener('click',handler);                 // we remove the listin click function             
        alert('you have only 25 clicks');
        let button = document.createElement("button");
        button.innerHTML = "Show result";
        document.body.appendChild(button);
        button.addEventListener('click', pushPls);

        function pushPls() {

            let htmlToInsert = '';

            for (let i = 0; i < Store.all.length; i++) {
              let store = Store.all[i];
              htmlToInsert += `<li>Name: ${store.name}, Views: ${store.views}, Likes: ${store.likes}</li>`;
            }

            let result = document.createElement("ul");
            result.innerHTML =  htmlToInsert;
            document.body.appendChild(result);
        }

        chart();


    }





 }

 function chart() {

    let ctx = document.getElementById('myChart').getContext('2d');
    let getNames=[];
    let getLikes=[];
    let getViews=[];

    for (let index = 0; index < Store.all.length; index++) {
        getViews.push(Store.all[index].views);
        
    }

      for (let index = 0; index < Store.all.length; index++) {
          getNames.push(Store.all[index].name);
          
          
      }

      for (let index = 0; index < Store.all.length; index++) {
        getLikes.push(Store.all[index].likes);
        
        
    }
    let chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'horizontalBar',
    
        // The data for our dataset
        data: {
            labels: getNames,
            datasets: [{
                label: 'likes',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: getLikes,
                backgroundColor: [
                    'rgba(256, 99, 132, 0.2)',
                    'rgba(86, 162, 235, 0.2)',
                    'rgba(36, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(99, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(22, 206, 86, 0.2)',
                    'rgba(36, 192, 192, 0.2)',
                    'rgba(100, 102, 255, 0.2)',
                    'rgba(299, 159, 64, 0.2)',
                    'rgba(233, 99, 132, 0.2)',
                    'rgba(66, 162, 235, 0.2)',
                    'rgba(96, 206, 86, 0.2)',
                    'rgba(85, 192, 192, 0.2)',
                    'rgba(23, 102, 255, 0.2)',
                    'rgba(44, 159, 64, 0.2)',
                    'rgba(96, 99, 132, 0.2)',
                    'rgba(44, 162, 235, 0.2)',
                    'rgba(23, 206, 86, 0.2)',
                    'rgba(99, 192, 192, 0.2)',
                    'rgba(23, 102, 255, 0.2)',
                    'rgba(46, 159, 64, 0.2)',
                    'rgba(17, 159, 64, 0.2)',
                ],

               
            
            },{
                label: 'Views',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: getViews,

                backgroundColor: [
                   
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(0,0,0)',
                    'rgba(255,255,255)',
                    'rgba(255,0,0)',
                    'rgba(0,255,0)',
                    'rgba(0,0,255)',
                    'rgba(255,255,0)',
                    'rgba(0,255,255)',
                    'rgba(255,0,255)',
                     'rgba(192,192,192)',
                    'rgba(128,128,128)',
                    'rgba(128,0,0)',
                    'rgba(128,128,0)',
                    'rgba(0,128,0)',
                    'rgba(128,0,128)',
                    'rgba(0,128,128)',
                    'rgba(0,0,128)',
                    'rgba(22, 206, 86, 0.2)',
                    'rgba(36, 192, 192, 0.2)',
                    'rgba(100, 102, 255, 0.2)',
                    'rgba(299, 159, 64, 0.2)',
                    'rgba(233, 99, 132, 0.2)',
                ],


                
            }],
            labels: getNames,
        },
    
        // Configuration options go here
        options: {},
        
    });
     
 }

 


 




    



 
 

 

 

 







