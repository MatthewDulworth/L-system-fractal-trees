class Turtle {
   constructor(length, angle) { 
      this.length = length;
      this.angle = angle;
   }

   interpret(instructions) {
      background(60);
      resetMatrix();
      translate(width / 2.5, height);
      stroke(255, 100);

      this.length *= 0.5;

      for (const char of instructions) {
         switch (char) {
            case "F":
               line(0, 0, 0, -this.length);
               translate(0, -this.length);
               break;

            case "+":
               rotate(this.angle);
               break;

            case "-":
               rotate(-this.angle);
               break;

            case "[":
               push();
               break;

            case "]":
               pop();
               break;

            default:
               console.error('invalid charecter');
               break;
         }
      }
   }
}