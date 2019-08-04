const express =require('express')
const app=express();

app.listen(8080,'127.0.0.1');
app.use(express.static('./public'))

app.get('/abc',(req,res)=>{
    res.json({
        status:true,
        data:[
            {
                name:'ddddd',
                age:19,
                id:1
            },
            {
                name:'ccccd',
                age:19,
                id:2
            },
        ],
        msg:'请求成功'
    });
});