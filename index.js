/**
 * [exports description]
 * @param  {[String]} orderby ['field1 asc,field2 desc'] asc default
 * @return {[Function]}         [description]
 */
module.exports = function (orderby){
    var fields = orderby.split(',')
    return function(a, b){
        return compare(a, b, fields)
    }

    function compare(a, b, fields){
        var field = fields[0].split(/\s+/)
        var key = field[0],
            desc = field[1] === 'desc' ? -1 : 1
        var valueA = getValue(key, a),
            valueB = getValue(key, b)
        if(valueA > valueB){
            return 1 * desc;
        }else if(valueA < valueB){
            return -1 * desc;
        }else{
            return fields.length === 1 ? 0 : compare(a, b, fields.slice(1))
        }
    }

    function getValue(key, data){
        var keys = key.split('.'),
            temp = data
        for (var i = 0; i < keys.length; i++) {
            temp = temp[keys[i]]
        }
        return temp;
    }
}
