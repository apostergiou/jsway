const r = Number(prompt("Enter the circle radius:"));

const circle = {
    circumference() {
        return Math.PI * (r + r);
    },
    area() {
        return Math.PI * (r * r);
    }
};

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);
