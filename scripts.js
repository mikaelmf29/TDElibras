const form = document.querySelector("#quiz-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const q1 = form.q1.value;
  const q2 = form.q2.value;
  const q3 = form.q3.value;
  const q4 = form.q4.value;
  const q5 = form.q5.value;

  let score = 0;

  if (q1 === "c") {
    score++;
  }

  if (q2 === "a") {
    score++;
  }
  if (q3 === "c") {
    score++;
  }

  if (q4 === "b") {
    score++;
  }
  if (q5 === "c") {
    score++;
  }

  alert(`Sua pontuação é ${score} de 5.`);
});
