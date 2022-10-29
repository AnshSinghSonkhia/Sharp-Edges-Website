/**
 * add event on element (MACHINE)
 */

 const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }

/**
 * The Working of the Hamburger
 */

const HamburgerIcon = document.querySelector("[data-hamburger-icon]");
const HamburgerList = document.querySelector("[data-hamburger-list]");

var HamburgerClicks = 0;
var HamburgerTouch = 0;

HamburgerIcon.addEventListener("click", () => {
    HamburgerClicks += 1;
    console.log(HamburgerClicks);

    //check if the number is even
    if(HamburgerClicks % 2 == 0) {
        console.log("The click is even.");
        HamburgerList.classList.add("hidden");
        HamburgerList.classList.remove("block");
    }

    // if the number is odd
    else {
        console.log("The click is odd.");
        HamburgerList.classList.remove("hidden");
        HamburgerList.classList.add("block");
    }
})

HamburgerIcon.addEventListener("touchstart", () => {
  HamburgerTouch += 1;
    console.log(HamburgerTouch);

    //check if the number is even
    if(HamburgerTouch % 2 == 0) {
        console.log("The touch is even.");
        HamburgerList.classList.add("hidden");
        HamburgerList.classList.remove("block");
    }

    // if the number is odd
    else {
        console.log("The touch is odd.");
        HamburgerList.classList.remove("hidden");
        HamburgerList.classList.add("block");
    }
})



/**
 * Footer
 */

//  let auto = document.getElementById("auto");
//  let light = document.getElementById("light");
//  let dark = document.getElementById("dark");
//  const switchMode = (event) => {
//      switch (event.target.value) {
//          case "auto":
//              auto.classList.remove("hidden");
//              light.classList.add("hidden");
//              dark.classList.add("hidden");
//              break;
//          case "light":
//              auto.classList.add("hidden");
//              light.classList.remove("hidden");
//              dark.classList.add("hidden");
//              break;
//          case "dark":
//              auto.classList.add("hidden");
//              light.classList.add("hidden");
//              dark.classList.remove("hidden");
//              break;
//          default:
//              break;
//      }
//  };
 


/**
 * Contact Us Page
 */

