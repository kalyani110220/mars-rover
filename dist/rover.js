"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeInstruction = exports.createRover = void 0;
function createRover(x, y, direction) {
    return {
        x,
        y,
        direction,
    };
}
exports.createRover = createRover;
function executeInstruction(rover, instruction) {
    let newDirection = rover.direction;
    let newX = rover.x;
    let newY = rover.y;
    // Implement the logic for executing instructions on the rover
    if (instruction === 'L') {
        // Handle left turn
        switch (rover.direction) {
            case 'N':
                newDirection = 'W';
                break;
            case 'E':
                newDirection = 'N';
                break;
            case 'S':
                newDirection = 'E';
                break;
            case 'W':
                newDirection = 'S';
                break;
        }
    }
    else if (instruction === 'R') {
        // Handle right turn
        switch (rover.direction) {
            case 'N':
                newDirection = 'E';
                break;
            case 'E':
                newDirection = 'S';
                break;
            case 'S':
                newDirection = 'W';
                break;
            case 'W':
                newDirection = 'N';
                break;
        }
    }
    else if (instruction === 'M') {
        // Handle move forward
        switch (rover.direction) {
            case 'N':
                newY = rover.y + 1;
                break;
            case 'E':
                newX = rover.x + 1;
                break;
            case 'S':
                newY = rover.y - 1;
                break;
            case 'W':
                newX = rover.x - 1;
                break;
        }
    }
    // Return the updated rover object
    return createRover(newX, newY, newDirection);
}
exports.executeInstruction = executeInstruction;
