//and nodemon ในการ relode เวลาแก้ code
const express = require('express');
const mysql = require('mysql2');
const app = express();

app.get('/students', (req, res) => {
 const connection = mysql.createConnection({ // ทำการติดต่อกับฐานข้อมูล
   host: 'localhost',//ถ้าใช้จาก XAMPP แล้วแก้ port ของ ServerName ก็ต้องแก้ port ให้ตรงด้วย เช่น localhost:8080 ที่ตรงนี้ ถ้าแก้ใน conf
   user: 'root',
   password: '',
   database: 'student_database',
 });

 // เปิด connection ไปที่ database
 connection.connect();

 connection.query('SELECT * from students', (err, rows, fields) => {
   if (err) throw err;

   // return response กลับไปหา client โดยแปลง record เป็น json array
   res.json(rows);
 });

 // ปิด connection
 connection.end();
});

app.listen(3003, () => {
 console.log('server started on port 3003!');
});
