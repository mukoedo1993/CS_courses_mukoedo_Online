import throttle from 'lodash/throttle' // run our function continually every 200ms

import debounce from 'lodash/debounce' // only do sth once after resizing and wait for a given time (of ms)

class RevealOnScroll {
    constructor(els, thresholdPercent) { // reusable class.

        this.thresholdPercent = thresholdPercent
        
        this.itemsToReveal = els
        //this.itemsToReveal = document.querySelectorAll(".feature-item")// select all elements

        this.browserHeight = window.innerHeight

        this.hideInitially()
        this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)//200ms
        //So, no matter how many times the function called, it will still be bound to the overall object. <--bind(this)
        //And, it will run calCaller not faster than 1 time per 200ms.
        //


        this.events()

    }

    events() {
        window.addEventListener("scroll", this.scrollThrottle)


        //However, notice that resize is not very efficient. It will fire up resize events many many times.
        // But we only need to let it to fire up at the end of resizing.
        window.addEventListener("resize", debounce(() => {
            console.log("Resize just ran") // If we keep resizing, nothing will be printed on the console.
            this.browserHeight = window.innerHeight // window.innerHeight: e.offsetTop: total page height  
        }, 333))
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


        if(window.scrollY + this.browserHeight > el.offsetTop){    
            // window.scrollY: how far away it is from the top of your page
            // el.offsetTop: 

        console.log("Element was calculated")
        let scrollPercent = (el.getBoundingClientRect().y / this.browserHeight) * 100
                      //console.log(el.getBoundingClientRect().y) //what is getBoundingCLientRect
        // Answer: It measures how far the top edge of element div from the top edge of
        // browser's top viewport.



        if (scrollPercent < this.thresholdPercent ) { 
            el.classList.add("reveal-item--is-visible")

            el.isRevealed = true
            if(el.isLastItem) { // To determine whether we are dealing the last element contains the given class selector name
                // remove the scroll event listener
                window.removeEventListener("scroll", this.scrollThrottle)
            }
        }


        }

    }
    //end of the function calculateIfScrolledTo(el)




    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item" ) // apply it on each element.
        // element.
            el.isRevealed = false
          })
           this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true //It will count how many elements in the collection
           // last element in our array
           // by default is false.
        }
        
}


export default RevealOnScroll