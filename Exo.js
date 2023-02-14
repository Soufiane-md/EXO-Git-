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
