class L_System {
   constructor(axiom, rules) {
      this.axiom = axiom;
      this.sentance = axiom;
      this.rules = rules;
   }

   generate(){
      let nextSentance = "";

      // loop through each charecter in the current sentance
      for(let char of this.sentance){
         
         // check if it matches any rules
         let match = false;
         for(let rule of rules) {
            if(char === rule.in){
               nextSentance += rule.out;
               match = true;
               break;
            }
         };

         // if doesnt match any rules
         if(!match) {
            nextSentance += char;
         }
      }
      this.sentance = nextSentance;
      return this.sentance;
   }
}