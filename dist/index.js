"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plateau_1 = require("./plateau");
const rover_1 = require("./rover");
// Example usage
const plateau = (0, plateau_1.createPlateau)(10, 10);
const rover = (0, rover_1.createRover)(0, 0, 'N');
const instructions = 'LMLMLMLMM';
for (const instruction of instructions) {
    const updatedRover = (0, rover_1.executeInstruction)(rover, instruction);
    rover.x = updatedRover.x;
    rover.y = updatedRover.y;
    rover.direction = updatedRover.direction;
}
console.log(`Final Rover Position: (${rover.x}, ${rover.y}), Direction: ${rover.direction}`);
