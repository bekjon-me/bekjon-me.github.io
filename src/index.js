let i = 0;
const txt = 'Welcome to our online bootcamp'; /* The text */
const speed = 100; /* The speed/duration of the effect in milliseconds */

let ghpages = require('gh-pages');

ghpages.publish(
  '.',
  {
    repo: 'git@github.com:bekjon-me/capstone-project.git',
  },
  callback
);

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('typingTitle').innerHTML += txt.charAt(i);
    i += 1;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();
