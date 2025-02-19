<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Age Calculator</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 20px;
      background-color: #f4f4f9;
      color: #333;
    }
    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    h1 {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin: 10px 0 5px;
      font-weight: bold;
    }
    input[type="date"] {
      width: 100%;
      padding: 10px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    button {
      padding: 10px 20px;
      background-color: #007BFF;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
    .result {
      margin-top: 20px;
      font-size: 1.2em;
      font-weight: bold;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Age Calculator</h1>
    
    <!-- Input for Birth Date -->
    <label for="birthDate">Enter Your Birth Date:</label>
    <input type="date" id="birthDate" required>
    
    <!-- Input for Specific Date (Optional) -->
    <label for="specificDate">Calculate Age on Specific Date (Optional):</label>
    <input type="date" id="specificDate">
    
    <!-- Buttons -->
    <button onclick="calculateAge()">Calculate Age</button>
    
    <!-- Result Display -->
    <div class="result" id="result"></div>
  </div>

  <script>
    function calculateAge() {
      // Get input values
      const birthDate = new Date(document.getElementById('birthDate').value);
      const specificDateInput = document.getElementById('specificDate').value;
      const specificDate = specificDateInput ? new Date(specificDateInput) : new Date(); // Use current date if no specific date is provided

      // Check if birth date is valid
      if (!birthDate || isNaN(birthDate)) {
        alert('Please enter a valid birth date.');
        return;
      }

      // Check if birth date is in the future
      if (birthDate > specificDate) {
        alert('Birth date cannot be in the future.');
        return;
      }

      // Calculate age
      let years = specificDate.getFullYear() - birthDate.getFullYear();
      let months = specificDate.getMonth() - birthDate.getMonth();
      let days = specificDate.getDate() - birthDate.getDate();

      // Adjust for negative months or days
      if (months < 0 || (months === 0 && days < 0)) {
        years--;
        months += 12;
      }
      if (days < 0) {
        const lastMonthDate = new Date(specificDate.getFullYear(), specificDate.getMonth(), 0).getDate();
        days += lastMonthDate;
        months--;
      }

      // Display the result
      const result = `Your age is: ${years} years, ${months} months, and ${days} days.`;
      document.getElementById('result').innerText = result;
    }
  </script>
</body>
</html>
