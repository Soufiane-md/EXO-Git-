
let table1= [];
let table2 = [];

for(let i=0;  i< 5; i++ ){

    table1[i] = parseInt(prompt (`entrer table1_${[ i]}`))
}
console.table(table1);

for(let i=0;  i< 5; i++ ){

    table2[i] = parseInt(prompt (`entrer table2_${[ i]}`))
}
console.table(table2);

function tri (Tab)
{ let i,j ;
 let temp ;
 for (i=0 ; i< Tab.length -1 ; i++)
 for (j=i+1 ; j< Tab.length; j++)
 if ( Tab[i]>Tab[j] )
 { temp = Tab[i] ;
 Tab[i] = Tab[j] ;
 Tab[j] = temp ;
 }
}


function Fusionner(tab1,tab2){
let tab3=[];
/*
tab3.length = tab1.length + tab2.length;

for ( let i=0; i < tab1.length ; i++){
        tab3[i] = tab1[i];
    }
for(let i=0, j= tab1.length; i < tab2.length , j < tab3.length; i++, j++){

        tab3[j] = tab2[i];

        }
*/

for (i = 0 ; i < tab1.length ; i++) {
    tab3.push(tab1[i]);
}

for (i = 0 ; i < tab2.length ; i++) {
    tab3.push(tab2[i]);
}

        return tab3;
}
    
    tablefu= Fusionner(table1, table2);
    console.table(tablefu);
  tri (tablefu);
  
console.table(tablefu);








/*
let lightSide = [20, 50, 23, 12,36];
let darkSide = [12, 16, 19, 90, 56];

// création d'un tableau à trier
let newHope = [];

lightSideLength = lightSide.length
darkSideLength = darkSide.length

for (i = 0 ; i < lightSideLength ; i++) {
    newHope.push(lightSide[i]);
}

for (i = 0 ; i < darkSideLength ; i++) {
    newHope.push(darkSide[i]);
}

console.table(newHope);
*/