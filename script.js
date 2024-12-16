//Generate Prefix
function genPrefix(firstName) {
    if (firstName.length >= 5) {
        return 'Dr.'
    } else {
        return 'Professor'
    }
}


//Generate First Name
function genFirstName(firstName) {
    const firstLetter = firstName.charAt(0).toLowerCase()
    if (firstLetter === 'a') {
        return 'Jeff'
    } else if (firstLetter === 'b') {
        return 'Pablo'
    } else {
        return 'Julian'
    }
}

//Generate Middle Name
function genMiddleName(roadType, favoriteColor) {
    if (roadType === 'Dr') {
        return `${favoriteColor}ridge` //if color blue middle name is Blueridge
    } else if (roadType === 'Prof') {
        return `${favoriteColor}son`
    } else {
        return `${favoriteColor}stone`
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
    return `of the ${favAminal} tribe.`
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
    const fullName = `${capitalizePrefix} ${capitalizeFirstName} ${capitalizeMiddleName} ${capitalizeLastName} ${suffix}`

    //Display new name
    document.getElementById('result').textContent = fullName
}

//Capitalize Function
function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}