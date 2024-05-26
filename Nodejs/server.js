let http = require("http")

function process_request(req, resp){
    var str = "<h1>Hello Maurya</h1>"
    var size = str.length
    resp.writeHead(200,{
        "Content-Lenght":size,
        "Content-Type":"text/html"
    })

    //resp.write(str)
    resp.end(str)   
}

let server = http.createServer(process_request)
server.listen(3000, "localhost")
console.log("Server is running on server http://localhost:3000")