// ----- elements ----- //
let button, tree, canvas, canvas_wrapper, sidebar;
let margin = 20;
// ----- vars ----- //
let l_system, turtle;
let rules = [
   { in: "F", out: "FF+[+F-F-F]-[-F+F+F]" },
]

// ----- setup ----- //
function setup() {
   // setup css
   document.body.style.margin = `${margin}px`;
   canvas_wrapper = document.querySelector('.canvas-wrapper');

   let w = (windowWidth - margin * 2) / 2;
   let h = windowHeight - 2 * margin;
   canvas = createCanvas(w, h);

   sidebar = document.querySelector('.sidebar');
   sidebar.style.width = `${w}px`;
   sidebar.style.height = `${h}px`;

   canvas.parent(canvas_wrapper);
   background(60);

   // setup L-system
   let length = width * 0.7;
   let angle = radians(25); 
   l_system = new L_System("F", rules);
   turtle = new Turtle(length, angle);

   // setup p
   tree = document.querySelector('.tree');
   expandTree(tree, l_system.sentance, turtle);

   // setup button
   button = document.querySelector('button');
   button.addEventListener('click', e => expandTree(tree, l_system.generate(), turtle));
}

// ----- draw ----- //
function draw() { }

// expand tree
function expandTree(parent, text, _turtle) {
   let p = document.createElement("p");
   _turtle.interpret(text);
   p.textContent = text;
   parent.append(p);
}