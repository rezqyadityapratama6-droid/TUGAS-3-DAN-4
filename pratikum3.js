const buah = document.getElementsByClassName("buah");
 
console.log(buah);          
console.log(buah.length);   
console.log(buah[0]);       
 
buah[0].style.color = "red";
 
for (let i = 0; i < buah.length; i++) {
  buah[i].style.fontWeight = "bold";
  buah[i].textContent = (i + 1) + ". " + buah[i].textContent;
}
 
const semuaLi = document.getElementsByTagName("li");
 
console.log(semuaLi.length);
 
for (let i = 0; i < semuaLi.length; i++) {
  semuaLi[i].style.backgroundColor = "lightyellow";
}

semuaLi[semuaLi.length - 1].style.color = "blue";

const semuaH2 = document.getElementsByTagName("h2");

for (let i = 0; i < semuaH2.length; i++) {
  semuaH2[i].style.color = "teal";
}