var http = require('http');
let postData = require("./postData.json");
console.log(postData.merchantOrderNumber);
const count =1;

var options = {
    "method": "POST",
    "hostname": "10.140.8.67",
    "port": 11014,
    "path": "/order/create",
    "headers": {
        'Content-Type': 'application/json',
        'accountId': '15',
        'merchantId': '7',
        'merchantShortCode': 'MSC'
    }
}
console.log(options);
let i;
var orders=[];
for(i=0; i<10; i++){

  postData.merchantOrderNumber = "testMerchantOrder_QA"+i;
    const req = http.request(options, function(res) {

        var chunks = [];
    
        res.on("data", function (chunk) {
            chunks.push(chunk);
        });
    
        res.on("end", function() {
            var body = Buffer.concat(chunks);
            console.log(body.toString());
            orders.push(body.toString());
            
        });
    
    });
    req.write(JSON.stringify(postData));
    req.end();

}
//console.log(orders);




