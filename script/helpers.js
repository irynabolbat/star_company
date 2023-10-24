 function addClass(element, className) {
  element.classList.add(className);
}

 function removeClass(element, className) {
  element.classList.remove(className);
}

 function addContent(element, className, content) {
  addClass(element, className)
  element.textContent = content;
}

 function removeContent(element, className) {
  removeClass(element, className)
  element.textContent = "";
}

 function addInner(element, className, inner) {
  addClass(element, className)
  element.innerHTML = inner;
} 

 function removeInner(element, className) {
  removeClass(element, className)
  element.innerHTML = "";
}

 function isEmpty(value) {
  if (value.trim() === "") {
    console.log("input cann't be empty");

    return;
  }
}

export default {
  addClass,
  removeClass,
  addContent,
  removeContent, 
  addInner,
  removeInner,
  isEmpty,
};