const footballer = {
   fullName: 'Cristiano Ronaldo',
   attack: () => {
      console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
   },

   scoreGoal(sound) {
      console.log(`${this.fullName} забивает гол! Вот это даа!`);
      this.celebrate (sound);
   },
   celebrate(sound) {
      console.log(sound);
   },
   goToSubstitution: function(newPlayer) {
      console.log(`${this.fullName} уходит на замену! На поле ${newPlayer}`);
   }
};

const attack = () => {footballer.attack}.bind(footballer);
// const score = footballer.scoreGoal;
// const substitution = footballer.goToSubstitution;
attack();
// score('СИИИИИИ');
// substitution('Paulo Dibala');