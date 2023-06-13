export interface Rover {
    x: number;
    y: number;
    direction: 'N' | 'E' | 'S' | 'W';
  }
  
  export function createRover(x: number, y: number, direction: 'N' | 'E' | 'S' | 'W'): Rover {
    return {
      x,
      y,
      direction,
    };
  }
  
  export function executeInstruction(rover: Rover, instruction: 'L' | 'R' | 'M'): Rover {
    let newDirection: 'N' | 'E' | 'S' | 'W' = rover.direction;
    let newX: number = rover.x;
    let newY: number = rover.y;
  
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
    } else if (instruction === 'R') {
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
    } else if (instruction === 'M') {
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