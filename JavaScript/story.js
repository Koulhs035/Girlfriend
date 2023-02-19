const typeWriter = function (elementId) {
    text = getText(elementId)
    const element = document.getElementById(elementId);
    element.innerHTML = ""
    const speed = 100; // typing speed in milliseconds
    let i = 0;
    let lineBreak = false;

    const type = function () {
        if (i < text.length) {
            let char = text.charAt(i);
            if (char === '\n') {
                lineBreak = true;
            }
            if (lineBreak) {
                element.innerHTML += '<br>';
                lineBreak = false;
            }
            element.innerHTML += char;
            i++;
            setTimeout(type, speed);
        }
    };
    type();
};

function getText(idelement) {
    if (idelement == 'myDiv1') { //Text for image 1
        text = "Hello love \n I really hope this works or else i am going to fucking go goblin mode jesus fucking christ i peed my fucking pants a little!"
    }
    if (idelement == 'myDiv2') { //Text for image 2
        text = "Hello love  I really hope \n this works or else i'm going to shit my fucking pants \n not even joking!"
    }
    if (idelement == 'myDiv2') { //Text for image 3
        text = "I lost my wallet there κλαιω"
    }

    return text;
}



function RemoveHidden(idelement) {
    //gets the selected div and puts # infront
    let myDiv = "#" + idelement
    let selectedDiv = document.querySelector(myDiv);


    // Traverse up the DOM tree and remove the "hidden" class from the appropriate ancestor element
    let parent = selectedDiv.parentElement;
    parent = parent.parentElement;
    parent.classList.remove('hidden');
    
    return parent;
}



// Get the image element by its ID
var img = document.getElementById("myImage");

// Get the div ID
var divElement = document.getElementById("myDiv");


//Gets the page and sets it to 0
//0 Is the value that nothing is displayed
//Everytime you click next, you go one page ahead 
//Also changing the photo and text
const next = document.getElementById('next');
const prev= document.getElementById('prev');
var page = 0
next.addEventListener("click", function () { //+1 Next Page
    if (page < 16) {
        page += 1; //Goes up one page
        updatePage(page); //Updates page
        $parent = RemoveHidden(newID(page)); //Removes hidden element
    }
});

prev.addEventListener("click", function () { //-1 Previous page
    if (page > 0) {
        page -= 1; //Goes down one page
        updatePage(page); //Updates page
        if (page == 0) { //Makes everything hidden if there is nothing to show
            $parent.classList.add("hidden")
        }
    }
});




//Function to update page
function updatePage() {
    let x = newID(page); //Makes the "myDiv" with a number 
    img.src = fetchPhoto(page); //Fetches photos
    divElement.id = x;
    typeWriter(x);
}

function fetchPhoto(page) {
    var path = "test.jpg"; //Backup path
    if (page > 0) { //So as not to display error when reddit 1 isn't found
        path = "photos/reddit/reddit" + page + ".jpg";
    }
    return path;
}


function newID(page) { //Simply adds the number after myDiv
    var newID = "myDiv" + page;
    return newID;
}