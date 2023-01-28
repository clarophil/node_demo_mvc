let User = require('../models/userModel');

let userList = [];

// List of users
exports.userList = function (req, res) {
    // let user = new User('Dupont','Paul');
    // userList.push(user);
    res.render('userList.ejs', {users:userList});
}

// Detail user
exports.userDetail = function (req, res) {
    let user = new User('Dupont','Paul');
    res.render('userDetail.ejs', { user });
}

// Add or update one user in the list
exports.userSave =  function(req, res) {
    console.log(req.body);
    let iduser = req.body.iduser
    let lastname =  req.body.lastname;
    let firstname = req.body.firstname;
    if ( firstname && lastname)
    {
        if ( iduser == -1)
        {
            let user = new User(lastname,firstname);
            userList.push(user);
        }
        else if( iduser >=0 )
        {
            let user = new User(lastname,firstname);
            userList[iduser] = user;
        }
        console.log(userList);
        
        res.redirect('/user/list');
    }
    else {
        let user = new User(lastname, firstname);
        res.status(422).render('userAdd.ejs', { iduser: '-1', user: user });
    }
}


// Send form to update user
exports.userFormAdd = function(req, res) {
    let user = new User('', '');
    res.render('userAdd.ejs', { iduser: '-1', user : user });
}

// Send user form update
exports.userFormUpdate =function (req, res) {
    let iduser = req.params.iduser;
    res.render('userAdd.ejs', { iduser: iduser, user :  userList[iduser] });
}

exports.userRemove = function (req, res) {
    userList.splice(req.params.iduser,1);
    res.redirect('/user/list');
 };