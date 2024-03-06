function calculateBMI(weight, height) {
  // Convert height to meters
  const heightInMeters = height / 100;

  const bmi = weight / (heightInMeters * heightInMeters);

  // Classify BMI
  let classification;
  if (bmi < 18.5) {
      classification = "Underweight";
  } else if (bmi >= 18.5 && bmi < 24.9) {
      classification = "Normal weight";
  } else if (bmi >= 25 && bmi < 29.9) {
      classification = "Overweight";
  } else {
      classification = "Obesity";
  }

  return {
      bmi: bmi.toFixed(2),
      classification: classification
  };
}

// Example usage
const weight = 71; 
const height = 167; 

const result = calculateBMI(weight, height);
console.log(`BMI: ${result.bmi}`);
console.log(`Classification: ${result.classification}`);
