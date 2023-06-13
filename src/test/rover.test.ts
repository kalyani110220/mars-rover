import { createRover, executeInstruction } from '../rover';

test('Create Rover', () => {
  const x = 3;
  const y = 4;
  const direction = 'E';
  const rover = createRover(x, y, direction);

  expect(rover.x).toBe(x);
  expect(rover.y).toBe(y);
  expect(rover.direction).toBe(direction);
});

test('Execute Instruction - Left Turn', () => {
  const rover = createRover(0, 0, 'N');

  const newRover = executeInstruction(rover, 'L');
  expect(newRover.direction).toBe('W');
});

test('Execute Instruction - Right Turn', () => {
  const rover = createRover(0, 0, 'N');

  const newRover = executeInstruction(rover, 'R');
  expect(newRover.direction).toBe('E');
});

test('Execute Instruction - Move Forward', () => {
  const rover = createRover(0, 0, 'N');

  const newRover = executeInstruction(rover, 'M');
  expect(newRover.y).toBe(1);
});
