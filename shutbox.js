var tiles = document.getElementById('tiles');
var roll_button = document.getElementById('roll');
var sum_label = document.getElementById('checked_sum');
var dice1_label = document.getElementById('dice1');
var dice2_label = document.getElementById('dice2');
var dice1;
var dice2;
var dice_sum;

roll_both_dice();

function tile_sum() {
    var checked_sum = 0;
    var tile_input = tiles.getElementsByTagName('input');
    for (var i = 0, length = tile_input.length; i < length; i++) {
        if (tile_input[i].type == 'checkbox') {
           if (tile_input[i].checked && tile_input[i].disabled === false) {
                checked_sum += parseInt(tile_input[i].value);
           }
        }

    }
    return checked_sum;
}

function display_sum_total() {
    var checked_sum = tile_sum();
    sum_label.textContent = checked_sum;
}

function roll_die() {
    return(Math.floor(Math.random() * 6 + 1));
}

function roll_both_dice() {
    dice1 = roll_die();
    dice2 = roll_die();
    dice_sum = dice1 + dice2;
    dice1_label.textContent = dice1;
    dice2_label.textContent = dice2;
}

tiles.onclick = function() {
    display_sum_total();
};


roll_button.onclick = function() {

    var checked_sum = tile_sum();
    if (dice_sum == checked_sum) {

        var tile_input = tiles.getElementsByTagName('input');
        for (var i = 0, length = tile_input.length; i < length; i++) {
            if (tile_input[i].type == 'checkbox') {
            if (tile_input[i].checked) {
                    tile_input[i].disabled = true;
            }
            }

        }
        display_sum_total();
        roll_both_dice();
    }
};
