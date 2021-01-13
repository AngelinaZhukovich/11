const express = require('express');
const app = express();
const { Client } = require('pg')


const client = new Client({
    connectionString: 'postgres://lnbsqlueizjals:bc14e6742886df26d18b37f0f511840b38b0d28f4973c25149110d661d9d01eb@ec2-34-252-98-12.eu-west-1.compute.amazonaws.com:5432/dd77nbv8psis3a',
    ssl: { rejectUnauthorized: false }
   });

  client.connect(err => {
    if (err) {
      console.error('connection error', err.stack)
    } else {
      console.log('connected')
      client.query(`INSERT INTO Persons (lastname, firstname)
      VALUES ('john', 'Doe');`,
    (err, res) => {
        if (err) {
             console.log(err)
        } else {
            console.log(res);
        }

    }
)
    }
  })


app.use(express.static('dist'));

app.get('/', function(req, res){
    res.send('Hello');
});




app.listen(3000, function() {
    console.log('sucess');
});