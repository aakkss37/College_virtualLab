const express = require('express')
const bodyParser = require('body-parser')
const ejs = require("ejs");
const mongoose = require('mongoose')
const session = require('express-session')
const passport = require('passport')
const passportLocalMongoose = require('passport-local-mongoose');
const { use } = require('passport/lib');
const alert = require('alert')
const flash = require("connect-flash");


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json())
app.use(session({
    secret: 'This_is_a_little_secret_of_karpagam_academy_of_higher_education',
    resave: false,
    saveUninitialized: false,

}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//*==============================================================*//
//  **********MONGOOSE CONNECTION, SCHEMA AND PLUGIN************  //
//*==============================================================*//

mongoose.connect("mongodb+srv://admin:admin123@cluster0.khkmp.mongodb.net/karpagam_virtual_lab", { useUnifiedTopology: true, useNewUrlParser: true })

const practicalSchema = {
    department: String,
    year: String,
    title: String,
    discreption: String,
    quillData: Object,
};
const Biotechnogoly = mongoose.model('Biotechnogoly', practicalSchema)
const Physics = mongoose.model('Physics', practicalSchema)
const Cybersecurity = mongoose.model('Cybersecurity', practicalSchema)
const Computer_Science = mongoose.model('Computer_Science', practicalSchema)
const Chemistry = mongoose.model('Chemistry', practicalSchema)
const Mathematics = mongoose.model('Mathematics', practicalSchema)


const adminSchema = new mongoose.Schema({
    name: String,
    department: String,
    username: String,
    password: String,
    isAdmin: Boolean,
    isSuperAdmin: Boolean
})
adminSchema.plugin(passportLocalMongoose)

const Admin = mongoose.model('Admin', adminSchema)

passport.use(Admin.createStrategy());
passport.serializeUser(Admin.serializeUser());
passport.deserializeUser(Admin.deserializeUser());



// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //




//*===================================*//
//  **********CLIENT SIDE************  //
//*===================================*//


app.get('/home', (req, resp) => {
    resp.render('client/home')
})

app.get('/virtuallab', (req, resp) => {
    resp.render('client/virtualLab')
})

app.get('/home/about', (req, resp) => {
    resp.render('client/about')
})


//============================================================================//
// FETCHING DATA FROM DATABASE AND SHOWING EACH DEPARTMENT AND YEAR SEPARATELY
//============================================================================//


app.get('/home/virtual-lab/biotechnology/:year', async (req, resp) => {

    const year = req.params.year

    if (year == 'first-year') {
        try {
            Biotechnogoly.find({ year: 'first-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Biotechnogoly',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'second-year') {
        try {
            Biotechnogoly.find({ year: 'second-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Biotechnogoly',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'third-year') {
        try {
            Biotechnogoly.find({ year: 'third-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Biotechnogoly',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

})

app.get('/home/virtual-lab/physics/:year', async (req, resp) => {

    const year = req.params.year

    if (year == 'first-year') {
        try {
            Physics.find({ year: 'first-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Physics',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'second-year') {
        try {
            Physics.find({ year: 'second-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Physics',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'third-year') {
        try {
            Physics.find({ year: 'third-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Physics',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

})

app.get('/home/virtual-lab/mathematics/:year', async (req, resp) => {

    const year = req.params.year

    if (year == 'first-year') {
        try {
            Mathematics.find({ year: 'first-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Mathematics',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'second-year') {
        try {
            Mathematics.find({ year: 'second-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Mathematics',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'third-year') {
        try {
            Mathematics.find({ year: 'third-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Mathematics',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

})

app.get('/home/virtual-lab/cybersecurity/:year', async (req, resp) => {

    const year = req.params.year

    if (year == 'first-year') {
        try {
            Cybersecurity.find({ year: 'first-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Cybersecurity',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'second-year') {
        try {
            Cybersecurity.find({ year: 'second-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Cybersecurity',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'third-year') {
        try {
            Cybersecurity.find({ year: 'third-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Cybersecurity',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

})

app.get('/home/virtual-lab/computer-science/:year', async (req, resp) => {

    const year = req.params.year

    if (year == 'first-year') {
        try {
            Computer_Science.find({ year: 'first-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Computer Science',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'second-year') {

        try {
            Computer_Science.find({ year: 'second-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Computer Science',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'third-year') {
        try {
            Computer_Science.find({ year: 'third-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Computer Science',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

})

app.get('/home/virtual-lab/chemistry/:year', async (req, resp) => {

    const year = req.params.year

    if (year == 'first-year') {
        try {
            Chemistry.find({ year: 'first-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Chemistry',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'second-year') {
        try {
            Chemistry.find({ year: 'second-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Chemistry',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }
    else if (year == 'third-year') {
        try {
            Chemistry.find({ year: 'third-year' }, (err, foundItems) => {
                resp.render('client/departmentLab', {
                    DepartmentName: 'Chemistry',
                    foundItems: foundItems
                })
            })
        } catch (err) {
            console.log(err)
        }
    }

})




//=============================================//
// GETTING PERTICULAR PRACTICAL BY SEARCHING ID.
//=============================================//

app.get('/home/:DepartmentName/:year/:practical_Id', async (req, resp) => {

    let departmantName = req.params.DepartmentName
    let student_year = req.params.year
    let practical_Id = req.params.practical_Id
    console.log(departmantName)
    console.log(student_year)
    console.log(practical_Id)
    if (departmantName === 'Biotechnogoly') {
        try {
            const foundItem = await Biotechnogoly.findOne({ _id: practical_Id })
            resp.render('client/practical', {
                data: foundItem.quillData,
                title: foundItem.title
            })
        } catch (err) {
            console.log(err);
        }
    } else if (departmantName === 'Physics') {
        try {
            const foundItem = await Physics.findOne({ _id: practical_Id })
            resp.render('client/practical', {
                data: foundItem.quillData,
                title: foundItem.title
            })
        } catch (err) {
            console.log(err);
        }
    } else if (departmantName === 'Cybersecurity') {
        try {
            const foundItem = await Cybersecurity.findOne({ _id: practical_Id })
            resp.render('client/practical', {
                data: foundItem.quillData,
                title: foundItem.title
            })
        } catch (err) {
            console.log(err);
        }
    } else if (departmantName === 'Computer Science') {
        try {
            const foundItem = await Computer_Science.findOne({ _id: practical_Id })
            resp.render('client/practical', {
                data: foundItem.quillData,
                title: foundItem.title
            })
        } catch (err) {
            console.log(err);
        }
    } else if (departmantName === 'Chemistry') {
        try {
            const foundItem = await Chemistry.findOne({ _id: practical_Id })
            resp.render('client/practical', {
                data: foundItem.quillData,
                title: foundItem.title
            })
        } catch (err) {
            console.log(err);
        }
    }
    else if (departmantName === 'Mathematics') {
        try {
            const foundItem = await Mathematics.findOne({ _id: practical_Id })
            resp.render('client/practical', {
                data: foundItem.quillData,
                title: foundItem.title
            })
        } catch (err) {
            console.log(err);
        }
    }

})




// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //

//*===================================*//
//  **********SUPER ADMIN************  //
//*===================================*//

//===================//
// SUPER ADMIN LOGIN //
//===================//
app.get('/super-admin/login', (req, resp) => {
    resp.render('superAdmin/super-admin-login')
})
app.post('/super-admin/login', async (req, resp) => {

    try {     
        const foundUser = await Admin.findOne({ username: req.body.username })
        console.log(foundUser)
        if (foundUser && foundUser.isSuperAdmin) {
            const superUser = new Admin({
                username: req.body.username,
                password: req.body.password
            })
            req.logIn(superUser, (err) => {
                if (err) console.log(err)
                else {
                    passport.authenticate('local')(req, resp, () => {
                        if (req.isAuthenticated()) {
                            resp.redirect('/super-admin/admin-list') 
                            console.log('Login sucessful')
                        } else {    
                            alert('wrong user-ID or password')
                            resp.redirect('/super-admin/login')
                        }
                    });
                }
            })
        } else if (foundUser  &&  !foundUser.isSuperAdmin){
            alert('Unauthorized Request')
            resp.redirect('/super-admin/login')
        }
        else{
            alert('wrong user-ID or password')
            resp.redirect('/super-admin/login')
        }
    } catch (error) {
        console.log(error)
    }

})




//====================//
// SUPER ADMIN LOGOUT //
//====================//
app.get('/super-admin/logout', async (req, resp) => {
    try {
        req.logOut((err) => {
            if (err) return next(err);
            console.log('Logout sucessfull')
            alert('Logut sucessfully')
        });
    } catch (error) {
        console.log(error)
    }
})

//========================//
// NEW ADMIN REGISTRATION //
//========================//
app.get('/super-admin/create-admin', (req, resp) => {



    if (req.isAuthenticated()) {
        if (req.user._id == '62925cc6d73c40339c0c4ea7') {
            resp.render('superAdmin/new-admin')
        }
        else{
            alert('Unauthorized')
            resp.redirect('/super-admin/login')
        }
    }
    else {
        alert('Please Login')
        resp.redirect('/super-admin/login')
    }

})

app.post('/super-admin/create-admin', async (req, resp) => {

    if (req.isAuthenticated()) {
        try {
            if (req.user._id == '62925cc6d73c40339c0c4ea7') {
                const foundUser = await Admin.find({ username: req.body.username })
                if (foundUser.length) {

                    alert('User name already exist.')
                    resp.redirect('/super-admin/create-admin')
                    console.log(foundUser)
                }
                else { 
                    Admin.register({
                        username: req.body.username,
                        name: req.body.facultyName,
                        department: req.body.department,
                        isAdmin: true,
                        isSuperAdmin: false
                    }, req.body.password, (err, user) => {
                        if (err) {
                            console.log(err)
                            resp.redirect('/super-admin/create-admin')
                        }
                        else {
                            passport.authenticate('local')(req, resp, () => {
                                console.log('new user registered \n', user)
                                resp.redirect('/super-admin/admin-list')
                            })
                        }
                    })
                }
            }
            else {
                alert('Unauthorized')
                resp.redirect('/super-admin/login')
            }
        } catch (error) {
            console.log(error)
        }
            
            
    }
    else {
        alert('Please Login')
        resp.redirect('/super-admin/login')
    }
    
})


app.get('/super-admin/admin-list', async (req, resp) => {

    if (req.isAuthenticated()) {
        if (req.user._id == '62925cc6d73c40339c0c4ea7') {        
            try {
                const allAdmin = await Admin.find()
                resp.render('superAdmin/admin-list', {
                    foundItems: allAdmin
                });
            } catch (error) {
                console.log(error)
            }
        }
        else{
            alert('Please Login')
            resp.redirect('/super-admin/login')
        }
    }
    else {
        alert('Please Login')
        resp.redirect('/super-admin/login')
    }
    
})


//==============//
// ADMIN DELETE //
//==============//
app.delete('/super-admin/admin/:admin_username/:admin_id/delete', async (req, resp) => {
    if (req.isAuthenticated()) {
        if (req.user._id == '62925cc6d73c40339c0c4ea7') { 
            try {

                const adminId = req.params.admin_id
                await Admin.findByIdAndDelete(adminId, (err, doc) => {
                    if (err) {
                        console.log(err)
                    }
                    else {
                        console.log(doc, 'deleted')
                        alert('Deleted Sucessfully')
                    }
                })


            } catch (error) {
                console.log(error)
            }
        }
        else {
            alert('Please Login')
            resp.redirect('/super-admin/login')
        }
    }
    else {
        alert('Please Login')
        resp.redirect('/super-admin/login')
    }

})



// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //

//*=================================*//
//  **********ADMIN SIDE***********  //
//*=================================*//

app.get('/admin-login', (req, resp) => {
    resp.render('admin/admin-login')
})

//==========================//
// AUTHANTICATE ADMIN LOGIN //
//==========================//
app.post('/admin-login', (req, resp) => {

    const user = new Admin({
        username: req.body.username,
        password: req.body.password
    })
    req.logIn(user, (err) => {
        if (err) console.log(err)
        else {
            passport.authenticate('local')(req, resp, () => {
                console.log('working inside')
                if (req.isAuthenticated()) {
                    resp.redirect('/admin/compose')
                    console.log('Login sucessful')
                } else {
                    alert('wrong user-ID or password')
                    resp.redirect('/admin-login')

                }
            });
        }
    })
})


//==============//
// ADMIN LOGOUT //
//==============//
app.get('/logout', async (req, resp) => {
    try {
        req.logOut((err) => {
            if (err) return next(err);
            console.log('Logout sucessfull')
            resp.redirect('/admin-login')
        });
    } catch (error) {
        console.log(error)
    }
})




app.get('/admin/virtuallab', (req, resp) => {
    if (req.isAuthenticated()) {
        resp.render('admin/virtualLab')
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }
})

app.get('/admin/compose', (req, resp) => {
    if (req.isAuthenticated()) {
        resp.render('admin/compose')
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }
})

app.get('/admin/about', (req, resp) => {
    if (req.isAuthenticated()) {
        resp.render('admin/about')
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }
})



//=========================//
// COMPOSEING NEW PRECTICAL//
//=========================//
app.post('/admin/compose', async (req, resp) => {
    if (req.isAuthenticated()) {
        let departmantName = req.body.department;
        console.log(departmantName)

        if (departmantName === 'Biotechnology') {
            try {
                console.log(departmantName)
                const incoming = new Biotechnogoly({
                    department: req.body.department,
                    year: req.body.year,
                    title: req.body.title,
                    discreption: req.body.discreption,
                    quillData: req.body.quillData
                });
                await incoming.save()
                resp.status(201).send({ "message": "saved" });
            } catch (err) {
                resp.status(400).send({ "message": err });
            }

            resp.status(400).send({ "message": "data cannot be empty" });
        } else if (departmantName === 'Physics') {
            try {
                console.log(departmantName)
                const incoming = new Physics({
                    department: req.body.department,
                    year: req.body.year,
                    title: req.body.title,
                    discreption: req.body.discreption,
                    quillData: req.body.quillData
                });
                await incoming.save()
                resp.status(201).send({ "message": "saved" });
            } catch (err) {
                resp.status(400).send({ "message": err });
            }

            resp.status(400).send({ "message": "data cannot be empty" });
        } else if (departmantName === 'Cybersecurity') {
            try {
                console.log(departmantName)
                const incoming = new Cybersecurity({
                    department: req.body.department,
                    year: req.body.year,
                    title: req.body.title,
                    discreption: req.body.discreption,
                    quillData: req.body.quillData
                });
                await incoming.save()
                resp.status(201).send({ "message": "saved" });
            } catch (err) {
                resp.status(400).send({ "message": err });
            }

            resp.status(400).send({ "message": "data cannot be empty" });
        } else if (departmantName === 'Computer-science') {
            try {
                console.log(departmantName)
                const incoming = new Computer_Science({
                    department: req.body.department,
                    year: req.body.year,
                    title: req.body.title,
                    discreption: req.body.discreption,
                    quillData: req.body.quillData
                });
                await incoming.save()
                resp.status(201).send({ "message": "saved" });
            } catch (err) {
                resp.status(400).send({ "message": err });
            }

            resp.status(400).send({ "message": "data cannot be empty" });
        } else if (departmantName === 'Chemistry') {
            try {
                console.log(departmantName)
                const incoming = new Chemistry({
                    department: req.body.department,
                    year: req.body.year,
                    title: req.body.title,
                    discreption: req.body.discreption,
                    quillData: req.body.quillData
                });
                await incoming.save()
                resp.status(201).send({ "message": "saved" });
            } catch (err) {
                resp.status(400).send({ "message": err });
            }

            resp.status(400).send({ "message": "data cannot be empty" });
        } else if (departmantName === 'Mathematics') {
            try {
                console.log(departmantName)
                const incoming = new Mathematics({
                    department: req.body.department,
                    year: req.body.year,
                    title: req.body.title,
                    discreption: req.body.discreption,
                    quillData: req.body.quillData
                });
                await incoming.save()
                resp.status(201).send({ "message": "saved" });
            } catch (err) {
                resp.status(400).send({ "message": err });
            }

            resp.status(400).send({ "message": "data cannot be empty" });
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }

})



//============================================================================//
// FETCHING DATA FROM DATABASE AND SHOWING EACH DEPARTMENT AND YEAR SEPARATELY
//============================================================================//
app.get('/admin/virtual-lab/biotechnology/:year', async (req, resp) => {

    if (req.isAuthenticated()) {
        const year = req.params.year

        if (year == 'first-year') {
            try {
                const foundItems = await Biotechnogoly.find({ year: 'first-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Biotechnogoly',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'second-year') {
            try {
                const foundItems = await Biotechnogoly.find({ year: 'second-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Biotechnogoly',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'third-year') {
            try {
                const foundItems = await Biotechnogoly.find({ year: 'third-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Biotechnogoly',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }
})

app.get('/admin/virtual-lab/physics/:year', async (req, resp) => {

    if (req.isAuthenticated()) {
        const year = req.params.year

        if (year == 'first-year') {
            try {
                const foundItems = await Physics.find({ year: 'first-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Physics',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'second-year') {
            try {
                const foundItems = await Physics.find({ year: 'second-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Physics',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'third-year') {
            try {
                const foundItems = await Physics.find({ year: 'third-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Physics',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }

})

app.get('/admin/virtual-lab/mathematics/:year', async (req, resp) => {

    if (req.isAuthenticated()) {
        const year = req.params.year

        if (year == 'first-year') {
            try {
                const foundItems = await Mathematics.find({ year: 'first-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Mathematics',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'second-year') {
            try {
                const foundItems = await Mathematics.find({ year: 'second-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Mathematics',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'third-year') {
            try {
                const foundItems = await Mathematics.find({ year: 'third-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Mathematics',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }

})

app.get('/admin/virtual-lab/cybersecurity/:year', async (req, resp) => {

    if (req.isAuthenticated()) {
        const year = req.params.year

        if (year == 'first-year') {
            try {
                const foundItems = await Cybersecurity.find({ year: 'first-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Cybersecurity',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'second-year') {
            try {
                const foundItems = await Cybersecurity.find({ year: 'second-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Cybersecurity',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'third-year') {
            try {
                const foundItems = await Cybersecurity.find({ year: 'third-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Cybersecurity',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }

})

app.get('/admin/virtual-lab/computer-science/:year', async (req, resp) => {

    if (req.isAuthenticated()) {
        const year = req.params.year

        if (year == 'first-year') {
            try {
                const foundItems = await Computer_Science.find({ year: 'first-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Computer Science',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'second-year') {
            try {
                const foundItems = await Computer_Science.find({ year: 'second-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Computer Science',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'third-year') {
            try {
                const foundItems = await Computer_Science.find({ year: 'third-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Computer Science',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }

})

app.get('/admin/virtual-lab/chemistry/:year', async (req, resp) => {

    if (req.isAuthenticated()) {
        const year = req.params.year

        if (year == 'first-year') {
            try {
                const foundItems = await Chemistry.find({ year: 'first-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Chemistry',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'second-year') {
            try {
                const foundItems = await Chemistry.find({ year: 'second-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Chemistry',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
        else if (year == 'third-year') {
            try {
                const foundItems = await Chemistry.find({ year: 'third-year' })
                resp.render('admin/departmentLab', {
                    DepartmentName: 'Chemistry',
                    foundItems: foundItems
                })
            } catch (err) {
                console.log(err)
            }
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }

})



//=============================================//
// GETTING PERTICULAR PRACTICAL BY SEARCHING ID.
//=============================================//
app.get('/admin/:DepartmentName/:year/:practical_Id', async (req, resp) => {

    if (req.isAuthenticated()) {
        let departmantName = req.params.DepartmentName
        let student_year = req.params.year
        let practical_Id = req.params.practical_Id
        console.log(departmantName)
        console.log(student_year)
        console.log(practical_Id)
        if (departmantName === 'Biotechnogoly') {
            try {
                const foundItem = await Biotechnogoly.findOne({ _id: practical_Id });
                resp.render('admin/practical', {
                    data: foundItem.quillData,
                    title: foundItem.title,
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year
                })
            } catch (err) {
                console.log(err);
            }
        } else if (departmantName === 'Physics') {
            try {
                const foundItem = await Physics.findOne({ _id: practical_Id })
                resp.render('admin/practical', {
                    data: foundItem.quillData,
                    title: foundItem.title,
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year
                })


            } catch (err) {
                console.log(err);
            }
        } else if (departmantName === 'Cybersecurity') {
            try {
                const foundItem = await Cybersecurity.findOne({ _id: practical_Id })
                resp.render('admin/practical', {
                    data: foundItem.quillData,
                    title: foundItem.title,
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year
                })
            } catch (err) {
                console.log(err);
            }
        } else if (departmantName === 'Computer Science') {
            try {
                const foundItem = await Computer_Science.findOne({ _id: practical_Id })
                resp.render('admin/practical', {
                    data: foundItem.quillData,
                    title: foundItem.title,
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year
                })
            } catch (err) {
                console.log(err);
            }
        } else if (departmantName === 'Chemistry') {
            try {
                const foundItem = await Chemistry.findOne({ _id: practical_Id })
                resp.render('admin/practical', {
                    data: foundItem.quillData,
                    title: foundItem.title,
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year
                })
            } catch (err) {
                console.log(err);
            }
        }
        else if (departmantName === 'Mathematics') {
            try {
                const foundItem = await Mathematics.findOne({ _id: practical_Id })
                resp.render('admin/practical', {
                    data: foundItem.quillData,
                    title: foundItem.title,
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year
                })
            } catch (err) {
                console.log(err);
            }
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }

})



//===============//
// EDIT PRACTICAL
//===============//
app.get('/admin/:DepartmentName/:year/:practical_Id/edit', async (req, resp) => {

    if (req.isAuthenticated()) {
        console.log(req.params)

        let departmantName = req.params.DepartmentName
        let student_year = req.params.year
        let practical_Id = req.params.practical_Id
        console.log(departmantName)
        console.log(student_year)
        console.log(practical_Id)


        if (departmantName === 'Biotechnology') {
            try {
                const foundItem = await Biotechnogoly.findOne({ _id: practical_Id, year: student_year })
                resp.render('admin/edit', {
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year,
                    title: foundItem.title,
                    discreption: foundItem.discreption,
                    data: foundItem.quillData,
                })
            } catch (err) {
                console.log(err);
            }
        }
        else if (departmantName === 'Physics') {
            try {
                const foundItem = await Physics.findOne({ _id: practical_Id, year: student_year })
                resp.render('admin/edit', {
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year,
                    title: foundItem.title,
                    discreption: foundItem.discreption,
                    data: foundItem.quillData,
                })
            } catch (err) {
                console.log(err);
            }
        }
        else if (departmantName === 'Cybersecurity') {
            try {
                const foundItem = await Cybersecurity.findOne({ _id: practical_Id, year: student_year })
                resp.render('admin/edit', {
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year,
                    title: foundItem.title,
                    discreption: foundItem.discreption,
                    data: foundItem.quillData,
                })
            } catch (err) {
                console.log(err);
            }
        }
        else if (departmantName === 'Computer-science') {
            try {
                const foundItem = await Computer_Science.findOne({ _id: practical_Id, year: student_year })
                resp.render('admin/edit', {
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year,
                    title: foundItem.title,
                    discreption: foundItem.discreption,
                    data: foundItem.quillData,
                })
            } catch (err) {
                console.log(err);
            }
        }
        else if (departmantName === 'Chemistry') {
            try {
                const foundItem = await Chemistry.findOne({ _id: practical_Id, year: student_year })
                resp.render('admin/edit', {
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year,
                    title: foundItem.title,
                    discreption: foundItem.discreption,
                    data: foundItem.quillData,
                })
            } catch (err) {
                console.log(err);
            }
        }
        else if (departmantName === 'Mathematics') {
            try {
                const foundItem = await Mathematics.findOne({ _id: practical_Id, year: student_year })
                resp.render('admin/edit', {
                    id: foundItem._id,
                    department: foundItem.department,
                    year: foundItem.year,
                    title: foundItem.title,
                    discreption: foundItem.discreption,
                    data: foundItem.quillData,
                })
            } catch (err) {
                console.log(err);
            }
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }

})



//==========================================//
// UPDATE THE DATABASE WITH EDITED PRACYICAL
//==========================================//
app.put('/admin/update-practical', async (req, resp) => {

    if (req.isAuthenticated()) {
        let practical_Id = req.body.id
        let departmantName = req.body.department
        let student_year = req.body.year
        let practical_title = req.body.title
        let practical_discription = req.body.discreption
        let practical = req.body.quillData
        if (departmantName === 'Biotechnology') {
            try {
                await Biotechnogoly.findByIdAndUpdate(practical_Id, {
                    department: departmantName,
                    year: student_year,
                    title: practical_title,
                    discreption: practical_discription,
                    quillData: practical
                })
                console.log("******updated*******")
                resp.sendStatus(200)
            }
            catch (err) {
                console.log(err)
            }
        }
        else if (departmantName === 'Physics') {
            try {
                await Physics.findByIdAndUpdate(practical_Id, {
                    department: departmantName,
                    year: student_year,
                    title: practical_title,
                    discreption: practical_discription,
                    quillData: practical
                })
                resp.sendStatus(200)
            }
            catch (err) {
                console.log(err)
            }
        }
        else if (departmantName === 'Cybersecurity') {
            try {
                await Cybersecurity.findByIdAndUpdate(practical_Id, {
                    department: departmantName,
                    year: student_year,
                    title: practical_title,
                    discreption: practical_discription,
                    quillData: practical
                })
                console.log("******updated*******")
                resp.sendStatus(200)
            }
            catch (err) {
                console.log(err)
            }
        }
        else if (departmantName === 'Computer-science') {
            try {
                await Computer_Science.findByIdAndUpdate(practical_Id, {
                    department: departmantName,
                    year: student_year,
                    title: practical_title,
                    discreption: practical_discription,
                    quillData: practical
                })
                console.log("******updated*******")
                resp.sendStatus(200)
            }
            catch (err) {
                console.log(err)
            }
        }
        else if (departmantName === 'Chemistry') {
            try {
                await Chemistry.findByIdAndUpdate(practical_Id, {
                    department: departmantName,
                    year: student_year,
                    title: practical_title,
                    discreption: practical_discription,
                    quillData: practical
                })
                console.log("******updated*******")
                resp.sendStatus(200)
            }
            catch (err) {
                console.log(err)
            }
        }
        else if (departmantName === 'Mathematics') {
            try {
                await Mathematics.findByIdAndUpdate(practical_Id, {
                    department: departmantName,
                    year: student_year,
                    title: practical_title,
                    discreption: practical_discription,
                    quillData: practical
                })
                console.log("******updated*******")
                resp.sendStatus(200)
            }
            catch (err) {
                console.log(err)
            }
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }

})



//==================//
// DELETE PRACTICAL
//==================//
app.delete('/admin/:DepartmentName/:year/:practical_Id/delete', async (req, resp) => {

    if (req.isAuthenticated()) {

        const departmantName = req.params.DepartmentName
        const id = req.params.practical_Id
        const year = req.params.year


        if (departmantName === 'Biotechnology') {
            try {
                await Biotechnogoly.findByIdAndDelete(id);
                resp.sendStatus(200);

            }
            catch (err) {
                console.log(err);
            }
        }
        if (departmantName === 'Physics') {
            try {
                await Physics.findByIdAndDelete(id)
                resp.sendStatus(202)
            }
            catch (err) {
                console.log(err);
            }
        }
        if (departmantName === 'Cybersecurity') {
            try {
                await Cybersecurity.findByIdAndDelete(id)
                resp.sendStatus(202)
            }
            catch (err) {
                console.log(err);
            }
        }
        if (departmantName === 'Computer-science') {
            try {
                await Computer_Science.findByIdAndDelete(id)
                resp.sendStatus(202)
            }
            catch (err) {
                console.log(err);
            }
        }
        if (departmantName === 'Chemistry') {
            try {
                await Chemistry.findByIdAndDelete(id)
                resp.sendStatus(202)
            }
            catch (err) {
                console.log(err);
            }
        }
        if (departmantName === 'Mathematics') {
            try {
                await Mathematics.findByIdAndDelete(id)
                resp.sendStatus(202)
            }
            catch (err) {
                console.log(err);
            }
        }
    } else {
        alert('Please Login')
        resp.redirect('/admin-login')
    }

})



app.listen(3000, () => {
    console.log('Server Running On PORT 3000')
})
