const logins = [
    {
        "username": "N8theGrape", 
        "password": "N8Codes", 
        "name": "Nathan Gillespie", 
        "level": "Administrator",
        "id": 0
    },
    {
        "username": "cowface25", 
        "password": "fatcow12345", 
        "name": "Camden Bradshaw", 
        "level": "Superuser", 
        "id": 1
    },
    {
        "username": "Tester", 
        "password": "Tester", 
        "name": "Tester Account", 
        "level": "Tester",
        "id": 2
    }
];
function getLogins() {
    return logins;
}

function checkLogin(username, password) {
    for (var accountIndex = 0; accountIndex < logins.length; accountIndex++) {
        if (username == logins[accountIndex].username && [password] == logins[accountIndex].password) {
            return true;
        }
    }
    return false;
}

function getUserId(username) {
    for (var accountIndex = 0; accountIndex < logins.length; accountIndex++) {
        if (username == logins[accountIndex].username) {
            return logins[accountIndex].id;
        }
    }
    return false;
}

function deleteCookie(name) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
}