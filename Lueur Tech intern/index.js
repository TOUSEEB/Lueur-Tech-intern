let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let cpassword = document.getElementById('cpassword');

form.addEventListener('submit',(event)=>{
    event.preventDefault();

    validate();
});

//function for showing error
function setErrorMsg(input, errormsgs){
    let formControl = input.parentElement;
    let small= formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

//function for showing that the success 
function  setSuccessMsg(input){
    let formControl = input.parentElement;
    formControl.className = "form-control success";

}


// define the validate function

let validate = ()=>{

let usernameVal = username.value.trim();
let emailVal = email.value.trim();
let phoneVal = phone.value.trim();
let passwordVal =password.value.trim();
let cpasswordVal =cpassword.value.trim();

// validate username
if(usernameVal==""){
    setErrorMsg(username,'username cannot be blank');
}
else if(usernameVal.length<=2){
    setErrorMsg(username,'username min 3 char and some numeric');
}
else{
    setSuccessMsg(username);
}

// validate email
if(emailVal==""){
    setErrorMsg(email,'email cannot be blank');
}
else if(emailVal.length<=2){
    setErrorMsg(email,'Not a valid Email');
}
else{
    setSuccessMsg(email);
}
// validate phone 
if(phoneVal==""){
    setErrorMsg(phone,'phone Number cannot be blank');
}
else if(phoneVal.length != 10){
    setErrorMsg(phone,'Not a valid phone number');
}
else{
    setSuccessMsg(phone);
}
// validate password
if( passwordVal==""){
    setErrorMsg( password,' password cannot be blank');
}
else if(passwordVal.length<=5){
    setErrorMsg( password,' Minimum 6 char');
}
else{
    setSuccessMsg( password);
}
// validate cpassword
if( cpasswordVal==""){
    setErrorMsg( cpassword,'Confirm password cannot be blank');
}
else if(passwordVal != cpasswordVal){
    setErrorMsg( cpassword,'password are not matching');
}
else{
    setSuccessMsg( cpassword);
}


}



