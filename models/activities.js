var list = ['football', 'basketball', 'hockey'];

var listSizeMultiplied = function(multiplier) {
    return list.size * multiplier;
}

module.exports = {
    list: list,
    count: listSizeMultiplied
}
