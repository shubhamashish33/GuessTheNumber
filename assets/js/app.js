var msg1 = document.getElementById("message1");
var msg2 = document.getElementById("message2");
var msg3 = document.getElementById("message3");

var answer = Math.floor(Math.random() * 100) + 1;
var no_of_guesses = 0;
var guessed_nums = [];

function start() {
  document.getElementById("header").style.display = "none";
  document.getElementById("gameview").style.display = "block";
}

function play() {
  var user_guess = document.getElementById("guess").value;
  if (user_guess < 1 || user_guess > 100) {
    alert("Please enter a number between 1 and 100.");
  } else {
    guessed_nums.push(user_guess);
    no_of_guesses += 1;

    if (answer > user_guess) {
      if (answer - user_guess > 20) {
        msg1.textContent = "Your guess is too low.";
        msg2.textContent = "No. of guesses: " + no_of_guesses;
        msg3.textContent = "Guessed numbers are: " + guessed_nums;
      } else if (answer - user_guess < 20) {
        msg1.textContent = "Your guess is low.";
        msg2.textContent = "No. of guesses: " + no_of_guesses;
        msg3.textContent = "Guessed numbers are: " + guessed_nums;
      }
    } else if (user_guess > answer) {
      if (user_guess - answer > 20) {
        msg1.textContent = "Your guess is too high.";
        msg2.textContent = "No. of guesses: " + no_of_guesses;
        msg3.textContent = "Guessed numbers are: " + guessed_nums;
      } else if (user_guess - answer < 20) {
        msg1.textContent = "Your guess is high.";
        msg2.textContent = "No. of guesses: " + no_of_guesses;
        msg3.textContent = "Guessed numbers are: " + guessed_nums;
      }
    }
    // if (user_guess < answer) {
    //   msg1.textContent = "Your guess is too low.";
    //   msg2.textContent = "No. of guesses: " + no_of_guesses;
    //   msg3.textContent = "Guessed numbers are: " + guessed_nums;
    // } else if (user_guess > answer) {
    //   msg1.textContent = "Your guess is too high.";
    //   msg2.textContent = "No. of guesses: " + no_of_guesses;
    //   msg3.textContent = "Guessed numbers are: " + guessed_nums;}
    else if (user_guess == answer) {
      msg1.textContent = "Yippie You Win!!🎉";
      msg2.textContent = "The number was: " + answer;
      msg3.textContent = "You guessed it in " + no_of_guesses + " guesses";
      document.getElementById("my_btn").disabled = true;
      alert("You Winn!!🎉");
    }
  }

  if (no_of_guesses >= 10) {
    alert("You loose!! Better Luck Next Time ☹️");
    window.location.reload();
  }
}
