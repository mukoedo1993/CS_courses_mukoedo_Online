import throttle from 'lodash/throttle'

class RevealOnScroll {
    constructor() {
        this.itemsToReveal = document.querySelectorAll(".feature-item")// select all elements


        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)//200ms
        //So, no matter how many times the function called, it will still be bound to the overall object. <--bind(this)
        //And, it will run calCaller not faster than 1 time per 200ms.
        //


        this.events()

    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle)
        }


    calcCaller() {
            console.log("Scroll function ran")
            this.itemsToReveal.forEach(el => {
             if (el.isRevealed == false){ 
                 this.calculateIfScrolledTo(el)
             }
            })
    }



    calculateIfScrolledTo(el) {
        //console.log(el.getBoundingClientRect().y) //what is getBoundingCLientRect

        // Answer: It measures how far the top edge of element div from the top edge of
        // browser's top viewport.


        console.log("Element was calculated")
        let scrollPercent = (el.getBoundingClientRect().y / window.innerHeight) * 100

        if (scrollPercent < 75 ) {
            el.classList.add("reveal-item--is-visible")

            el.isRevealed = true
            if(el.isLastItem) { // To determine whether we are dealing the last element contains the given class selector name
                // remove the scroll event listener
                window.removeEventListener("scroll", this.scrollThrottle)
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item" ) // apply it on each element.
        // element.
            el.isRevealed = false
          })
           this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true //It will count how many elements in the collection
           // last element in our array
        }
        
}


export default RevealOnScroll