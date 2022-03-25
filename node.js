const { fstat } = require("fs");
const { request } = require("http");
var url=require("url");

var path=url.parse(request.url).index.html;

    fs.readFile(__dirname + index.html,function(error,data){
        if(error){
            Response.writeHead(404);
            Response.write(error);
            Response.end();
        }
        else{
            Response.writeHead(200,{
                'content-type':'text/html'
            });
            Response.write(data);
            Response.end();
        }
    });