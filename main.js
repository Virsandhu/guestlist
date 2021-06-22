names_array= [];

function submit(){
var guest_name = document.getElementById("names1").value;
document.getElementById("display").innerHTML = guest_name;
names_array.push(guest_name);
}

function show(){
    document.getElementById("display_2").innerHTML = guest_name;
    names_array.push(guest_name);
}

function sort(){
   guest_name.sort();
    document.getElementById("sorted_list").innerHTML = guest_name;
 }
 
 function searching()
 {
 var s= document.getElementById("Search Names").value;
 var found=0;
 var j;
 for(j=0; j<display.lenght; j++)
 {
 if(s==names_of_people[j]){
 found=found+1;
 }
 }
 document.getElementById("search_list").innerHTML="name found "+found+" time/s";
 console.log("found name "+found+" time/s");
}