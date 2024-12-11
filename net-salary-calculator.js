const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter basic salary: ", (basicSalaryInput) => {
    rl.question("Enter benefits: ", (benefitsInput) => {
        const basicSalary = parseFloat(basicSalaryInput);
        const benefits = parseFloat(benefitsInput);

        function calculateNetSalary(basicSalary, benefits) {
            const grossSalary = basicSalary + benefits;

            const paye = grossSalary * 0.3;
            const nhif = Math.min(grossSalary * 0.015, 1700);
            const nssf = Math.min(grossSalary * 0.06, 1080);

            const netSalary = grossSalary - paye - nhif - nssf;
            return {
                grossSalary,
                paye,
                nhif,
                nssf,
                netSalary,
            };
        }

        const result = calculateNetSalary(basicSalary, benefits);
        console.log("Results:", result);
        rl.close();
    });
});
