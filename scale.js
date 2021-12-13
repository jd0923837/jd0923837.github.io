/*This JS file created with the intent of making the page more mobile friendly.*/
const body = document.querySelector("#scale");
const border = document.querySelector("#border");
const contain = document.querySelector("#scale2");
const footer = document.querySelector("#foot");
const footerScale = document.querySelector("#footscale");
const contact = document.querySelector("#contactscale");

function getResolution() {
  console.log(`Window resolution is ${window.innerWidth} x ${window.innerHeight}`);
}
function scaleWindow(){
  if (window.innerWidth < (735)) {
      body.style.flexFlow = "column"; //Move side bar below text

      border.style.borderRight = "none"; //Change the border
      border.style.borderBottom = "3px solid";
      border.style.borderImage = "linear-gradient(90deg, transparent, black, black, black, transparent) 1";

      border.style.width = "90%"; //Adjust the width and margin
      border.style.margin = "auto";
      contain.style.width = "90%";
      contain.style.margin = "auto";
  }
  else { //Undo the changes made
    body.style.flexFlow = "row"; //Move the side bar back

    border.style.borderRight = "3px solid"; //Change the border
    border.style.borderBottom = "none";
    border.style.borderImage = "linear-gradient(0deg, transparent, black, black, black, transparent) 1";

    border.style.width = "50%"; //Adjust the width and margin
    border.style.margin = "0px"; //Note to Sam: use 0px instead of none when assigning a number value
    contain.style.width = "50%";
    contain.style.margin = "0px";
  }
  if (window.innerWidth < (1080)) {
    footer.style.flexFlow = "column"; //Move side bar below text

    footerScale.style.borderRight = "none"; //Change the border
    footerScale.style.borderBottom = "3px solid";
    footerScale.style.borderImage = "linear-gradient(90deg, transparent, white, white, white, transparent) 1";

    footerScale.style.width = "100%"; //Adjust the width and margin
    footerScale.style.margin = "auto";
    contact.style.width = "100%";
    contact.style.margin = "auto";
  }
  else { //Undo the changes made
    footer.style.flexFlow = "row"; //Move the side bar back

    footerScale.style.borderRight = "3px solid"; //Change the border
    footerScale.style.borderBottom = "none";
    footerScale.style.borderImage = "linear-gradient(0deg, transparent, white, white, white, transparent) 1";

    footerScale.style.width = "45%"; //Adjust the width and margin
    footerScale.style.margin = "0px";
    contact.style.width = "60%";
    contact.style.margin = "0px";
  }
};

scaleWindow(); //Run automatically on page startup

window.onresize = scaleWindow; //Every time the window is resized, run the function that checks if the window needs to be rescaled
