new Vue({
    el: '#app',
    data: {
        isShown: true,
        setRounds: 10,
        userWins: 0,
        cpuWins: 0,
        rounds: 0,
        results: '',
        resultColor: '',
        userWidth: '0%',
        cpuWidth: '0%'
    },
    methods: {
//If the User picks Rock. Each choice will update rounds, wins, loses, and print results
        userRock: function(){

            let cc = Math.random(); //random choice selected for computer

            if (cc < 0.34) { //rock TIE
                this.rounds++;
                this.resultColor = 'hsl(240, 100%, 70%)';
                this.results = "Round: "+ this.rounds + ". You chose ROCK and the computer chose ROCK It's a tie.";
            } else if (cc > 0.34 && cc < 0.67) { //paper LOSE
                this.rounds++;
                this.cpuWins++;
                this.resultColor = 'hsl(0, 100%, 70%)';
                this.cpuWidth = (this.cpuWins * 10) + "%";
                this.results = "Round: "+ this.rounds + ". You chose ROCK and the computer chose PAPER. You lost...";
            } else { //scissors WIN
                this.userWins++;
                this.rounds++;
                this.resultColor = 'hsl(120, 100%, 70%)';
                this.userWidth = (this.userWins * 10) + "%";
                this.results = "Round: "+ this.rounds + ". You chose ROCK and the computer chose SCISSORS. You Won!";
            }
    //When 10 wins are present confirm box to play again appears. Resets data if OK selected
            if (this.userWins == 10){ //if the user wins
                if(confirm('You have won! Click OK to play again.')){
                    this.rounds = 0;
                    this.cpuWins = 0;
                    this.userWins = 0;
                    this.resultColor = 'yellow';
                    this.results = "You have restarted, make choice to start again";
                    this.cpuWidth = '0%';
                    this.userWidth = '0%';
                } else{
                    this.resultColor = 'black';
                }
            }
            else if (this.cpuWins ==10){ //if the computer wins
                if(confirm('You have won! Click OK to play again.')){
                    this.rounds = 0;
                    this.cpuWins = 0;
                    this.userWins = 0;
                    this.resultColor = 'yellow';
                    this.results = "You have restarted, make choice to start again";
                    this.cpuWidth = '0%';
                    this.userWidth = '0%';
                } else{
                    this.resultColor = 'black';
                }
            }
        },
//If the User picks Paper. Each choice will update rounds, wins, loses, and print results
        userPaper: function(){

            let cc = Math.random(); //random choice selected for computer

            if (cc < 0.34) { //rock WIN
                this.userWins++;
                this.rounds++;
                this.resultColor = 'hsl(120, 100%, 70%)';
                this.userWidth = (this.userWins * 10) + "%";
                this.results = "Round: "+ this.rounds + ". You chose PAPER and the computer chose ROCK. You Won!";
            } else if (cc > 0.34 && cc < 0.67) { //paper TIE
                this.rounds++;
                this.resultColor = 'hsl(240, 100%, 70%)'
                this.results = "Round: "+ this.rounds + ". You chose PAPER and the computer chose PAPER. It's a tie.";
            } else { //scissors LOSE
                this.rounds++;
                this.cpuWins++;
                this.resultColor = 'hsl(0, 100%, 70%)';
                this.cpuWidth = (this.cpuWins * 10) + "%";
                this.results = "Round: "+ this.rounds + ". You chose PAPER and the computer chose SCISSORS. You lost...";
            }
    //When 10 wins are present confirm box to play again appears. Resets data if OK selected
            if (this.userWins == 10){ //if the user wins
                if(confirm('You have won! Click OK to play again.')){
                    this.rounds = 0;
                    this.cpuWins = 0;
                    this.userWins = 0;
                    this.resultColor = 'yellow';
                    this.results = "You have restarted, make choice to start again";
                    this.cpuWidth = '0%';
                    this.userWidth = '0%';
                } else{
                    this.resultColor = 'black';
                }
            }
            else if (this.cpuWins ==10){ //if the computer wins
                if(confirm('You have won! Click OK to play again.')){
                    this.rounds = 0;
                    this.cpuWins = 0;
                    this.userWins = 0;
                    this.resultColor = 'yellow';
                    this.results = "You have restarted, make choice to start again";
                    this.cpuWidth = '0%';
                    this.userWidth = '0%';
                } else{
                    this.resultColor = 'black';
                }
            }
        },
//If the User picks Scissors. Each choice will update rounds, wins, loses, and print results
        userScissors: function(){

            let cc = Math.random(); //random choice selected for computer

            if (cc < 0.34) { //rock LOSE
                this.rounds++;
                this.cpuWins++;
                this.resultColor = 'hsl(0, 100%, 70%)';
                this.cpuWidth = (this.cpuWins * 10) + "%";
                this.results = "Round: "+ this.rounds + ". You chose SCISSORS and the computer chose ROCK, You lost...";
            } else if (cc > 0.34 && cc < 0.67) { //paper WIN
                this.rounds++;
                this.userWins++;
                this.resultColor = 'hsl(120, 100%, 70%)';
                this.userWidth = (this.userWins * 10) + "%";
                this.results = "Round: "+ this.rounds + ". You chose SCISSORS and the computer chose PAPER. You Won!";
            } else { //scissors TIE
                this.rounds++;
                this.resultColor = 'hsl(240, 100%, 70%)';
                this.results = "Round: "+ this.rounds + ". You chose SCISSORS and the computer chose SCISSORS. It's a tie.";
            }
    //When 10 wins are present confirm box to play again appears. Resets data if OK selected
            if (this.userWins == 10){ //if the user wins
                if(confirm('You have won! Click OK to play again.')){
                    this.rounds = 0;
                    this.cpuWins = 0;
                    this.userWins = 0;
                    this.resultColor = 'yellow';
                    this.results = "You have restarted, make choice to start again";
                    this.cpuWidth = '0%';
                    this.userWidth = '0%';
                } else{
                    this.resultColor = 'black';
                }
            }
            else if (this.cpuWins ==10){ //if the computer wins
                if(confirm('You have won! Click OK to play again.')){
                    this.rounds = 0;
                    this.cpuWins = 0;
                    this.userWins = 0;
                    this.resultColor = 'yellow';
                    this.results = "You have restarted, make choice to start again";
                    this.cpuWidth = '0%';
                    this.userWidth = '0%';
                } else{
                    this.resultColor = 'black';
                }
            }
        },
//Game and data is restarted when user clicks restart button
        restartGame: function(){
            this.rounds = 0;
            this.cpuWins = 0;
            this.userWins = 0;
            this.resultColor = 'yellow';
            this.results = "You have restarted, make choice to start again";
            this.cpuWidth = '0%';
            this.userWidth = '0%';
        }
    }
});