// business logic

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
    $("#current-roll01".text(this.roll1);
    $("#total-score01").text((this.total1 + this.roll) + " You Win!")
  }
  this.score1 = 0;
  this.roll1 = 0;
  newPlayerTwo.turn = "yes";
  this.turn = "no";
};




// User interface
