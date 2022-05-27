import Store from "./store.js";
import {reducer} from "./reducer.js";

const store = new Store(reducer, {count:0});

let counter= document.getElementById("counterValue");
let inc= document.getElementById("inc");
let dec=document.getElementById("dec");



counter.innerText=store.getState().count;

inc.addEventListener("click",function(){
    store.dispatch({
        type: "Increment",
    }); 
    counter.innerText=store.getState().count;
    
})
dec.addEventListener("click",function(){
    store.dispatch({
        type: "Decrement",
    }); 
    counter.innerText=store.getState().count;
})

let input = document.getElementById("input");
let addition = document.getElementById("add");
let substraction = document.getElementById("sub");
let division = document.getElementById("div");
let multiplication = document.getElementById("multi");

addition.addEventListener("click", () => {
    let value = input.value;
    store.dispatch({
      type: "Add",
      payload: +value,
    });
    counter.innerHTML = store.getState().count;
    input.value = "";
  });

  substraction.addEventListener("click", () => {
    let value = input.value;
    store.dispatch({
      type: "Sub",
      payload: +value
    });
    counter.innerHTML = store.getState().count;
    input.value = "";
  });

  multiplication.addEventListener("click", () => {
    let value = input.value;
    store.dispatch({
      type: "Multi",
      payload: +value
    });
    counter.innerHTML = store.getState().count;
    input.value = "";
  });

  division.addEventListener("click", () => {
    let value = input.value;
    store.dispatch({
      type: "Div",
      payload: +value
    });
    counter.innerHTML = store.getState().count;
    input.value = "";
  });