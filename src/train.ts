//  MIT TACK   S

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = nums.reduce((a, b) => a + b, 0);
  return expectedSum - actualSum;
}

// Test
console.log(missingNumber([3, 0, 1])); // 2

// Tack Q

// function hasProperty(obj: object, key: string): boolean {
//   return Object.prototype.hasOwnProperty.call(obj, key);
// }

// console.log(hasProperty({ name: "BMW", model: "M3" }, "model")); // true
// console.log(hasProperty({ name: "BMW", model: "M3" }, "year")); // false
