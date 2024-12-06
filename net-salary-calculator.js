function calculateNetSalary(basicSalary, benefits) {
    const grossSalary = basicSalary + benefits;

    // Taxation rules (simplified for demo)
    const paye = grossSalary * 0.3; // Example 30% tax
    const nhif = Math.min(grossSalary * 0.015, 1700); // Example NHIF calculation
    const nssf = Math.min(grossSalary * 0.06, 1080); // Example NSSF calculation

    const netSalary = grossSalary - paye - nhif - nssf;
    return {
        grossSalary,
        paye,
        nhif,
        nssf,
        netSalary,
    };
}

// Example Usage
const basicSalary = parseFloat(prompt("Enter basic salary:"));
const benefits = parseFloat(prompt("Enter benefits:"));
console.log(calculateNetSalary(basicSalary, benefits));
