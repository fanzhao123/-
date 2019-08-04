// async 返回一个promise
// async function show(){
//     return '哈哈哈哈哈哈哈哈'
// }
// show().then(res=>console.log(res));

async function show(){
    const promise = new Promise(function(resolve,reject){
        setTimeout(()=>resolve("简单"),2000);
    })
    const res=await promise;

    return res
}
show().then(res=>console.log(res));