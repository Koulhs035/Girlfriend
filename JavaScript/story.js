//Gets the page and sets it to 0
//0 Is the value that nothing is displayed
//Everytime you click next, you go one page ahead 
//Also changing the photo and text
const next = document.getElementById('next'); //Gets the Next button
const prev = document.getElementById('prev'); //Gets the Back button

var page = 0 //Sets page to 0
next.addEventListener("click", function () { //+1 Next Page

    if (page < 16) {
        swipe.classList.add("swipeR"); //Adds new swipe class

        page += 1; //Goes up one page
        updatePage(page); //Updates page
        $parent = RemoveHidden("myDiv" + page); //Removes hidden element
    }
    removeSwipe(); //Removes the swipe class so as to add animation again
});

prev.addEventListener("click", function () { //-1 Previous page

    if (page > 0) {
        page -= 1; //Goes down one page
        updatePage(page); //Updates page
        swipe.classList.add("swipeL"); //Adds new swipe class
        removeSwipe(); //Removes the swipe class so as to add animation again
        if (page == 0) { //Makes everything hidden if there is nothing to show
            $parent.classList.add("hidden")
        }
    }

});

function removeSwipe() {
    setTimeout(function () {
        swipe.className = "";
    }, 400); // Wait for 1000 milliseconds (1 second) before executing the code
}


var texts = { //Text to go to the typewriter
    myDiv1: "Αχ... Η πρώτη φορά που βγήκαμε XD \n Ένιωθες πολύ άβολα νομίζω και το ίδιο και έγω \n ελπίζω να μην φάνηκε ιδιαίτερα πολύ. \n Δεν ξέρω αν το έχεις διαβάσει αυτό αλλά νομίζω πως, \n τα πάντα τα εξηγεί το Reddit. ^ ^",
    myDiv2: "Και τι δεν θα έδινα για να γυρίσω πίσω σε αυτή την μέρα! \nΟ ενθουσιασμός μου ήταν απερίγραπτος...\nΤο πρώτο πρώτο μου ραντεβού!!!\nΕιλικρινά ήταν σχεδόν απίστευτο. Δεν εχω υπάρξει στην ζωή μου ποτέ πιο ανυπόμονος",
    myDiv3: "Oof... Ειλικρινά εδώ πέρα δεν ξέρω που είχα το μυαλό μου.\nΕίχα συγκεντρωθεί πολύ στο να σε δω που δεν είδα το πορτοφόλι μου να πέφτει.\nΌταν τελικά το πήρα άρχισα να αγχώνομαι πως θα με αφήσεις επειδή ήμουν χαζός και έχασα έτσι το πορτοφόλι μου.\n αλλά δεν το έκανες και το εκτίμησα πάρα πολύ!!!",
    myDiv4: "Αντικειμενικά δεν ξέρω πως ήταν smart way...\nΠερίμενα πως και πως να έρθεις πιο κοντά αλλά δεν ψήθηκες ιδιαίτερα αλλά δεν πειράζει.\nΠάντως αν είναι ποτέ να παγώσω από το κρύο θέλω να είναι γιατί θα είσαι εσύ ζεστά με το μπουφάν μου...\nΚάθε κύτταρο του οργανισμού μου έκανε την καλύτερη του δουλειά για να μην τρέμει έτσι ώστε να φανεί πως δεν κρυώνω\nΚαι θα το ξανακάνω όπως και το ξαναέκανα για εσένα, για να μην κρυώνεις. <3",
    myDiv5: "Ξανά από τις πιο υπέροχες στιγμές της ζωής μου.\nΗ αδρεναλίνη, η χαρά, η αγάπη! Ήταν όλα ρόδινα! Το πρώτο φιλί!\nΦαντάζομαι όλοι θυμόμαστε το πρώτο μας φιλί. Και εγώ δεν θα το ξεχάσω ποτέ!\nΑπλά είμαι χαρούμενος που το πρώτο μου φιλί ήταν με μια κοπέλα\nπου αγαπώ τόσο πολυ και είναι τοσο ξεχωριστή.",
    myDiv6: "Ακόμα νιώθω λίγο άσχημα που σε πήγα στον πόλεμο χωρίς τουφέκι.\nΔεν με ήξερες καλά καλά και γνώρισες τον Αλέξανδρο, τον Τελίδη και την Ιουλία.\n Πήγαμε για πατινάζ και οι άλλοι δύο κάνανε κλασικά καφρίλες.\nΞανά ζητάω ταπεινά συγγνώμη.",
    myDiv7: "Αν δεν κάνω λάθος ήταν μια μέρα πριν του Αγίου Βαλεντίνου.\nΣε ρώτησα λίγο διστακτικά  αν ήμασταν μαζί σαν ζευγάρι ή όχι.\nΕιλικρινά δεν ξέρω γιατί περίμενα τόσο καιρό. Ίσως το είχα αφήσει να εννοηθεί\nΌπως και να έχει, ήμουν αρκετά χαρούμενος να μπορώ επίσημα να σε πω ως <<Η κοπέλα μου>>.",
    myDiv8: "Πρώτη φορά με κάποιον Αγίου Βαλεντίνου.\nΤο λέει και στο Reddit Post.\n Απερίγραπτη χαρά! Θυμάμαι να πηγαίνω να βρω ένα αρκουδάκι να σου κάνω δώρο (Ακόμα δεν σου λέω από που το πήρα :D)\nΚαι μετά το τριαντάφυλλο...\nΣκεφτόμουν <<Wow... Κάνω cute couple's πράγματα>> και ήμουν over the moon",
    myDiv9: "Δεν έχω να πω πολλά για αυτό. Απλά χαίρομαι που ήταν με εσένα. <3",
    myDiv10: "Αχαχαχα ήταν στις αρχές και το θεώρησες κιουτ\nΈνα μικρό ημερολόγιο, που σίγουρα δεν διάβασες ποτέ!",
    myDiv11: "Ειλικρινά. Το καλύτερο καλοκαίρι!\nΉταν ένα όνειρο... Κάθε μέρα ξυπνάγαμε μαζί! Τι άλλο μπορεί να θέλω\nΣυγγνώμη που δεν πέρασες όσο καλά περίμενες και αυτό το καλοκαίρι θα περάσουμε μαζί ακόμα καλύτερα!\nΜιας και το ανέφερα! Πρέπει να κάνουμε σχέδια για διακοπές.\nΕλπίζω αυτό να είναι ένα από τα πολλά καλοκαίρια μαζί σου! <3",
    myDiv12: "Θυμάμαι πάρα πολύ καλά την μέρα που έφυγες για πρώτη φορά.\nΕτοιμαζόμουν να είμαι χωρίς την παρουσία σου μετά από καιρό.\nΜέχρις στιγμής, από τον Δεκέμβριο του 21 η μεγαλύτερη χρονική περίοδος που δεν σε είχα δει ήταν 2 βδομάδες.\nΕδώ ήξερα ότι αν αγαπάμε ο ένας τον άλλον αρκετά θα κρατήσουμε, όπως έχουμε κάνει μέχρι τώρα.",
    myDiv13: "Αχχ θυμάμαι να σπάω το κεφάλι μου να βρώ τι να σου κάνω σαν δωράκι.\n με τσάκωσες βέβαια όταν πήγα να πάρω τριαντάφυλλο και σοκολάτες γιατί αποφάσισες να μου κάνεις έκπληξη.\nΕιλικρινά η καλύτερη έκπληξη που μου έχουν κάνει ποτέ!\n Ήμουν τόσο χαρούμενος που θα σε έβλεπα ξανά όπως κάθε φορά που περιμένω να γυρίσεις από την Κρήτη.",
    myDiv14: "Ένα post που έγραφα με μισή καρδιά. Όπως κάθε φορά που φεύγεις\nΕδώ πάλι θα περίμενα να σε δω πάλι και δεν είχα την αγκαλιά σου κοντά. :'( ",
    myDiv15: "Ειλικρινά πάλι νιώθω ότι δεν σε έχω ευχαριστήσει αρκετά για τις 10 υπέροχες μέρες.\nΚάθε μέρα πιο ξεχωριστή από την προηγούμενη! Με πήγες σε τόσο ωραία μέρη.\nΚάθε μέρα πραγματικά ήταν σαν ταινία. Ειδικά εκεί στον φάρο...\nΓνώρισα και την Αμαλία! Και την Κουίν! Νταξει και τον Βίκτωρ.\nΠήγαμε και είδαμε το aquarium. Από τις καλύτερες εμπειρίες!\nΞυπνάγαμε μαζί και κοιμόμασταν μαζί! Ανυπομονώ να το κάνουμε πάλιιι!",
    myDiv16: "Τελευταία εικόνα αυτή. Δεν ξέρω πως μου ήρθε η ιδέα αλλά το θεώρησα κιουτ.\nΕλπίζω να σου αρέσει! Συγγνώμη που σε αγνοώ ή νιώθεις ότι σε αγνοώ αλλά φτιάχνω αυτήν εδώ την σελίδα που βλέπεις\nΌσο την φτιάχνω και γράφω αυτές εδώ τις ιστοριούλες με κάνει να καταλαβαίνω πόσο ωραία σχέση έχουμε χτίσει!\nΠραγματικά κάτι πολύτιμο και θα κρατάω όλες τις αναμνήσεις μαζί σου πολύ, πολύ κοντά στην καρδιά μου\nΕυχαριστώ πολύ για όλα... Ειλικρινά με κάνεις καλύτερο άνθρωπο και με κάνεις να νιώθω αγάπη, κάτι που πραγματικά χρειάζομαι.\nΤην ώρα που το γράφω αυτό περιμένω να γυρίσεις από την βόλτα σου για να μιλήσουμε!\n Όπως περιμένω κάθε μέρα! Το αγαπημένο μου κομμάτι της... Όταν μιλάμε ή είμαστε μαζί."
};

