class DomNodeCollection{
  constructor(elements){
    this.elements = elements;
    // console.dir(this.elements);
  }

  children(){
    let children = [];

    this.elements.forEach((ele) => {
      for (let i = 0; i < ele.children.length; i++){
        children.push(ele.children[i]);
      }
    });

    return new DomNodeCollection(children);
  }

  parent(){
    let parents = [];

    this.elements.forEach((ele) => {
        parents.push(ele.parentElement);
    });
    

    return new DomNodeCollection(parents.uniq());  
  }

  find(target){
    // console.log(this);
    let nodes= this.children();
    let results = [];
    // console.log(this.elements);
    this.elements.forEach((ele) => {
      for(let i=0; i < nodes.children().length; i++){
        if (nodes.children().getAttribute() === target){
          
        }
      }
      console.log(ele);
      let array_ele = Array.from(ele);
      let dom_ele = new DomNodeCollection(array_ele);
      debugger;
      if (dom_ele.children().getAttribute()){}
      results.push(dom_ele.children().querySelectorAll(target));
    });
    return new DomNodeCollection(results);
  }

  html(string){

    if (!string){
      return this.elements[0].innerHTML;
    }

    this.elements.forEach( (ele) =>{
      ele.innerHTML = string;
    });
  }

  empty(){
    this.elements.forEach((ele) => {
      ele.innerHTML = "";
    });
  }

  append(string){
    this.elements.forEach((ele) => {
      // console.dir(ele);
      ele.innerHTML += string;
    });
  }

  attr(attrName, value){
    if (!value){
      this.elements.forEach((ele) => {
        return ele.getAttribute(attrName);
      });
    }
    this.elements.forEach((ele) => {
      ele.setAttribute(attrName, value);
    });
  }

  addClass(value) {
    this.elements.forEach((ele) => {
      ele.setAttribute("class", value);
    });
  }

  removeClass(value) {
    this.elements.forEach((ele) => {
      ele.classList.remove(value);
    });
  }
}

module.exports = DomNodeCollection;