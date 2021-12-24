 const updateText = () => {
    let text = document.querySelector("#text-input").value;
    document.querySelector("#text-output").innerText = text;
  }
   
  const makeBold = (elem) => {
    elem.classList.toggle("active");
    document.querySelector("#text-output").classList.toggle("bold");
  }
 
  const makeItalic = (elem) => {
    elem.classList.toggle("active");
    document.querySelector("#text-output").classList.toggle("italic");
  }
  
  const makeUnderline = (elem) => {
    elem.classList.toggle("active");
    let formattedText = document.getElementById("text-output");
    if(formattedText.classList.contains('underline')){
      formattedText.classList.remove("underline");
    } else {
      formattedText.classList.add("underline")
    }
  }
   
  const alignText = (elem, alignType) => {
    elem.classList.toggle('active');
    document.getElementById("text-output").style.textAlign = alignType;
    let buttonsList = document.getElementsByClassName("align");
    for (let button of buttonsList) {
      button.classList.remove("active");
    }
    elem.classList.add('active')
  }