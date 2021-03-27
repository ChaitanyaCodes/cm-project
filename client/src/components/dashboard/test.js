const csvtojson = require('csvtojson')
const csvfilepath = 'COMPUTER ENGINEERING DEPARTMENT,AGNEL POLYTECHNIC (Feedback Form 2020-21- Third  Year) (Responses) - Copy.csv'

csvtojson()
.fromFile(csvfilepath)
.then((json)=> {
    console.log(json);
})