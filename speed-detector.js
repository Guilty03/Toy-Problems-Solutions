const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Enter car speed: ", (speedInput) => {
    const speed = parseInt(speedInput);

    function checkSpeed(speed) {
        const speedLimit = 70;
        const demeritPointsPer5Km = 5;

        if (speed < speedLimit) {
            return "Ok";
        } else {
            const demeritPoints = Math.floor((speed - speedLimit) / demeritPointsPer5Km);
            if (demeritPoints > 12) {
                return "License suspended";
            }
            return `Points: ${demeritPoints}`;
        }
    }

    console.log(checkSpeed(speed));
    rl.close();
});
