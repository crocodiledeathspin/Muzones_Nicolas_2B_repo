    
    
    var randomLoc = Math.floor(Math.random() * 5);

    var location1 = randomLoc;
    var location2 = location1 + 1;
    var location3 = location2 + 1;

    let guess;
    let hits = 0; 
    let guesses = 0;

    let isSunk = false;

    // Game Logic

    while (!isSunk) {
        guess = prompt("Ready!, Aim!, Fire! (Enter number 0-6)");

        if (guess == null) {
            alert("Thank you for playing!");
            break;
        }

        if (guess < 0 || guess > 6) {
            alert("Please enter a valid cell number!")
        }else {
            guesses += 1;

            if (guess == location1 || guess == location2 || guess == location3) {
                hits += 1;
                alert("Hit!");

                if (hits == 3) {
                    isSunk = true;
                    alert("You sunk my battleship!")
                }
            }else {
                alert("Miss!");
            }
        }
    }

    var accuracy = (guesses > 0 ? (hits / guesses) * 100 : 0).toFixed(2);

    var stats = "You took " + guesses + " guesses to sink the battleship!" + "\n" + "Accuracy: " + accuracy + "%";
    
    alert(stats);