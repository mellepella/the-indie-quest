// What happens when the citizenship select changes value.
//
// If the select value/citizenship is swedish, the input
// below the select (other-citizenship) gets disabled and not required.
//
// If the select value/citizenship is not swedish, the input
// below the select (other-citizenship) gets enabled and required, and the
// user is allowed to enter another citizenship.

function citizenshipOnChange({ target }) {
  const { value } = target;
  const shouldDisable = value === "swedish";
  const input = document.getElementById("other-citizenship");

  input.disabled = shouldDisable;
  input.required = !shouldDisable;
}

// Clears all contact requirements.

function clearAllContactReqs() {
  const inputs = [
    document.getElementById("phone-contact"),
    document.getElementById("email-contact"),
  ];
  inputs.forEach((input) => (input.required = false));
}

// What happens when the contact select is changed.
// Clears all contact requirements, then puts a requirement
// on the one connected to the contact method chosen.

function contactOnChange({ target }) {
  const { value } = target;
  clearAllContactReqs();
  document.getElementById(value).required = true;
}

// What happens when the apply form is submitted.
//
// In a real life scenario something else would happen here, like sending the
// information away to store.
// Currently this function just prevents the page from reloading
// when the form is submitted.

function formSubmit(event) {
  event.preventDefault();
}