function typeWriter(id) {
    var element = document.getElementById(id);
    element.innerHTML = '';

    var text = texts[id];
    if (!text) {
        console.error('Unable to get text for element with id ' + id);
        return;
    }

    var i = 0;
    var speed = 50;
    if (!element) {
        console.error('Unable to find element with id ' + id);
        return;
    }

    setTimeout(function () {
        terminate = false; //With terminate se to false, the typing can start


        function type() {
            if (i < text.length && !terminate) { //If terminate = true then it stops
                if (text.charAt(i) === '\n') { //New Line text
                    element.innerHTML += '<br/>';
                } else {
                    element.innerHTML += text.charAt(i); //Adds each letter to the myDiv element
                }
                i++; //Goes one i forward
                setTimeout(type, speed);
            }
        }
        type();
    }, 500); //Time out so as to give enough time to terminate.
    return;
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
var swipe = document.getElementById("swipe")



//Function to update page
function updatePage() {
    terminate = true;
    let x = "myDiv" + page; //Makes the "myDiv" with a number 
    img.src = fetchPhoto(page); //Fetches photos
    divElement.id = x;
    typeWriter(x);

}

function fetchPhoto(page) {
    var path = "test.jpg"; //Backup path
    if (page > 0 && page < 17) { //So as not to display error when reddit 1 isn't found
        path = "photos/reddit/reddit" + page + ".jpg";
    }
    return path;
}