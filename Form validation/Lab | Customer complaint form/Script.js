const form = document.querySelector("form");

function validateForm() {
  const fullName = document.querySelector("#full-name");
  const email = document.querySelector("#email");
  const orderNo = document.querySelector("#order-no");
  const productCode = document.querySelector("#product-code");
  const quantity = document.querySelector("#quantity");

  const complaintsGroup = document.querySelector("#complaints-group");
  const complaintDescription = document.querySelector("#complaint-description");
  const otherComplaint = document.querySelector("#other-complaint");

  const solutionsGroup = document.querySelector("#solutions-group");
  const solutionDescription = document.querySelector("#solution-description");
  const otherSolution = document.querySelector("#other-solution");

  // Full name
  const validFullName = fullName.value.trim() !== "";

  // Email
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

  // Order number: exactly 10 digits and starts with 2024
  const validOrderNo = /^2024\d{6}$/.test(orderNo.value.trim());

  // Product code: XX##-X###-XX#
  const validProductCode =
    /^[A-Za-z]{2}\d{2}-[A-Za-z]\d{3}-[A-Za-z]{2}\d$/.test(
      productCode.value.trim()
    );

  // Quantity: positive integer
  const validQuantity = /^[1-9]\d*$/.test(quantity.value.trim());

  // Complaints: at least one checkbox checked
  const complaintCheckboxes = complaintsGroup.querySelectorAll(
    'input[type="checkbox"]'
  );

  const validComplaints = Array.from(complaintCheckboxes).some(
    checkbox => checkbox.checked
  );

  // Complaint description only required when Other is checked
  const validComplaintDescription =
    !otherComplaint.checked ||
    complaintDescription.value.trim().length >= 20;

  // Solutions: at least one radio selected
  const solutionRadios = solutionsGroup.querySelectorAll(
    'input[type="radio"]'
  );

  const validSolutions = Array.from(solutionRadios).some(
    radio => radio.checked
  );

  // Solution description only required when Other is selected
  const validSolutionDescription =
    !otherSolution.checked ||
    solutionDescription.value.trim().length >= 20;

  return {
    "full-name": validFullName,
    "email": validEmail,
    "order-no": validOrderNo,
    "product-code": validProductCode,
    "quantity": validQuantity,
    "complaints-group": validComplaints,
    "complaint-description": validComplaintDescription,
    "solutions-group": validSolutions,
    "solution-description": validSolutionDescription
  };
}

function isValid(validation) {
  return Object.values(validation).every(value => value === true);
}


// Change event validation
form.addEventListener("change", function (event) {
  const validation = validateForm();
  const id = event.target.id;

  if (id === "full-name") {
    event.target.style.borderColor =
      validation["full-name"] ? "green" : "red";
  }

  if (id === "email") {
    event.target.style.borderColor =
      validation["email"] ? "green" : "red";
  }

  if (id === "order-no") {
    event.target.style.borderColor =
      validation["order-no"] ? "green" : "red";
  }

  if (id === "product-code") {
    event.target.style.borderColor =
      validation["product-code"] ? "green" : "red";
  }

  if (id === "quantity") {
    event.target.style.borderColor =
      validation["quantity"] ? "green" : "red";
  }

  // Complaint checkbox group
  if (event.target.closest("#complaints-group")) {
    document.querySelector("#complaints-group").style.borderColor =
      validation["complaints-group"] ? "green" : "red";
  }

  // Complaint description
  if (id === "complaint-description") {
    event.target.style.borderColor =
      validation["complaint-description"] ? "green" : "red";
  }

  // Solution radio group
  if (event.target.closest("#solutions-group")) {
    document.querySelector("#solutions-group").style.borderColor =
      validation["solutions-group"] ? "green" : "red";
  }

  // Solution description
  if (id === "solution-description") {
    event.target.style.borderColor =
      validation["solution-description"] ? "green" : "red";
  }
});


// Submit validation
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const validation = validateForm();

  // Required by the test
  const formIsValid = isValid(validation);

  // Highlight invalid fields
  Object.keys(validation).forEach(key => {
    const valid = validation[key];

    if (key === "complaints-group") {
      document.querySelector("#complaints-group").style.borderColor =
        valid ? "" : "red";
    } else if (key === "solutions-group") {
      document.querySelector("#solutions-group").style.borderColor =
        valid ? "" : "red";
    } else {
      const element = document.querySelector(`#${key}`);

      if (element) {
        element.style.borderColor = valid ? "" : "red";
      }
    }
  });

  if (formIsValid) {
    console.log("Form is valid!");
  }
});
