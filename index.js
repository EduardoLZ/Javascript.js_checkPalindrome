function solution(inputString) {
    var x= inputString.length;
    var x2=inputString;
    var x3=inputString;
    var z = null;
    var t = x-1;
    for (y=0;y<x;y++)
        {
            if(x2[y]==x3[t-y]){
                z++;
            }
            
        }
    if(z== x)
        {
            return true;
            console.log(z);
        }
    else
        {
            return false;
        }
}
