function validateName(field) {
  let name = field.value;

  let output = document.querySelector("#nameTyped");

  output.innerHTML = "Valid name: " + name;

  if (name.length < 5) {
    output.innerHTML = "This name is too short (at least 5 chars)";
  }
}
