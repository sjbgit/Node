/**
 * Created by sbunke on 9/10/2014.
 */
var PI = Math.PI;

exports.area = function(r) {
  return PI * r * r;
};

exports.circumferance = function(r) {
  return 2 * PI * r;
};