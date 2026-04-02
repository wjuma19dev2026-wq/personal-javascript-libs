/**
 * TypeWriter - A simple typing animation library
 * Simulates typing effect on DOM elements
 */

/**
 * Types out text character by character with a delay
 * @param {string} text - The text to type out
 * @param {number} i - Current character index (internal use)
 * @param {function} fnCallback - Callback function to execute when typing completes
 */
function typeWriter(text, i, fnCallback) {
  if (i < text.length) {
    document.querySelector('#demo').innerHTML =
      text.substring(0, i + 1) + '<span aria-hidden="true"></span>'
    setTimeout(function () {
      typeWriter(text, i + 1, fnCallback)
    }, 100)
  } else if (typeof fnCallback == 'function') {
    setTimeout(fnCallback, 700)
  }
}

/**
 * Starts the text animation cycle
 * @param {number} i - Index of the current text in the dataText array (internal use)
 */
function StartTextAnimation(i) {
  var dataText = [
    'Hi',
    'I am a Web Developer',
    'I am a Designer',
    'I create awesome websites',
    'I am a Freelancer',
  ]

  // Reset to first text when we've gone through all texts
  if (typeof dataText[i] == 'undefined') {
    setTimeout(function () {
      StartTextAnimation(0)
    }, 20000)
  }
  // Continue typing current text if we haven't finished it
  else if (i < dataText.length) {
    typeWriter(dataText[i], 0, function () {
      StartTextAnimation(i + 1)
    })
  }
}

// Start the animation
StartTextAnimation(0)
