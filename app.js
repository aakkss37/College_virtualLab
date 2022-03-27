const express = require('express')
const bodyParser = require('body-parser')
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/home', (req, resp) => {
    resp.render('home')
})


app.get('/home/:departmantName', (req, resp) => {
    let departmentRequested = req.params.departmantName;
    console.log(departmentRequested)

    if (departmentRequested === "biotechnologylab") {
        resp.render('departmentLab', {
            DepartmentName: "Biotechnology and Biomedical Engineering"
        })
    }
    else if (departmentRequested === "chemistrylab") {
        resp.render('departmentLab', {
            DepartmentName: 'Chemical Science'
        })
    }
    else if (departmentRequested === "computersciencelab") {
        resp.render('departmentLab', {
            DepartmentName: 'Computer Science'
        })
    }
    else if (departmentRequested === "mechanicallab") {
        resp.render('departmentLab', {
            DepartmentName: 'Mechanical Engeneering'
        })
    }
    else if (departmentRequested === "physicslab") {
        resp.render('departmentLab', {
            DepartmentName: "Physics Lab"
        })
    }
    else if (departmentRequested === "cybersecuritylab") {
        resp.render('departmentLab', {
            DepartmentName: 'Cyber Security'
        })
    }

})


app.get('/virtuallab', (req, resp) => {
    resp.render('virtualLab')
})

app.listen(3000, () => {
    console.log('Server Running On PORT 3000')
})