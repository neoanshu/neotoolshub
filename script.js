
function calcAge() {
  let dob = document.getElementById("dob").value;
  let birth = new Date(dob);
  let age = new Date().getFullYear() - birth.getFullYear();
  document.getElementById("result").innerText = "Age: " + age;
}
