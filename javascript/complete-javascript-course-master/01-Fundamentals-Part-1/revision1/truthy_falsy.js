// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean('adfinem'));
console.log(Boolean({}));

const money = '';
if(1+1){
    console.log("don't spend all of it!;)");
}else{
    console.log("find job");
}