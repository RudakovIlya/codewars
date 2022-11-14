/*
 task: Largest Elements

Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1]) => [6,7]

 */

function largest(n, xs) {
  if (n == 0) return [];
  return xs.sort((a, b) => b - a).slice(0, n);
}
console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
