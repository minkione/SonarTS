function foo(x: number) {
  if (<number>4 > <number>4) { // S1764
    console.log("");
  }
}
