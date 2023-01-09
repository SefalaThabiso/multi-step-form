const multiStepForm = document.querySelector("[data-multi-step]");
const formSteps = [...multiStepForm.querySelectorAll("[data-step]")];

const stepIndicator = [...document.querySelectorAll("[data-step-indicate]")];
console.log(stepIndicator);

let currentStep = formSteps.findIndex((step) => {
  return step.classList.contains("active");
});

if (currentStep < 0) {
  currentStep = 0;
  formSteps[currentStep].classList.add("active");
  stepIndicator[currentStep].classList.add("highlight");
}

multiStepForm.addEventListener("click", (e) => {
  if (e.target.matches("[data-next]")) {
    currentStep += 1;
  } else if (e.target.matches("[data-previous]")) {
    currentStep -= 1;
  } else {
    return;
  }

  showCurrentindicator();
  showCurrentStep();
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active", index === currentStep);
  });
}

function showCurrentindicator() {
  stepIndicator.forEach((step, index) => {
    step.classList.toggle("highlight", index === currentStep);
  });
}
