function stringModifier(str, position, char) {
  return str.substring(0, position - 1) + char + str.substring(position);
}
console.log("Modified string:", stringModifier("hello", 3, "X")); 
