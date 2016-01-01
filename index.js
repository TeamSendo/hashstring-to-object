var trimQuotes = function(str) {
    return str.replace(/^"|^'/, '').replace(/'$|"$/, '');
};

module.exports = function(hashstring) {
    // Normalize field separators
    hashstring = hashstring.replace(/,\W+/g, ',');
    // Separate into fields
    var fields = hashstring.split(',').map(function(field) {
        var kv = field.split('=>');
        var key = kv[0];
        var value = kv[1];
        var obj = {};
        obj[trimQuotes(key)] = trimQuotes(value);
        return obj;
    });

    return fields.reduce(function(result, nextField) {
        return Object.assign(result, nextField);
    }, {});
};
