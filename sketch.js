// ----- elements ----- //
let button, tree, canvas;

// ----- vars ----- //
let l_system;
let rules = [
   {in: "F", out: "FF+[+F-F-F]-[-F+F+F]"},
]

// ----- setup ----- //
function setup() {
   // setup canvas
   noCanvas();

   // setup L-system
   l_system = new L_System("F", rules);

   // setup p
   tree = document.querySelector('.tree');
   expandTree(tree, l_system.sentance);

   // setup button
   button = document.querySelector('button');
   button.addEventListener('click', e => expandTree(tree, l_system.generate()));
}

// ----- draw ----- //
function draw() {

}

// expand tree
function expandTree(parent, text) {
   let p = document.createElement("p");
   p.textContent = text;
   parent.append(p);
}