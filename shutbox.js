const tiles = document.getElementById("tiles");
const roll_button = document.getElementById("roll");
const sum_label = document.getElementById("checked_sum");
const dice1_label = document.getElementById("dice1");
const dice2_label = document.getElementById("dice2");
var dice1;
var dice2;
var dice_sum;

roll_both_dice();

function tile_sum() {
    "use strict";
    let checked_sum = 0;
    const tile_input = tiles.getElementsByTagName("input");
    for (let i = 0; i < tile_input.length; i++) {
        if (tile_input[i].type === "checkbox") {
            if (tile_input[i].checked && tile_input[i].disabled === false) {
                checked_sum += parseInt(tile_input[i].value, 10);
            }
        }

    }
    return checked_sum;
}

function display_sum_total() {
    "use strict";
    const checked_sum = tile_sum();
    sum_label.textContent = checked_sum;
}

function roll_die() {
    "use strict";
    return(Math.floor(Math.random() * 6 + 1));
}

function roll_both_dice() {
    "use strict";
    dice1 = roll_die();
    dice2 = roll_die();
    dice_sum = dice1 + dice2;
    dice1_label.textContent = dice1;
    dice2_label.textContent = dice2;
}

tiles.onclick = function() {
    "use strict";
    display_sum_total();
};

function check_end(sum_tiles) {
    "use strict";
    const orig_sum = sum_tiles;
    var result;

    if (sum_tiles === 0) {
        return true;
    }

    if (sum_tiles > 9) {
        sum_tiles = 9;
    } 

    for (let i = sum_tiles; i >= 1; i--) {
        let tile_input = tiles.getElementsByTagName("input")[i - 1];
        if (tile_input.disabled === false) {
            if ((orig_sum - i) >= i) {
                return false;
            }

            result = check_end(orig_sum - i);
            if (result) {
                return true;
            }
        }
    }

    return false;
}

roll_button.onclick = function() {
    "use strict";
    var checked_sum = tile_sum();
    var i;
    if (dice_sum === checked_sum) {

        var tile_input = tiles.getElementsByTagName("input");
        for (i = 0; i < tile_input.length; i++) {
            if (tile_input[i].type === "checkbox") {
                if (tile_input[i].checked) {
                    tile_input[i].disabled = true;
                }
            }

        }
        display_sum_total();
        roll_both_dice();
        if (check_end(dice_sum) === false) {
            alert("No more valid moves");
        }
    }
};
