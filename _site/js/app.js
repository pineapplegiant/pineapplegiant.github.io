// THIS IS WHERE IT BEGINS

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Hi! My name is Guillermo.')
    .pauseFor(1800)
    .deleteAll()
    .typeString('I\'m a Chemical Engineer.')
    .pauseFor(350)
    .deleteChars(18)
    .typeString('uhh...')
    .pauseFor(200)
    .deleteChars(6)
    .typeString('Web Developer.')
    .pauseFor(700)
    .deleteChars(14)
    .typeString('nerd!')
    .pauseFor(300)
    .deleteChars(11)
    .typeString('I like code!')
    .pauseFor(700)
    .deleteAll()
    .typeString('Thanks for coming to my site :)')
    .pauseFor(3700)
    .start();