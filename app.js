var _ = require("lodash");

// Internal function which is not exposed
var internal = function() {
    return _.random(1, 10);
};

// External function which is exposed
var external = module.exports.external = function() {
    return _.random(11, 20);
};
