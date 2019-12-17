const DomNodeCollection = require ("./dom_node_collection.js");

function $l(query){
  if (query instanceof HTMLElement){
    return new DomNodeCollection([query]);
  } else {
    let elements = document.querySelectorAll(query);
    let array = Array.from(elements);
    return new DomNodeCollection(array);
  } 
}

window.$l = $l;

$(() => {
  // console.log(window.$l("div"));
});