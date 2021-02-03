
exports.min = function min (array) {
  if (array === undefined || array.length == 0) return 0
  return array.reduce((acc,item)=>acc>item?item:acc, +Infinity);
}

exports.max = function max (array) {
    if (array === undefined || array.length == 0) return 0
    return array.reduce((acc,item)=>acc>item?acc:item, -Infinity);
}

exports.avg = function avg (array) {
    if (array === undefined || array.length == 0) return 0
    return (array.reduce((acc,item)=>acc+item, 0) / array.length).toFixed(2);
}
