// What happens when the citizenship select changes value.
//
// If the select value/citizenship is swedish, the input
// below the select (other-citizenship) gets disabled.
//
// If the select value/citizenship is not swedish, the input
// below the select (other-citizenship) gets enabled and the
// user is allowed to enter another citizenship.

function citizenshipOnChange({ target }) {
  const input = document.getElementById("other-citizenship");
  const { value } = target;

  if (value === "swedish") {
    input.disabled = true;
  } else {
    input.disabled = false;
  }
}

// What happens when the apply form is submitted.
//
// In a real life scenario something else would happen here, and
// currently this function just prevents the page from reloading
// when the form is submitted.

function formSubmit(event) {
  event.preventDefault();
}
