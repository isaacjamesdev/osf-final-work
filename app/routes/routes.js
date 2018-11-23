module.exports = function(app){
    const controlcontact = app.controlContact;
    const controlView = app.controlView;
    const controlUtils = app.controlUtils;

// view
    app.get('/', controlView.home);
    
    app.get('/register', controlView.register);

    app.get('/search', controlView.search);

    app.get('/updateById/:id', controlView.updateById);
    
// API 
    // Listing contacts → /contacts
    app.get('/contacts', controlcontact.list);

    // • Get a contact → /contacts/:id
    app.get('/listById/:id', controlcontact.listById);

    // • Delete a contact → /contacts/:id
    app.get('/deleteById/:id', controlcontact.deleteById)
    
    // • Update a contact → /contacts:id
    app.post('/updateById/:id', controlcontact.updateById);

     // • Register a contact → /contacts
    app.post('/contacts', controlcontact.register);
    
    // UTILS
    app.get('/utils/removeBlankContacts', controlUtils.removeBlankContacts)
 
    app.get('/utils/removeAllContacts', controlUtils.removeAllContacts)

}