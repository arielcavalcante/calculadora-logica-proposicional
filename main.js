// // VARIAVEL P

// Seleciona o botão P
const toggleP = document.querySelector(".p.toggle");
// Checa o estado do botão P e faz o toggle na classe
const toggleOfP = () => {
  toggleP.classList.contains("true") ? true : false;
  toggleP.classList.toggle("true")
}
toggleP.addEventListener("click", toggleOfP, false);

// VARIAVEL Q

// Seleciona o botão Q
const toggleQ = document.querySelector(".q.toggle");
// Checa o estado do botão Q e faz o toggle na classe
const toggleOfQ = () => {
  toggleQ.classList.contains("true") ? true : false;
  toggleQ.classList.toggle("true")
}
toggleQ.addEventListener("click", toggleOfQ, false);

// OPERADOR
const operador = document.querySelector('.o.click');

// Array para a lista
var listItems = [];

function filterValuesBuildList() {
  let valueP = toggleP.classList.contains("true")
  ? true
  : false;
  let valueQ = toggleQ.classList.contains("true")
  ? true
  : false;
  let operator = operador.value;

  switch(operator) {
    case "~":
      valueQ !== valueP
      ? listItems.push("Negação verdadeira")
      :  listItems.push("Negação falsa")
      break
    case "∧":
      (valueP === true) && (valueQ === true)
      ? listItems.push("Conjunção verdadeira")
      :  listItems.push("Conjunção falsa");
      break
    case "∨":
      (valueP === true) || (valueQ === true)
      ? listItems.push("Disjunção verdadeira")
      :  listItems.push("Disjunção falsa");
      break
    case "→":
      (valueP === true) && (valueQ === false)
      ? listItems.push("Condicional falsa")
      :  listItems.push("Condicional verdadeira");
      break
    case "↔":
      (valueP === valueQ)
      ? listItems.push("Bicondicional verdadeira")
      :  listItems.push("Bicondicional falsa");
      break
    case "⊻":
      (valueP !== valueQ)
      ? listItems.push("Disjunção Exclusiva verdadeira")
      :  listItems.push("Disjunção Exclusiva falsa");
      break
    default:
    console.log("Exceção");
  }
  
  // Seleciona a div wrapper e a ul.list
  const wrapper = document.querySelector(".list.wrapper");
  const itemsUList = document.querySelector(".itemsList");
  
  function createListItem() {    
    const li = document.createElement('li');
    for(let i = 0; i < listItems.length; i++){
      li.setAttribute("class", `item_${i}`);
      li.innerText = listItems[i];
      itemsUList.prepend(li);
      wrapper.prepend(itemsUList);
    }
  } 
  
  createListItem()
  return
}

const send = document.querySelector(".click.send").addEventListener("click", filterValuesBuildList, false)