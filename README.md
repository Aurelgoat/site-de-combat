<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Combat Simulator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        .character {
            margin: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            display: inline-block;
            width: 200px;
        }
        .log {
            margin-top: 20px;
            max-width: 500px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
        }
    </style>
</head>
<body>
    <h1>Simple Combat Simulator</h1>

    <div id="characters">
        <div class="character" id="player1">
            <h2>Player 1</h2>
            <p>Health: <span id="health1">50</span></p>
        </div>
        <div class="character" id="player2">
            <h2>Player 2</h2>
            <p>Health: <span id="health2">50</span></p>
        </div>
    </div>

    <button id="attackButton">Attack</button>
    <button id="modeButton">Dark Mode</button>

    <div class="log" id="log"></div>

    <script>
        let health1 = 50;
        let health2 = 50;
        let darkMode = false;

        document.getElementById('attackButton').addEventListener('click', () => {
            const damage1 = Math.floor(Math.random() * 10) + 1;
            const damage2 = Math.floor(Math.random() * 10) + 1;

            health1 -= damage2;
            health2 -= damage1;

            if (health1 < 0) health1 = 0;
            if (health2 < 0) health2 = 0;

            document.getElementById('health1').textContent = health1;
            document.getElementById('health2').textContent = health2;

            const log = document.getElementById('log');
            log.innerHTML += `<p>Player 1 dealt ${damage1} damage. Player 2 dealt ${damage2} damage.</p>`;

            if (health1 === 0 || health2 === 0) {
                const winner = health1 === 0 ? 'Player 2' : 'Player 1';
                log.innerHTML += `<p><strong>${winner} wins!</strong></p>`;
                document.getElementById('attackButton').disabled = true;
            }
        });

        document.getElementById('modeButton').addEventListener('click', () => {
            darkMode = !darkMode;
            if (darkMode) {
                document.body.style.backgroundColor = 'black';
                document.body.style.color = 'white';
                document.getElementById('modeButton').textContent = 'Light Mode';
            } else {
                document.body.style.backgroundColor = 'white';
                document.body.style.color = 'black';
                document.getElementById('modeButton').textContent = 'Dark Mode';
            }
        });
    </script>
</body>
</html>
