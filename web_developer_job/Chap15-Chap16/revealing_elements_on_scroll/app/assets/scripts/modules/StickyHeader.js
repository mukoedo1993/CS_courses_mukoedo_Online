/*
TARGET:
Once the user scrolled down about 60 pixels from the top. At that point we could add a dark
modifier to the top sticker. But if we move back, we could undo what we have done before.
*/
import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'


class StickyHeader{

    constructor() {
        this.siteHeader = document.querySelector(".site-header")
        this.pageSections = document.querySelectorAll(".page-section")
        this.browserHeight = window.innerHeight
        this.previousScrollY = window.scrollY
        this.events()
    }


    events() {
        window.addEventListener("scroll", throttle(() => this.runOnScroll(), 200))

        window.addEventListener("resize", debounce(() => {
           
            this.browserHeight = window.innerHeight // window.innerHeight: e.offsetTop: total page height  
        }, 333))
    }


    runOnScroll(){
        this.determineScrollDirection()

        if(window.scrollY > 60/*window.scrollY: how many px scrolled down from the top*/) {
           
            this.siteHeader.classList.add("site-header--dark")
        }else {
            this.siteHeader.classList.remove("site-header--dark")
      
        }

        this.pageSections.forEach(el => this.calcSection(el))
    }



    determineScrollDirection() {
        if (window.scrollY > this.previousScrollY) {
            this.scrollDirection = 'down'
        }else {
            this.scrollDirection = 'up'
        }
        this.previousScrollY = window.scrollY
    }




    calcSection(el) {   // scroll between our beginning and our feature
        if (window.scrollY + this.browserHeight > el.offsetTop &&
            window.scrollY < el.offsetTop + el.offsetHeight) {
                let scrollPercent = el.getBoundingClientRect().y/*y property*/ / this.browserHeight* 100

                if (scrollPercent < 18 && scrollPercent > -0.1 && this.scrollDirection == 'down' ||
                scrollPercent < 33 && this.scrollDirection == 'up'){
                    let matchingLink = el.getAttribute("data-matching-link")//css-like selector

                    document.querySelectorAll(`.primary-nav a:not(${matchingLink})`).forEach(el => el.classList.remove("is-current-link"))
                    document.querySelector(matchingLink).classList.add("is-current-link")

                    //any time we made an active link, we wanted to remove former links.
                }
        }
    }
}
//end of runOnScroll

export default StickyHeader;