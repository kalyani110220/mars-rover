import { createPlateau } from '../plateau';

test('Create Plateau', () => {
  const width = 5;
  const height = 7;
  const plateau = createPlateau(width, height);

  expect(plateau.width).toBe(width);
  expect(plateau.height).toBe(height);
});
