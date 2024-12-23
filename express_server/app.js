const express = require('express');
const app = express();

app.get('/', (req, res) => {
 res.send('This is index page.');
});

app.get('/my-json-api', (req, res) => {
  res.send('{"myJsonKey": "myJSONValue"}');
});

app.get('/my-html', (req, res) => {
  res.send('<h1> This is normal HTML</h1>');
});

app.get('/my-json-api2', (req, res) => { //ไม่มี ' ครอบ และแก้เป็น json
   res.json({"myJsonKey": "myJsonValue"});
});


app.listen(3001, () => {
 console.log('server started on port 3001!');
});


