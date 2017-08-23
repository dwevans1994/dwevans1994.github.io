<head>



</head>

    <body>
        <div id=div1>
            <br>
                <button type="text_make" id="make" name="TextBox1">Vehicle Make </button>
                <br>
        </body>
        
                <script type="text/javascript">

                    let move1 = [-1, -2]
let move2 = [1, -2]
let move3 = [-1, 2]
let move4 = [1, 2]
let move5 = [-2, -1]
let move6 = [2, -1]
let move7 = [-2, 1]
let move8 = [2, 1]

let position = [0, 0];

let input = [3, 7];

function numMoves(input) {
                        let count = 0;
    if (input(0) === Math.max(input(0)), input(1)) {
                        let max = input[0];
        do {
            switch (max % 2) {
                case 0:
                    max = max / 2;

                case 1:
                    max--
                    max = max / 2;
            }
            count++
        } while (max != 1);
    } else if (input(0) === input(1)) {
        if (input(0) === 0 || input(0) % 2 === 1) {
                        count = 2;
                    } else {
                        count = 4;
                    }
    } else {
                        let max = input[1];
        let count = 0;
        do {
            switch (max % 2) {
                case 0:
                    max = max / 2;

                case 1:
                    max--
                    max = max / 2;
            }
            count++
        } while (max != 1);
    }
    return count;
}

function move(position, mov) {
                        position += mov;
                    }

function check(position) {
    if (position[0] === x && position[1] === y) {

                    }
                    }
</script>