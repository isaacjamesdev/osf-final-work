const request = require('request');
const externalApi = "https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/"
const contact = {}

contact.list = (req,res)=>{
    request.get(externalApi, (error, response, body) =>{
        res.render('list',{
            contacts: JSON.parse(body)
        })
    });    
}

contact.register = (req,res)=>{
    var postData={
        "name": req.body.name,
        "email": req.body.email,
        "gender": req.body.gender,
        "phone": req.body.phone
    };
    request.post({
        url: externalApi,
        json: postData
    },
    (error, response, body) =>{
        console.log("opaa, send something");
        res.redirect('/contacts')
    });   
}


// corrigir
contact.updateById = (req,res)=>{
    var postData={
        "_id": req.body._id,
        "name": req.body.name,
        "email": req.body.email,
        "gender": req.body.gender,
        "phone": req.body.phone
    }
    console.log(postData)

    
    request.put({
        url: externalApi+`${req.body._id}`,
        // method: "PUT",
        json: postData
    },
    (error, response, body)=>{
        console.log("opaa, send update");
        res.redirect("/contacts")
    }); 
}
// -isaaaac

// var user = {
//     "name" : req.body.name,
//     "email" : req.body.email,
//     "gender" : req.body.gender,
//     "phone" : req.body.phone
// }

// request.put({
//     url: api + `${req.body.id}`,
//     method: "POST",
//     json: user
// }


// --------

// app.get('/update/:id', function (req, res) {
//     var id = req.params.id;

//     request.get('https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/' + id, function (error, response, body) {
//         res.render('update', {
//             user: JSON.parse(body)
//         })
//     })
// });

// end isaac

contact.deleteById = (req,res,)=>{
    
    request.delete({
        url: externalApi+req.params.id,
        method:"DELETE"
    },
        (error, response, body)=>{
            console.log("opaa, send something");
            console.log('deleted');
            res.redirect('/contacts')
        });
}
   
contact.listById = (req,res)=>{
    request.get(externalApi+req.params.id, (error, response, body) => {
        res.render('listById',{
            contact: JSON.parse(body)
        })
    });  
}
module.exports = contact;