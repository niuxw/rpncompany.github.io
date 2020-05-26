const words = document.querySelectorAll(".word");
var endShape = document.getElementById("hippo");
let count = 0;

const rt = 2.5;
const vertAmount = 40;
const master = gsap.timeline();

// Start position
gsap.set(words, {y: i => i * vertAmount});

// Animation
words.forEach((word, i) => {
  const tl = gsap.timeline({
    defaults: {
      duration: rt,
      ease: "power2.inOut",
      overwrite: "auto" // kill off conflicting tweens
    }
  });
  
  // Move all the words
  tl.to(words, {y: `-=${vertAmount}`});
  
  // Move past word out
  if(i !== 0) {
    tl.to(words[i - 1], {
      fontSize: 20,
      x: 0,
      y: "-=105"
    }, 0);
  }
  
  // The main word
  tl.to(words[i], {
    fontSize: 260,
    x: -17,
    y: "-=110"
  }, 0);
  
  master.add(tl);
});
