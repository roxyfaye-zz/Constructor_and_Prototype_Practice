//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (attributes) {
  this.name = attributes.name;
  this.color = attributes.color;
  this.hungry = attributes.hungry;
  this.status = attributes.status;
};

// Instances of Dog
// Needed: sadie, moonshine, atticus
let sadie = new Dog({
    name: 'sadie',
    color: 'black',
    hungry: false,
    status: 'normal'
});
let moonshine = new Dog({
    name: 'moonshine',
    color: 'black',
    hungry: true,
    status: 'normal'
});
let atticus = new Dog({

});
//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (attributes) {
   this.name = attributes.name;
   this.cool = attributes.cool;
   this.pet = function(dog){
     return dog.status = 'happy'
   };
   this.feed = function(dog){
     return dog.hungry = false
   }
};

// Instances of Human
// Needed: mason, julia


let mason = new Human({
  name: 'mason',
  cool: false,
})
let julia = new Human({
  name: 'julia',
  cool: true,
})
