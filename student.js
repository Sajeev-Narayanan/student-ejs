const express = require('express')
const app =express()
const path = require('path');
const redditData = require('./data.json');


app.set('view engine','ejs')
app.set('views', path.join(__dirname, 'views'));

app.listen(3080)

app.use(express.static('public'))



app.get('/' , (req,res) => {
    const heading=['NAME','BATCH','DOMAIN','CONTACT','PHOTO']
    const data = redditData.student.details
    res.render('stud',{heading,data})
    
})