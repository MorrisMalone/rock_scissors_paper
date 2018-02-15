
        var userPoint = 0;
        var computerPoint = 0;

        const container = document.querySelector('#game');
        const score = document.querySelector('#score');
        var playing = true;

        // script for the proper site
        const buttons = document.querySelectorAll('button');
        buttons.forEach((button) => {
            button.addEventListener('click', (e) => {
                if (!playing) return;  
                playerSelection = button.id;
                game();
            })
        })


        // the human player makes his choice and it is converted to the form
        // "first letter Uppercase and the rest Lowercase"

        function askChoice() {
            userChoice = prompt('Choose your weapon: Rock, Paper or Scissors?', '');
        }

        function userSelection() {
            return userChoice.charAt(0).toUpperCase() + userChoice.slice(1).toLowerCase();
        }

        // to get the random computer choice

        function computerPlay(randomplay) {
            var randomPlay = Math.floor(Math.random() * Math.floor(3));
            if (randomPlay == 0) {
                return 'Rock';
            }
            else if (randomPlay == 1) {
                return 'Paper';
            }
            else {
                return 'Scissors';
            }
        }

        // The function that plays the round

        function playRound(computerSelection, playerSelection) {
            var result = '';
            if (((computerSelection == 'Rock') && (playerSelection == 'Scissors')) || ((computerSelection == 'Paper') && (playerSelection == 'Rock')) || ((computerSelection == 'Scissors') && (playerSelection == 'Paper'))) {
                result = 'Computer wins ! ' + computerSelection + ' beats ' + playerSelection;
                return result;
            }
            else if (computerSelection == playerSelection) {
                result = 'It is a tie ! You both chose ' + playerSelection;
                return result;
            }
            else {
                result = 'You won ! ' + playerSelection + ' beats ' + computerSelection;
                return result;
            }
        }

        // to play a 5 rounds game
        var userPoint = 0;
        var computerPoint = 0;
        function game() {
            // variables to store the points after each round



            computerSelection = computerPlay();
            round = playRound(computerSelection, playerSelection);


            // case where the computer wins
            if (round.charAt(0) == 'C') {
                const game = document.createElement('p');
                game.textContent = round;
                container.replaceChild(game, container.firstChild);
                computerPoint++;
                const computerScore = document.querySelector('#computerScore');
                computerScore.textContent = computerPoint;

                // case where it is a tie
            } else if (round.charAt(0) == 'I') {
                const game = document.createElement('p');
                game.textContent = round;
                container.replaceChild(game, container.firstChild);
                // case where the user wins
            } else {
                const game = document.createElement('p');
                game.textContent = round;
                container.replaceChild(game, container.firstChild);
                userPoint++;
                const playerScore = document.querySelector('#playerScore');
                playerScore.textContent = userPoint;
            }
            if (computerPoint === 5) {
                // const winner = document.querySelector('#winner');
                // winner.textContent = 'Sorry but you lost. Have another go !';
            
                const winner = document.createElement('p');
                winner.classList.add('winner');
                winner.textContent = 'Sorry but you lost. Refresh the page and have another go !';
                container.appendChild(winner);
                return playing = false;
                
            } else if (userPoint === 5) {
                // const winner = document.querySelector('#winner');
                // winner.textContent = 'Bravo ! You Won !';

                const winner = document.createElement('p');
                winner.classList.add('winner');
                winner.textContent = 'Bravo ! You won ! Refresh the page for a new round';

                container.appendChild(winner);
                
                return playing = false;
            }


        }

