// business logic
// See rogueminx/pig-dice for an example

function playerOne (){
  this.roll1 = 0;
  this.score1 = 0;
  this.total1 = 0;
  this.turn = "yes";
}

playerOne.prototype.Random = function() {
  if (this.turn === "no"){
    alert("it's not your turn!");
  } else {
    min = 1;
    max = 6;
    this.roll1 = Math.floor(Math.random() * (max - min + 1)) + min;
    if (this.roll1 === 1) {
      this.score1 = 0;
      newPlayerTwo.turn = "yes";
      this.turn = "no";
      $("#current-roll01").text(this.roll1);
      $("#current-score01").text(this.score1)
    } else {
      $("#current-roll01").text(this.roll1);
      this.score1 += this.roll1;
      if ((this.score1 + this.total1) < 100) {
        $("#current-roll01").text(this.roll1);
        $("#current-score01").text(this.score1)
      } else {
        $("#current-roll01").text(this.roll1);
        $("#total-score01").text(this.total1 + this.score1 + " You Win!");
      };
    };
  };
};

playerOne.prototype.Tally = function() {
  if ((this.score1 + this.total1) < 100) {
    this.total1 += this.score1;
    $("#current-score01").text(this.score1);
    $("#total-score01").text(this.total1);
  } else {
    $("#current-roll01").text(this.roll1);
    $("#total-score01").text((this.total1 + this.roll) + " You Win!")
  }
  this.score1 = 0;
  this.roll1 = 0;
  newPlayerTwo.turn = "yes";
  this.turn = "no";
};

function playerTwo () {
  this.roll2 = 0;
  this.score2 = 0;
  this.total2 = 0;
  this.turn = "no";
}

playerTwo.prototype.Random = function() {
  if (this.turn === "no"){
    console.log("It's not your turn!");
  } else {
    min = 1;
    max = 6;
    this.roll2 = Math.floor(Math.random() * (max - min + 1)) + min;
    if (this.roll2 === 1) {
      this.score2 = 0;
      newPlayerOne.turn = "yes";
      this.turn = "no";
      $("#current-roll02").text(this.roll2);
      $("#current-score02").text(this.score2)
    } else {
      $("#current-roll02").text(this.roll2);
      this.score2 += this.roll2;
      if ((this.score2 + this.total2) < 100) {
        $("#current-roll02").text(this.roll2);
        $("#current-score02").text(this.score2)
      } else {
        $("#current-roll02").text(this.roll2);
        $("#total-score02").text(this.total2 + this.score2 + " You Win!");
      };
    };
  };
};

playerTwo.prototype.Tally = function() {
  if ((this.score2 + this.total2) < 100) {
    this.total2 += this.score2;
    $("#current-score02").text(this.score2);
    $("#total-score02").text(this.total2)
  } else {
    $("#current-roll02").text(this.roll2);
    $("#total-score02").text((this.total2 + this.roll2) + " You Win!")
  }
  this.score2 = 0;
  this.roll2 = 0;
  newPlayerOne.turn = "yes";
  this.turn = "no";
};



// User interface

$(document).ready(function(){
  newPlayerOne = new playerOne();
  newPlayerTwo = new playerTwo();
  $("#roll01").click(function(event){
    event.preventDefault();
    newPlayerOne.Random();
  });
  $("#hold01").click(function(event){
    event.preventDefault();
    newPlayerOne.Tally();
  });
  $("#roll02").click(function(event){
    event.preventDefault();
    newPlayerTwo.Random();
  });
  $("#hold02").click(function(event){
    event.preventDefault();
    newPlayerTwo.Tally();
  });
});
