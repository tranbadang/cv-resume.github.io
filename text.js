function findDate(s) {    
    var parms = str.split(/[\.\-\/]/);
    var yyyy = parseInt(parms[2],10);
    var mm   = parseInt(parms[1],10);
    var dd   = parseInt(parms[0],10);
    var date = new Date(yyyy,mm-1,dd,0,0,0,0);
    return mm === (date.getMonth()+1) && dd === date.getDate() && yyyy === date.getFullYear();
}