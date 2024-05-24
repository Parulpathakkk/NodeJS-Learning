function add (a, b){
    return console.log(a+b);;

}
function sub (a, b){
    return console.log(a-b);;

}

// module.exports = "Parul"


module.exports = {   // multiple exports
    addFn:add,  // can rename also
    sub
}


// OTHER WAY

exports.add2=(a,b)=> a+b;
exports.sub2=(a,b)=> a-b;

