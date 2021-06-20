
class MobileMenu {
    constructor() {
        this.menuIcon = document.querySelector(".site-header__menu-icon")
        this.menuContent = document.querySelector(".site-header__menu-content")
        this.siteHeader = document.querySelector(".site-header")
        this.events()
    }

    events() {
        this.menuIcon.addEventListener("click", () => this.toggleTheMenu()) // arrow function
    }
    // arrow function doesn't modify the value of this keyword. In other words, arrow function
    // doesn't receive a direct reference to that method. Instead, we are passing 
    // If we want to listen the click event as soon as the page loads, we need to make sure that 
    // our events method is called at some point.

    toggleTheMenu() {
    //    console.log("hehe")
       this.menuContent.classList.toggle("site-header__menu-content--is-visible"); // this still points to the overall object
        //If we don't provide an arrow function here, instead, use a direct reference to the toggleTheMenu method, then
        //then, addEventListener would run the code within a context where this would be pointing the element that clicked on.
        //IT ADDS A NEW CLASS ON ANY ELEMENT WITH .site-header__menu-content already. If click again, then the extra class gets removed.
        // With this, it will still be pointing to the overall context.


        this.siteHeader.classList.toggle("site-header--is-expanded")
        this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
    }
}

//

export default MobileMenu