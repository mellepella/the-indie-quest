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

// If value is equal to the expected value, the "consequence" function
// will run. If not, the "otherwise" function will run.

function equalsOr({ value, expected, consequence, otherwise }) {
  if (value === expected) {
    consequence();
  } else {
    otherwise();
  }
}

// Checks if some sort of contact information has been given.
// If not, the telephone number is required.
// This function is set to onchange on the phone and email contact input.

function checkContact() {
  const inputs = [
    document.getElementById("phone-contact"),
    document.getElementById("email-contact"),
  ];

  const inputsFilledIn = inputs.filter(({ value }) => value != "").length;
  const consequence = () => (inputs[0].required = true);
  const otherwise = () => inputs.forEach((input) => (input.required = false));

  equalsOr({
    value: inputsFilledIn,
    expected: 0,
    consequence,
    otherwise,
  });
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
