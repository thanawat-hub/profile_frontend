const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mysql = require("mysql2/promise");
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root', // <== ระบุให้ถูกต้อง
    password: '',  // <== ระบุให้ถูกต้อง
    database: 'pim_database',
    port: 3306  // <== ใส่ port ให้ถูกต้อง (default 3306, MAMP ใช้ 8889)
});

// Lab 3 ข้อ 1 GET students

app.get('/students', async (req,res) => {
    const connection = await dbConn
    const rows = await connection.query('SELECT * from students')
    res.send(rows)
})

// Lab 3 ข้อ 2 GET students/:id 
app.get('/students/:id', async (req,res)=>{
    const connection = await dbConn
    const rows = await connection.query('SELECT * from students where id = ' +req.params.id)
    res.send(rows)
})


app.delete("/students/:id", async (req, res) => {
    const id = req.params.id;
    const connection = await dbConn
    await connection.query('DELETE FROM students WHERE id = ' + id)
    res.status(204).send();
})
/*
{
    "name": "Oak",
    "age": 26,
    "phone": "0123456789",
    "email": "oak@gmail.com"
}
*/
app.post("/students", async (req, res) => {
    const name = req.body.name;
    const age = req.body.age;
    const phone = req.body.phone;
    const email = req.body.email;

    const connection = await dbConn
    const rows = await connection.query(`INSERT INTO students(name, age, phone, email) values ("${name}", ${age}, "${phone}", "${email}")`)
    res.status(201).send({ result: "success" });
})

app.put("/students/:id", async (req, res) => {
    const id = req.params.id;
    const name = req.body.name;
    const age = +req.body.age;
    const phone = req.body.phone;
    const email = req.body.email;

    const connection = await dbConn
    const rows = await connection.query(`UPDATE students SET name = "${name}", age = ${age}, phone = "${phone}", email = "${email}" WHERE id = ${id}`)
    res.status(201).send({ result: "update success" });
})



app.get("/query-1", async (req, res) => {
    const connection = await dbConn
    const rows = await connection.query('SELECT * from students')
    res.send(rows);
})

app.get("/query-2", async (req, res) => {
    const connection = await dbConn
    const rows = await connection.query('SELECT * from students')
    res.send(rows);
})

app.listen(3000, () => {
    console.log("Server is running at port 3000")
})
