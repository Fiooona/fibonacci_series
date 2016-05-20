'use strict';

function fibonacci_series(n) {
    var r=[];
    for(var i=0;i<n+1;i++){
        r[i]=fb(i);
    }
    return r
}
function fb(i){
    if (0 == i ) {
        return 0;
    }
    if ( 1 == i) {
        return 1;
    }
    else {
        return fb(i- 1) + fb(i- 2);
    }
}
module.exports = fibonacci_series;
