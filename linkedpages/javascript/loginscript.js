const passwordField = document.getElementById('password');
const showPasswordCheckbox = document.getElementById('showpassword');
/* OLD CHECKBOX CODE
showPasswordCheckbox.addEventListener('change', function() {
    if (this.checked) {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
});
*/
function delay (URL) {
    setTimeout( function() { window.location = URL }, 2000 );
}
/* image as a checkbox */
const sh = document.getElementById("showhide");
function shp(){
    if (sh.currentSrc.endsWith("show.png")){
        sh.src = "../linkedpages/images/hide.png";
        passwordField.type = 'text';
    } else{
        sh.src = "../linkedpages/images/show.png"
        passwordField.type = 'password';
    }
}
var inpusr = document.getElementById("email");
var inppas = document.getElementById("password");
function lgnbtn(){
    if(inpusr.value == "" || inppas.value == ""){
        if (inpusr.value == ""){
            document.getElementById("erroruser").style.display = "block";
            setTimeout(function(){document.getElementById("erroruser").style.display = "none"},5000);
        } 
        if (inppas.value == ""){
            document.getElementById("errorpass").style.display = "block";
            setTimeout(function(){document.getElementById("errorpass").style.display = "none"},5000);
        } 
    } else if(!inpusr==""&&!inppas==""){
        document.getElementById("lgbtn").href = "../home.html"
    }
}