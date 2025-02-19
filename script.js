document.getElementById('ageCalculatorForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Get the user's date of birth
    const dobInput = document.getElementById('dobInput').value;

    if (!dobInput) {
        alert('Please enter your date of birth.');
        return;
    }

    // Convert the input date to a Date object
    const dob = new Date(dobInput);
    const today = new Date();

    // Calculate the difference in years and months
    let years = today.getFullYear() - dob.getFullYear();
    let months = today.getMonth() - dob.getMonth();

    // Adjust the years and months if the current month/day is before the birth month/day
    if (months < 0 || (months === 0 && today.getDate() < dob.getDate())) {
        years--;
        months += 12;
    }

    // Display the result
    const ageResult = document.getElementById('ageResult');
    ageResult.innerHTML = `Your Age: <strong>${years} years and ${months} months</strong>`;
});
