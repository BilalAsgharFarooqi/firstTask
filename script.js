function FormValidate(input) {
  // Check if values in 5 fields are not empty,if empty fill it
  let a = document.forms["form2"]["text1"].value;
  if (a == "") {
    alert("First Name must be filled out");
    return false;
  }
  let b = document.forms["form2"]["text2"].value;
  if (b == "") {
    alert("Last Name must be filled out");
    return false;
  }
  let c = document.forms["form2"]["InputEmail2"].value;
  if (c == "") {
    alert("Email Address must be filled out");
    return false;
  }
  let d = document.forms["form2"]["pass"].value;
  if (d == "") {
    alert("Password must be filled out");
    return false;
  }
  let e = document.forms["form2"]["conpass"].value;
  if (e == "") {
    alert("Confirm Password must be filled out");
    return false;
  }

  //Take Input values from user entry
  var firstName = document.getElementById("InputText1").value;
  var lastName = document.getElementById("InputText2").value;
  var email = document.getElementById("InputEmail2").value;
  //encode
  var inPass = btoa(document.getElementById("password").value);
  //decode
  var inPass1 = atob(inPass);
  var conPass = document.getElementById("confirmpassword").value;
  //Variable for email validation
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  //Variable for email duplicate Validation
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("userdata"))
    ? JSON.parse(localStorage.getItem("userdata"))
    : [];
  //Check if the email is duplicate or not
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("duplicate data");
  }
  //If email not duplicate,check if both passwords doesn't match
  //If matches, data will be storedin the storage and you can check
  else if (input.value.match(validRegex)) {
    //If confirm password doesn't match
    if (e !== d) {
      alert("Password Doesn't Match,Rewrite please");
      return false;
    }
    user_records.push({
      fName: firstName,
      lName: lastName,
      email: email,
      pswE: inPass,
      pswD: inPass1,
      cPass: conPass,
    });
    localStorage.setItem("userdata", JSON.stringify(user_records));
  }
  //If user typed invalid email address
  else {
    alert("Invalid email address!");
    return false;
  }
}
