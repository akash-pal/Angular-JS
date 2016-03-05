var express = require('express'),

    app = express();
/*
app.configure(function() {
    app.use(express.static(__dirname, '/'));
});*/

app.use(
     "/",
     express.static(__dirname)
);

app.get('/customers/:id',function(req,res){
        var customerId = parseInt(req.params.id);
        var data ={};
        for(var i=0,len=customers.length;i<len;i++){
            if(customers[i].id === customerId){
                data = customers[i];
                break;
            }
        }
        res.json(data);
});

app.delete('/customers/:id',function(req,res){
        var customerId = parseInt(req.params.id);
        var data ={status:false};
        for(var i=0,len=customers.length;i<len;i++){
            if(customers[i].id === customerId){
                customers.splice(i,1);
                data = {status:true};
                break;
            }
        }
        res.json(data);
});


app.get('/customers',function(req,res){
   res.json(customers);
   // res.json(500,{error:'an error has occured'});
});

app.get('/orders',function(req,res){
    var data=[];
    var orders;
    for(var i=0,len=customers.length;i<len;i++){
        orders = customers[i].orders;
        if(orders){
            for(j=0;j<orders.length;j++){
                console.log(orders[j]); 
                data.push(orders[j]);
            }    
        }
    }
    res.json(data);
});



app.listen(3000);

console.log('Express listening on port 3000');

var customers = [
                       {
                        id:1,
                        joined:'2000-12-02',
                        name:'John',
                        city:'Chandler',
                        orderTotal:9.9956,
                        orders:[
                            {
                                id:1,
                                product:'Shoes',
                                total:9.9956
                            }
                        ]
                       },
                       {
                        id:2,   
                        joined:'1965-01-25',
                        name:'Zed',
                        city:'Las vegas',
                        orderTotal:19.99,
                        orders:[
                            {
                                id:2,
                                product:'Baseball',
                                total:9.995
                            },
                            {
                                id:3,
                                product:'Bat',
                                total:9.995
                            }
                        ]
                       },
                       { 
                        id:3,
                        joined:'1944-06-15',
                        name:'Tina',
                        city:'New York',
                        orderTotal:44.99,
                        orders:[
                            {
                                id:4,
                                product:'Headphone',
                                total:44.99
                            }
                        ]
                       },
                       {
                        id:4,
                        joined:'1995-03-28',
                        name:'Dave',
                        city:'Seattle',
                        orderTotal:101.5,
                        orders:
                           [
                            {
                                id:5,
                                product:'Kindle',
                                total:101.5
                            }
                        ]    
                    }
                 ];
