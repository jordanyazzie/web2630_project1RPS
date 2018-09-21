new Vue({
    el: '#app',
    data: {
        isShown: true,
        outcomeShown: true,
        setRounds: 10,
        userWins: 0,
        cpuWins: 0,
        rounds: 0,
        results: ''
    },
    methods: {

        runGame: function(){

            let cc = Math.random();

            if (cc < 0.34) {
                cc = "rock"; //rock
            } else if (cc > 0.34 && cc < 0.67) {
                cc = "paper";//paper
            } else {
                cc = "scissors"; //scissors
            }

            let uc = "rock";

            if ((uc == "rock" && cc == "scissors") ||
                (uc == "paper" && cc == "rock") ||
                (uc == "scissors" && cc == "paper")) {
                this.userWins++;
                this.rounds++;
                this.results = "Round: "+ this.rounds + ". You chose "+uc+" and the computer chose "+cc+" You Won!";
            }
            else if ((uc == "rock" && cc == "paper") ||
                (uc == "paper" && cc == "scissors") ||
                (uc == "scissors" && cc == "rock")) {
                this.rounds++;
                this.cpuWins++;
                this.results = "Round: "+ this.rounds + ". You chose "+uc+" and the computer chose "+cc+" You lost...";
            }
            else {
                this.rounds++;
                this.results = "Round: "+ this.rounds + ". You chose "+uc+" and the computer chose "+cc+" It's a tie.";
            }
            if (this.userWins == 10){
                alert('You have have one the game!');
            }
            else if (this.cpuWins ==10){
                alert('The computer beat you, sorry');
            }
            console.log(cc,uc,this.rounds,this.cpuWins,this.userWins);

        },

        restartGame: function(){
            this.rounds = 0;
            this.cpuWins = 0;
            this.userWins = 0;
            this.results = "You have restarted, make choice to start again"
        }

    }
});