var isAuthenticated = getCookie('isAuthenticated') == 'true';
var ID = getCookie('accountID');
function readCookies () {
    var isAuthenticated = getCookie('isAuthenticated') == 'true';
    var ID = getCookie('accountID');
}
function fun1() {
    readCookies();
    openLogin();
}
function fun2() {
    readCookies();
    handleLogout();
}
var loginWindow;
function openLogin() {
    loginWindow = window.open("login.html", "Login", "width=500,height=400,resizable=no");
    loginWindow.addEventListener('unload', function () {
        if(getCookie('isAuthenticated') == 'true') {
            alert('Logged in as ' + getCookie('accountName'));
            document.getElementById('login').style.display = 'none';
            document.getElementById('logout').style.display = 'inline-block';
            handleLogin();
        }
    });
}
function handleLogout() {
    document.getElementById('login').textContent = 'Login';
    deleteCookie('isAuthenticated');
    deleteCookie('accountID');
    deleteCookie('accountName');
    readCookies();
    document.getElementById('logout').style.display = 'none';
    document.getElementById('login').style.display = 'inline-block';
}
if(getCookie('isAuthenticated') == 'true') {
    document.getElementById('login').style.display = 'none';
    document.getElementById('logout').style.display = 'inline-block';
} else {
    document.getElementById('logout').style.display = 'none';
    document.getElementById('login').style.display = 'inline-block';
}