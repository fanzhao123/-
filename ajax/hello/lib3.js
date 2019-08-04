window.onload=function(){
    var btn=document.getElementById('btn');
    let num=document.getElementById('num1')
    let ul=document.getElementById('ul1')
    
    btn.onclick =function(){
        const xhr=new XMLHttpRequest()
        // 2.建立连接
        let number = num.value;
        xhr.open("GET","http://api.icndb.com/jokes/random/${number}",true)
        xhr.send();
        // 4.返回数据
        xhr.onload=function(res){
            if(this.status==200){
                var arr=JSON.parse(this.responseText).value
                // console.log(arr.length)
                for(let i=0;i<arr.length;i++){
                    var  li=document.createElement('li');
                    li.innerHTML=arr[i].joke;
                    ul.appendChild(li) 
                }
            }
        }
        xhr.onerror=function(){
            console.log('网络服务繁忙')
        }
    }


}