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

// Example Usage
const speed = parseInt(prompt("Enter car speed:"));
console.log(checkSpeed(speed));
