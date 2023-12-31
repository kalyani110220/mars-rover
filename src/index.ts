import { createPlateau } from './plateau';
import { createRover, executeInstruction } from './rover';


// Example usage
const plateau = createPlateau(10, 10);
const rover = createRover(0, 0, 'N');

const instructions = 'LMLMLMLMM';

for (const instruction of instructions) {
   const updatedRover = executeInstruction(rover, instruction as 'L' | 'R' | 'M');
   rover.x = updatedRover.x;
   rover.y = updatedRover.y;
   rover.direction = updatedRover.direction;
}

console.log(`Final Rover Position: (${rover.x}, ${rover.y}), Direction: ${rover.direction}`);

