
let Name = prompt("Nome"); 
console.log( Name, typeof Name);
 let Surname = prompt("Cognome");
console.log(Surname, typeof Surname); 
let Colore = prompt("Qual'é il tuo colore preferito?")
console.log(Colore, typeof Colore);
const Numpsw=21
console.log(Numpsw , typeof Numpsw)


const Password = Name + Surname + Colore + Numpsw
console.log(Password, typeof Password)

document.getElementById("psw").innerHTML = Password;