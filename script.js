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
    if (lastLetter === 'e') {
        return 'Sun'
    } else if (lastLetter === 'o') {
        return 'Smeagle'
    } else {
        return 'Argyle'
    }
}

//Generate Suffix
function genSuffix(favAminal) {
    if (favAminal === 'cat' && firstName >= 5 ) {
    return `27 ${favAminal}s all of which are very evil`
    }else if (favAminal === 'dog'){
    return 'a ${favAminal} (basic)'
    } else {
        return 'a ${favAminal} who is also super evil'
    }
}

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
    const fullName = `Your name is ${capitalizePrefix} ${capitalizeFirstName} ${capitalizeMiddleName} ${capitalizeLastName}, you own ${suffix}`

    //Display new name
    document.getElementById('result').textContent = fullName
}

//Capitalize Function
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}


if (!firstName || !lastName || !roadType || !favoriteColor || !favAminal) {
    return alert("Fill out all fields or I'm sending the ghouls after you")
}
