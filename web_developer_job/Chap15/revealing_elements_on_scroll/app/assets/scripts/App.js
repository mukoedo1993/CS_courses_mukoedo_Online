//15TH COURSE
import '../styles/styles.css'
//END OF 15TH COURSEb


import MobileMenu from './modules/MobileMenu'

import RevealOnScroll from './modules/RevealOnScroll'


let revealOnScroll = new RevealOnScroll()

let mobileMenu = new MobileMenu();

//start of lecture 20
if(module.hot) {
    module.hot.accept() // accept hot updates if it makes sense to accept that.
}