"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rover_1 = require("../rover");
test('Create Rover', () => {
    const x = 3;
    const y = 4;
    const direction = 'E';
    const rover = (0, rover_1.createRover)(x, y, direction);
    expect(rover.x).toBe(x);
    expect(rover.y).toBe(y);
    expect(rover.direction).toBe(direction);
});
test('Execute Instruction - Left Turn', () => {
    const rover = (0, rover_1.createRover)(0, 0, 'N');
    const newRover = (0, rover_1.executeInstruction)(rover, 'L');
    expect(newRover.direction).toBe('W');
});
test('Execute Instruction - Right Turn', () => {
    const rover = (0, rover_1.createRover)(0, 0, 'N');
    const newRover = (0, rover_1.executeInstruction)(rover, 'R');
    expect(newRover.direction).toBe('E');
});
test('Execute Instruction - Move Forward', () => {
    const rover = (0, rover_1.createRover)(0, 0, 'N');
    const newRover = (0, rover_1.executeInstruction)(rover, 'M');
    expect(newRover.y).toBe(1);
});
