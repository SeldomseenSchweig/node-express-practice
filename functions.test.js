const {mean, median, mode} = require("./functions");



describe('mean', function(){

    test('mean should return the average of the numbers', function(){
        const res = mean([1,3,5,7,9]);
        expect(res).toEqual(5);
    } );
    
    
    test('mean should return the average of the numbers', function(){
        const num = mean([3,5]);
        expect(num).toEqual(4);
    } );


});

describe('median', function(){

    test('median should return the middle of the numbers', function(){
        const res = median([1,3,5,6,7,9]);
        expect(res).toEqual(5.5);
    } );
    
    
    test('median should return the average of the numbers', function(){
        const num = median([3,4,8,5]);
        expect(num).toEqual(4.5);
    } );


});



describe('mode', function(){

    test('mode should return the the most freqently occurring of the numbers', function(){
        const res = mode([1,3,5,5,5,7,7,9]);
        expect(res).toEqual(5);
    } );
    
    
    test('mode should return the the most freqently occurring of the numbers', function(){
        const num = mode([3,5,6,6,7,8,1,6]);
        expect(num).toEqual(6);
    } );


});


