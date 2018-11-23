const request = require('request');
const externalApi = "https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/"
const view = {}

view.home = (req,res)=>{
    res.render('home');
}

view.register = (req,res)=>{
    res.render('register');
}

view.search = (req,res)=>{
    res.render('search');
}

view.updateById = (req,res)=>{
    request.get(externalApi+req.params.id,
        (error, response, body) => {
            res.render('updateById',{
                contact: JSON.parse(body)
            })
    });  
}

module.exports = view;