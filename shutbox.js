var tiles = document.getElementById('tiles');
var roll_button = document.getElementById('roll');
var sum_label = document.getElementById('checked_sum');

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

tiles.onclick = function() {
    display_sum_total();
};


roll_button.onclick = function() {
    var tile_input = tiles.getElementsByTagName('input');
    for (var i = 0, length = tile_input.length; i < length; i++) {
        if (tile_input[i].type == 'checkbox') {
           if (tile_input[i].checked) {
                tile_input[i].disabled = true;
           }
        }

    }
    display_sum_total();
};
