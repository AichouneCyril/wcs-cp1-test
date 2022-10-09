import thirdAngle from './thirdAngle';

test('90, 30 should return 60', () => {
  expect(thirdAngle(90, 30)).toBe(60);
});

test('20, 80 should return 80', () => {
  expect(thirdAngle(20, 80)).toBe(80);
});

console.log(thirdAngle);

