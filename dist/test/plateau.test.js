"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plateau_1 = require("../plateau");
test('Create Plateau', () => {
    const width = 5;
    const height = 7;
    const plateau = (0, plateau_1.createPlateau)(width, height);
    expect(plateau.width).toBe(width);
    expect(plateau.height).toBe(height);
});
