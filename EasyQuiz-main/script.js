var a, b = 0, score = 0;
function checkAnswer(answer, result) {
    const result0 = document.getElementById(result);
    const summary = document.getElementById('result3');

    if (answer === 'a') {
        result0.textContent = "ถูกต้อง PIM ย่อมาจาก PIM";
        result0.style.color = 'green';
        a = 1

    } else if (answer === 'b') {
        result0.textContent = "Incorrect! Try again.";
        result0.style.color = 'red';
        a=0

    } else if (answer === 'c') {
        result0.textContent = "Incorrect! Try again.";
        result0.style.color = 'red';
        a=0

    } else if (answer === 'd') {
        result0.textContent = "Incorrect! Try again.";
        result0.style.color = 'red';
        a=0

    } else if (answer === 'f') {
        result0.textContent = "Incorrect! Try again.";
        result0.style.color = 'red';
        b=0

    } else if (answer === 'g') {
        result0.textContent = "ถูกต้อง BK ย่อมาจาก Bualuangwittayakhom";
        result0.style.color = 'green';
        b=1
    }
    else if (answer === 'h') {
        result0.textContent = "Incorrect! Try again.";
        result0.style.color = 'red';
        b=0
    }
    else if (answer === 'e') {
        result0.textContent = "Incorrect! Try again.";
        result0.style.color = 'red';
        b=0
    }
    summary.textContent = "ถูกต้อง " + (a+b) + " ข้อ"
}
