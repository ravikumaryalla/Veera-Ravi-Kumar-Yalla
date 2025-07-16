

 const calculate=(a,b,operation)=> {
    switch (operation) {
      case 'add': return a + b;
      case 'sub': return a - b;
      case 'mul': return a * b;
      case 'div': return b !== 0 ? a / b : 'Cannot divide by zero';
      default: return 'Invalid operation';
    }
  }


//Demo Usage

console.log(calculate(1,2,'add'));
console.log(calculate(1,2,'sub'));
console.log(calculate(1,2,'mul'));
console.log(calculate(1,2,'div'));
console.log(calculate(1,0,'div'));