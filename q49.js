function fibonacciSequence(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  let sequence = [0, 1];
  for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
const n = 5; 
console.log(`Fibonacci sequence up to ${n} numbers:`, fibonacciSequence(n));
