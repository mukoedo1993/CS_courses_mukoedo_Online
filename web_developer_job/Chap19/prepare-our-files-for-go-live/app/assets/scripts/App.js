//15TH COURSE
import '../styles/styles.css'
//END OF 15TH COURSEb

import 'lazysizes'


import MobileMenu from './modules/MobileMenu'

import RevealOnScroll from './modules/RevealOnScroll'

import StickyHeader from './modules/StickyHeader'

//import Modal from './modules/Modal' //commented in course 57



//new Modal() //course 56 //commented in course 57
//let stickyHeader = //commented in course 57
new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75) //made it work on
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)


alert("nimasile")
alert("landloard")
//let mobileMenu = //commented in course 57 // If your website is pretty complex, then you are recommended to download event-emitter...
new MobileMenu();
let modal // until here, the type for modal is undefined...


document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
    
        //the nested comment below will work.
        if (typeof modal == "undefined") {
            import(/* webpackChunkName: "modal" */'./modules/Modal.js').then( x => {
                modal = new x.default() //default: (alias) new Modal(): Modal

                setTimeout(() => modal.openTheModal(), 20) //let the browser wait for 20ms, wait for the browser to create a new object into the DOM.
            }
            ).catch(() => console.log("There was a problem...")) // Once we have imported the Modal, we want to create a new instance of the class.
            //promise: LECTURE 57th
            //It might take thousands of ms to import the file...
            // If everything is well, then the function, then() we provide will get called. However, if there is a problem in the file, never load, such as an error, catch() will be run.
            // then, catch get called.
            //    

        } else {
            // We don;t need to load the modal again.
            modal.openTheModal()

        }

    })
})

//start of lecture 20
if(module.hot) {
    module.hot.accept() // accept hot updates if it makes sense to accept that.
}