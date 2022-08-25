var arr = [12,34,9];

var heyFun = a =>{
    console.log(`sum ${a}`);
};

var lala = [...arr, 11,22,33];
console.log(lala)

heyFun(lala[0])