class Cylinder {
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

// Example Usage
const cylinder = new Cylinder(3, 5);
console.log(`Volume of cylinder: ${cylinder.getVolume()}`);
