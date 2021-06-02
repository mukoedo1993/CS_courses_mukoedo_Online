If we use a small screen, then the nevigations will be hidden,
and a new button MENU will appear.

And, we want to make browser to only show important text and a link
to full text on small browser or both. Once we showed the full text, the link will turn to a
collapse button.


Our solutions:
1:custom HTML & CSS
2: JavaScript: Declarative Toggle
In this scenario, Javascript will handle the click or tap events and it
will also add and remove the right classes at the right moment to the right elements.



In HTML:
    <script type="text/javascript" src="js/jquery.js"></script>
    <script type="text/javascript" src="js/cycle2.js"></script>
    <script type="text/javascript" src="js/declarativeToggle.js"></script>
    ...
                          <span data-toggle-target=".full-text" class="toggle-btn read-more" data-toggle-text="Hide the full text">
                                Read the full text</span></p>
                                <!-- If you show your content, a button will reserve for you collapse it with the data-toggle-text content.
                                -->
    ...
                            <span data-toggle-target=".full-text2" class="toggle-btn2 read-more2" data-toggle-text="Hide the full text">
                            Read the full text of sidebar</span></p>

    ...
In CSS:
    @media screen and (min-width: 768px){

.toggle-btn {
     /*by default*/
     display:none;
     
}
.read-more {
    display:none;
}


.main-area .toggle-btn-visible{
    display: block;       /*if js file is loaded successfully*/
    }
    
    .main-area .toggle-target-hidden {
        display: none;       
    }
    
    .main-area .toggle-target-expanded {
        display:block;
    }
}

@media screen and (max-width: 767px){
    .read-more {
        text-decoration: underline;
        color: blue;
        cursor: pointer;
    }
    .read-more:hover {
        text-decoration: none;
        color: blue;
        cursor: pointer;
    }
.toogle-btn-visible {
        display: block;       /*if js file is loaded successfully*/
    }
    
    .toggle-target-hidden {
        display: none;       
    }
    
    .toggle-target-expanded {
        display:block;
    }
}



My design based on this course:
I let the client to choose full text or all text on the main-area. But, we would show all on
side-bar on large-screen devices but let users to choose to show full text or hide on the sidebar and navigational section.