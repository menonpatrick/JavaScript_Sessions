

var fullName = function getFullNameAgain() {
    var fName = document.getElementById('firstName').value;
    var lName = document.getElementById('lastName').value;
    var age = document.getElementById('age').value;
    document.write(`Hello ${fName} ${lName}!! ${getStatus(age)}`);
}

function getStatus(age) {
    if (age >= 18) {
        return 'You are valid to travel..';
    } else {
        return 'You are not valid to travel..';
    }
}
