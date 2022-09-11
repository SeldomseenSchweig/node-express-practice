const { request } = require('express');
const express = require('express');
const req = require('express/lib/request');
const ass  = require('./functions')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));




app.get('/mean/:numbers', (req, res)=>{
    let nums = req.params.numbers
    nums = nums.split(",")
    checkArray(nums)
    for (let i = 0; i < nums.length; i++) {
        if(isNaN(nums[i])){
            return res.status(400).json(`${nums[i]} is not a num, Nums Are Required!`)
    
        }
  }
 
    let mean = ass.mean(nums)
   
    return res.json({'mean':mean})
})
app.get('/median/:numbers', (req, res)=>{
    let nums = req.params.numbers
    nums = nums.split(",")
    checkArray(nums)
    for (let i = 0; i < nums.length; i++) {
        if(isNaN(nums[i])){
            return res.status(400).json(`${nums[i]} is not a num, Nums Are Required!`)
    
        }
  }
    let median = ass.median(nums)

    res.json({'median':median})
})

app.get('/mode/:numbers', (req, res)=>{
    let nums = req.params.numbers
    nums = nums.split(",")
    checkArray(nums)
    for (let i = 0; i < nums.length; i++) {
        checkNum(nums[i])
  }

    let target = ass.mode(nums)
    // target = target.toString()
    return res.json({'mode': target});    
})

function checkArray(nums, res){

    if(nums.length === 0){
        return res
        .status(400)
        .json('This operation requires numbers')
    }
return true
}



app.listen(3000, () =>{
    console.log('app on port 3000');
});

