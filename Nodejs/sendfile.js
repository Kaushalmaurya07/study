let http = require("http")
var fs = require("fs")
const { greet } = require("./module1")

function process_request(req, resp){
    var d1 = new Date()
    var str = "<html><body>"
    str +="<h1>Welcome </h1><h1>Today is "+d1+ "</h1>"
    str +="<h3>A"+greet.my+ "to you</h3>"
    str +="</body></html>"
    var len = str.length

    resp.writeHead(200,{
        "Content-Lenght":len,
        "Content-Type":"text/html"
    })
            resp.end(str)
        
}

let server = http.createServer(process_request)
server.listen(3000, "localhost")
console.log("Server is running on server http://localhost:3000")