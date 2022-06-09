function ValidateEmailandDuplication(input) {
  var firstName = document.getElementById("InputText1").value;
  var lastName = document.getElementById("InputText2").value;
  var email = document.getElementById("InputEmail2").value;
  //encode
  var inPass = btoa(document.getElementById("password").value);
  //decode
  var inPass1 = atob(inPass);
  var conPass = document.getElementById("confirmpassword").value;
  let user_records = new Array();
  user_records = JSON.parse(localStorage.getItem("userdata"))
    ? JSON.parse(localStorage.getItem("userdata"))
    : [];
  if (
    user_records.some((v) => {
      return v.email == email;
    })
  ) {
    alert("duplicate data");
  } else {
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
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.value.match(validRegex)) {
    alert("Valid email address!");
    return true;
  } else {
    alert("Invalid email address!");
    return false;
  }
}
