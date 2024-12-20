//Generate Prefix
function genPrefix(firstName) {
    if (firstName.length >= 4) {
        return 'Dr.'
    } else if (firstName.length === 6) {
        return 'Mc'
    } else {
        return 'Professor'
    }
}


//Generate First Name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase() 
    if (firstLetter === 'a') {
        return 'NotEvil'
    } else if (firstLetter === 'b') {
        return 'Evilperson'
    } else if (firstLetter === 'c') {
        return 'Jeff'
    } else if (firstLetter === 'd') {
        return 'Smeagle'
    } else if (firstLetter === 'e') {
        return 'Adam'
    } else if (firstLetter === 'f') {
        return 'Badperson'
    } else if (firstLetter === 'g') {
        return 'Heinz'
    } else if (firstLetter === 'h') {
        return 'Smelly'
    } else if (firstLetter === 'i') {
        return 'Jekyll'
    } else if (firstLetter === 'j') {
        return 'Danny'
    } else if (firstLetter === 'k') {
        return 'Jason'
    } else if (firstLetter === 'l') {
        return 'Evil'
    } else if (firstLetter === 'm') {
        return 'Viktor'
    } else if (firstLetter === 'n') {
        return 'Superbad'
    } else if (firstLetter === 'o') {
        return 'Django'
    } else if (firstLetter === 'p') {
        return 'Superevil'
    } else if (firstLetter === 'q') {
        return 'Hailey'
    } else if (firstLetter === 'r') {
        return 'Victor'
    } else if (firstLetter === 's') {
        return 'Tiny'
    } else if (firstLetter === 't') {
        return 'Vanessa'
    } else if (firstLetter === 'u') {
        return 'Mia'
    } else if (firstLetter === 'v') {
        return 'Manny'
    } else if (firstLetter === 'w') {
        return 'Large'
    } else if (firstLetter === 'x') {
        return 'Jay'
    } else if (firstLetter === 'y') {
        return 'Wyatt'
    } else if (firstLetter === 'z') {
        return 'Harley'
    }
    return 'Unknown'
}

//Generate Middle Name
function genMiddleName(roadType) {
    if (roadType === 'tropicalVacation') {
        return 'frank' 
    } else if (roadType === 'coldVacation') {
        return 'veryevil'
    } else if (roadType === 'home') {
        return 'badguy'
    } else {
        return 'von'
    }
}

//Generate Last Name
function genLastName(lastName) {
    const lastLetter = lastName.charAt(lastName.length - 1)
    if (lastLetter === 'a') {
        return 'Extraevilson'
    } else if (lastLetter === 'b') {
        return 'Malvolio'
    } else if (lastLetter === 'c') {
        return 'Screwyou'
    } else if (lastLetter === 'd') {
        return 'Smeagle'
    } else if (lastLetter === 'e') {
        return 'Smorgle'
    } else if (lastLetter === 'f') {
        return 'Boffinstein'
    } else if (lastLetter === 'g') {
        return 'Frankenfluff'
    } else if (lastLetter === 'h') {
        return 'Shockton'
    } else if (lastLetter === 'i') {
        return 'Whizbang'
    } else if (lastLetter === 'j') {
        return 'Crankshaft'
    } else if (lastLetter === 'k') {
        return 'Splatsmash'
    } else if (lastLetter === 'l') {
        return 'Tinkerwrench'
    } else if (lastLetter === 'm') {
        return 'Stumbleclutch'
    } else if (lastLetter === 'n') {
        return 'Superbad'
    } else if (lastLetter === 'o') {
        return 'Infinito'
    } else if (lastLetter === 'p') {
        return 'Bleebus'
    } else if (lastLetter === 'q') {
        return 'Bloobus'
    } else if (lastLetter === 'r') {
        return 'Blabus'
    } else if (lastLetter === 's') {
        return 'Blibus'
    } else if (lastLetter === 't') {
        return 'Blubus'
    } else if (lastLetter === 'u') {
        return 'Bubblesniff'
    } else if (lastLetter === 'v') {
        return 'Whizzywig'
    } else if (lastLetter === 'w') {
        return 'Supasmort'
    } else if (lastLetter === 'x') {
        return 'Frankenstein'
    } else if (lastLetter === 'y') {
        return 'Stumbleclutch'
    } else if (lastLetter === 'z') {
        return 'Vortex'
    }
    return 'Unknown'
}

//Generate Suffix
function genSuffix(favAminal) {
    if (favAminal === 'cat' && firstName >= 5 ) {
    return `27 ${favAminal}s all of which are very evil`
    }else if (favAminal === 'dog'){
    return `a ${favAminal} who is very nice and lovable`
    } else {
        return `a ${favAminal} who is also super evil`
    }
}

//Generate random place and goal
function RandomPlaceAndGoal() {
let randomNumber = Math.floor(Math.random() * 6)
//All possible answers
switch (randomNumber) {
  case 0:
    return 'You live in an oddly shaped skyscraper. Your goal is to take over the tristate area.'
    break;
  case 1:
    return 'You live in a very old and scary castle. Your goal is revive the dead.'
    break;
  case 2:
    return 'You live in your moms house. She does not let you do any experiments.'
    break;
  case 3:
    return 'You live in a secret underground lair. Your goal is to take over the entire world.'
    break;
  case 4:
    return 'You live in Latveria. Your goal is to defeat a rock, a slinky, some fire, and an invisible lady.'
    break;
  case 5:
    return 'You live in an abandoned house. Your goal is to become immortal.'
    break;
    }
}
const randomPlaceAndGoal = RandomPlaceAndGoal();


//Generate Full Name
function genFullName() {
    //Get users inputs from HTML
    const firstName = document.getElementById('firstName').value.trim()
    const lastName = document.getElementById('lastName').value.trim()
    const roadType = document.getElementById('roadType').value
    const favoriteColor = document.getElementById('favColor').value.trim()
    const favAminal = document.getElementById('favAminal').value.trim()

    //Run Name Generating Functions
    const prefix = genPrefix(firstName)
    const newFirstName = genFirstName(firstName)
    const middleName = genMiddleName(roadType, favoriteColor)
    const newLastName = genLastName(lastName)
    const suffix = genSuffix(favAminal)
    //Store them in new variables

    //Capitalize Name Variables when needed
    const capitalizePrefix = capitalize(prefix)
    const capitalizeFirstName = capitalize(newFirstName)
    const capitalizeMiddleName = capitalize(middleName)
    const capitalizeLastName = capitalize(newLastName)

    //Combine them together
    const fullName = `Your name is ${capitalizePrefix} ${capitalizeFirstName} ${capitalizeMiddleName} ${capitalizeLastName}, you own ${suffix}. ${randomPlaceAndGoal}`

        if (favoriteColor.toLowerCase() === 'science') {
        var modal = document.getElementById("myModal");
          modal.style.display = "block"; // Show the modal
        }

    //Display new name
    document.getElementById('result').textContent = fullName
}

//Capitalize Function
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}


