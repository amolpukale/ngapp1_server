
const mysql = require("mysql");
var express = require("express");

var vrouter =  express();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'manager',
    database : 'project'
  });

var myData =[];
connection.connect();


// vrouter.put("/:No",function(request, response){
//     let vno = parseInt(request.params.No);
//     let vname = request.body.Hotel_Name;
//     let vaddress = request.body.Address; 
//     let vcity = request.body.City; 
//     let vstate = request.body.State; 
//     let vpincode = request.body.Pin_Code;
//     let vlandline = request.body.Landline_Number; 
//     let vmail = request.body.Hotel_MailID;  
//     let vwebsite = request.body.website;
//     let vfeat = request.body.Features;  
    
//     let query = `update Hotels set Hotel_Name= '${vname}',Address= '${vaddress}',City= '${vcity}',State= ${vstate},Pin_Code= '${vpincode}',Landline_Number= '${vlandline}',Hotel_MailID= '${vmail}',website= '${vwebsite}',Features= '${vfeat}' where HotelID=${vno}`;
//     console.log(query);

//     connection.query(query, function(err, result){
//         if(err==null)
//         {
//            response.contentType("application/json");
//            response.send(JSON.stringify(result));
//         }
//         else
//         {   
//            response.contentType("application/json");
//            response.send(err); 
//         }
//     });
        
// });

vrouter.get("/", function(request, response){
    connection.query("select * from Hotels", function(err, result){
        if(err==null)
        {
           myData =  result;
           response.contentType("application/json");
           response.send(JSON.stringify(myData));
        }
        else
        {
           response.send("Something went wrong!"); 
        }
    });
    
});



module.exports = vrouter;
