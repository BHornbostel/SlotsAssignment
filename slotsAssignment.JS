function Slots(quart){
    for (var i=quart;i!=0;i--){
        var lot= Math.random(1,100);
        if (lot==100){
            i += Math.random(50,100);
            return quart;
        }
        
    }
    return 0;
}