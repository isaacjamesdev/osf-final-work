const request = require('request')
const utils = {}

utils.removeBlankContacts = (req,res)=> request.get("https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts", (error, response, body) =>{
    contacts = JSON.parse(body);

    console.log(contacts.length+" contacts are detected")

    contacts.forEach(function(contact){
        if(contact.name == undefined){
            request.delete("https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/"+contact._id, (error, response, body) => {
                // console.log(JSON.parse(body).message)
            })    
        }
    })

    res.render("home")
})

utils.removeAllContacts = (req,res)=> request.get("https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts", (error, response, body) =>{
    contacts = JSON.parse(body);

    console.log(contacts.length+" contacts are detected")

    contacts.forEach(function(contact){
            request.delete("https://f5zg6v0z92.execute-api.us-east-1.amazonaws.com/dev/contacts/"+contact._id, (error, response, body) => {
                // console.log(JSON.parse(body).message)
            })
    })

    res.render("home")
})

module.exports = utils;