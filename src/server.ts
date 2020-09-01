var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send("Site de Tecnologia");
});

app.get('/portateis',function(req,res){
    res.send("Categoria de Portateis");
});

app.get('/smartphones',function(req,res){
    res.send("Categoria de Smartphones");
}); 

app.get('/tablets',function(req,res){
    res.send("Categoria de Tablets");
});

app.listen(8080,function(){
    console.log("Servidor ativo no porto 8080");
});