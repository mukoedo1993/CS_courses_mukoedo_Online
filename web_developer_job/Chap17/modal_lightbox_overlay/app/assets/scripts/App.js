//15TH COURSE
import '../styles/styles.css'
//END OF 15TH COURSEb


import MobileMenu from './modules/MobileMenu'

import RevealOnScroll from './modules/RevealOnScroll'

import StickyHeader from './modules/StickyHeader'

import Modal from './modules/Modal'


new Modal() //course 56
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75) //made it work on
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)

let mobileMenu = new MobileMenu();

//start of lecture 20
if(module.hot) {
    module.hot.accept() // accept hot updates if it makes sense to accept that.
}