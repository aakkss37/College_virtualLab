const express = require('express')
const bodyParser = require('body-parser')
const ejs = require("ejs");
const mongoose = require('mongoose')
const _ = require('lodash')
const res = require('express/lib/response');


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(bodyParser.json())






mongoose.connect("mongodb+srv://admin:admin123@cluster0.khkmp.mongodb.net/karpagam_virtual_lab", { useUnifiedTopology: true, useNewUrlParser: true })

const practicalSchema = {
    department: String,
    year: String,
    title: String,
    discreption: String,
    quillData: Object,
}

const Biotechnogoly = mongoose.model('Biotechnogoly', practicalSchema)
const Physics = mongoose.model('Physics', practicalSchema)
const Cybersecurity = mongoose.model('Cybersecurity', practicalSchema)
const Computer_Science = mongoose.model('Computer_Science', practicalSchema)
const Chemistry = mongoose.model('Chemistry', practicalSchema)
const Mathematics = mongoose.model('Mathematics', practicalSchema)





// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //
// ! *************************************************** //





//  **********CLIENT SIDE************  //

app.get('/home', (req, resp) => {
    resp.render('client/home')
})

app.get('/virtuallab', (req, resp) => {
    resp.render('client/virtualLab')
})

app.get('/student_login', (req, resp) => {
    resp.render('client/student_login')
})
app.get('/home/about', (req, resp)=>{
    resp.render('client/about')
})



// FETCHING DATA FROM DATABASE AND SHOWING EACH DEPARTMENT AND YEAR SEPARATELY

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





// GETTING PERTICULAR PRACTICAL BY SEARCHING ID.
app.get('/home/:DepartmentName/:year/:practical_Id', async (req, resp) => {

    let departmantName = req.params.DepartmentName
    let student_year = req.params.year
    let practical_Id = req.params.practical_Id
    console.log(departmantName)
    console.log(student_year)
    console.log(practical_Id)
    if (departmantName === 'Biotechnogoly') {
        try {
            const foundItem = await Biotechnogoly.findOne({ _id: practical_Id})
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




//  **********ADMIN SIDE***********  //

app.get('/admin-login', (req, resp) => {
    resp.render('admin/admin-login')
})

app.get('/admin/virtuallab', (req, resp) => {
    resp.render('admin/virtualLab')
})

app.get('/admin/compose', (req, resp) => {
    resp.render('admin/compose')
})

app.get('/admin/about', (req, resp) => {
    resp.render('admin/about')
})




// COMPOSEING NEW PRECTICAL
app.post('/admin/compose', async (req, resp) => {
    let departmantName = req.body.department;
    console.log(departmantName)

    if (departmantName === 'Biotechnology'){
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
    // resp.redirect('/client/departmentlab')
})




// FETCHING DATA FROM DATABASE AND SHOWING EACH DEPARTMENT AND YEAR SEPARATELY
app.get('/admin/virtual-lab/biotechnology/:year', async (req, resp) => {

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

})
app.get('/admin/virtual-lab/physics/:year', async (req, resp) => {

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

})
app.get('/admin/virtual-lab/mathematics/:year', async (req, resp) => {

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

})
app.get('/admin/virtual-lab/cybersecurity/:year', async (req, resp) => {

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

})
app.get('/admin/virtual-lab/computer-science/:year', async (req, resp) => {

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

})
app.get('/admin/virtual-lab/chemistry/:year', async (req, resp) => {

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

})




// GETTING PERTICULAR PRACTICAL BY SEARCHING ID.
app.get('/admin/:DepartmentName/:year/:practical_Id', async (req, resp) => {

    let departmantName = req.params.DepartmentName
    let student_year = req.params.year
    let practical_Id = req.params.practical_Id
    console.log(departmantName)
    console.log(student_year)
    console.log(practical_Id)
    if (departmantName === 'Biotechnogoly') {
        try {
           const foundItem = await Biotechnogoly.findOne({ _id: practical_Id});
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

})




// EDIT PRACTICAL
app.get('/admin/:DepartmentName/:year/:practical_Id/edit', async(req, resp)=>{

    console.log(req.params)

    let departmantName = req.params.DepartmentName
    let student_year = req.params.year
    let practical_Id = req.params.practical_Id
    console.log(departmantName)
    console.log(student_year)
    console.log(practical_Id)


    if (departmantName === 'Biotechnology') {
        // console.log('department is : Biotechnology')
        try {
            const foundItem =  await Biotechnogoly.findOne({ _id: practical_Id, year: student_year })
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
            const foundItem =  await Physics.findOne({ _id: practical_Id, year: student_year })
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
            const foundItem =  await Cybersecurity.findOne({ _id: practical_Id, year: student_year })
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
            const foundItem =  await Computer_Science.findOne({ _id: practical_Id, year: student_year })
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
            const foundItem =  await Chemistry.findOne({ _id: practical_Id, year: student_year })
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
            const foundItem =  await Mathematics.findOne({ _id: practical_Id, year: student_year })
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
    
})




// UPDATE THE DATABASE WITH EDITED PRACYICAL
app.put('/admin/update-practical', async(req, resp)=>{
    let practical_Id = req.body.id
    let departmantName = req.body.department
    let student_year = req.body.year
    let practical_title = req.body.title
    let practical_discription = req.body.discreption
    let practical = req.body.quillData
    // console.log(req.body)
    if (departmantName === 'Biotechnology'){
        try{
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
        catch(err){
            console.log(err)
        }
    }
    else if (departmantName === 'Physics'){
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

})




// DELETE PRACTICAL
app.delete('/admin/:DepartmentName/:year/:practical_Id/delete', async (req, resp) => {
    // console.log(req.params)
    const departmantName = req.params.DepartmentName
    const id = req.params.practical_Id
    const year = req.params.year

    // await PracticlesSchema.find({ _id: id});
    // resp.sendStatus(200);
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

})



app.listen(3000, () => {
    console.log('Server Running On PORT 3000')
})
