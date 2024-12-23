const express = require('express');
const bodyParser = require('body-parser'); // บอก server จะใช้ body-parser === import in python ต้อง npm i {name_lib}

const app = express();
app.use(bodyParser.urlencoded({extended:true})); // เริ่มให้ app เราใช้ body-parser

app.get("/", (req, res)=>{ //ดึงข้อมูล (Retrieve data) จากเซิร์ฟเวอร์
   res.sendFile(__dirname + "/index.html");//ส่งหน้าบ้านที่เราเขียนไป งั้นหน้าบ้านต้องก็มี method post ในการ ส่งค่าไปยัง server
} );

app.post("/", (req, res)=>{ //ส่งข้อมูล (Create or Update data) ไปยังเซิร์ฟเวอร์
   console.log(req.body);//เพื่อให้ debug req ได้
   res.send("The calculate is :" + (parseInt(req.body.num1, 10) + parseInt(req.body.num2, 10)));
} );


app.listen(3002, ()=> {
   console.log ("Server is running on port 3002");
});

