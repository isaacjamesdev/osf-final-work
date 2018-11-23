module.exports = function(app){
    const controlcontact = app.controlContact;
    const controlView = app.controlView;

// view
    app.get('/', controlView.home);
    
    app.get('/register', controlView.register);

    app.get('/search', controlView.search);

    app.get('/updateById/:id', controlView.updateByIdTemplate);
    
// API 
    // Listing contacts → /contacts
    app.get('/contacts', controlcontact.list);

    // • Register a contact → /contacts
    app.post('/contacts/register', controlcontact.register);

    // • Get a contact → /contacts/:id
    app.get('/listById/:id', controlcontact.listById);

    // -----------
     // • Update a contact → /contacts:id
     app.post('/updateById/:id', controlcontact.updateById);

     // • Delete a contact → /contacts/:id
     app.get('/deleteById/:id', controlcontact.deleteById)

}