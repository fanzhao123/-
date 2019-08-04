window.onload=function(){
    var btn=document.getElementById('btn')
    var div=document.getElementById('div1')
    btn.onclick=function(){
        // div.innerHTML="fafjhsdvbfj"
        // 从服务器获取表数据
        // 1.创建xmlhttpquest()
        const xhr =new XMLHttpRequest()
        // 2.建立连接
        xhr.open('GET','json.txt',true);
        // 3.发送请求
        xhr.send();
        // 4.返回数据
        xhr.onload=function(res){
            if(this.status===200){

                div.innerHTML= JSON.parse(this.responseText).name
            }
        }
    }
}