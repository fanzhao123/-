window.onload=function(){
    var btn=document.getElementById('btn')
    var div=document.getElementById('div1')
    var ul=document.getElementById('ul1')
    btn.onclick=function(){
        // div.innerHTML="fafjhsdvbfj"
        // 从服务器获取表数据
        // 1.创建xmlhttpquest()
        const xhr =new XMLHttpRequest()
        // 2.建立连接
        xhr.open('GET','数组.txt',true);
        // 3.发送请求
        xhr.send();
        // 4.返回数据
        xhr.onload=function(res){
            if(this.status===200){

                // div.innerHTML= JSON.parse(this.responseText).name
                let arr=JSON.parse(this.responseText);
                let str="";
                for(let i=0;i<arr.length;i++){
                    str+='<li>'+arr[i].name+'</li>'
                }
                ul.innerHTML=str
            }
        }
    }
}