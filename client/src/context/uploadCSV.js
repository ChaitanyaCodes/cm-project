const csvtojson = require('csvtojson')
const paths = ['../assets/csvFiles/aca.csv','../assets/csvFiles/cg.csv','../assets/csvFiles/cl.csv', '../assets/csvFiles/sw.csv','../assets/csvFiles/nw.csv']

for(let path of paths){
    csvtojson()
    .fromFile(path)
    .then((json)=>{
        // ACA Array
        var arrACAQ1 = [];
        var arrACAQ2 = [];
        var arrACAQ3 = [];
        var arrACAQ4 = [];
        var arrACAQ5 = [];
        var arrACAQ6 = [];
        var arrACAQ7 = [];
        var arrACAQ8 = [];
        var arrACAQ9 = [];
        var arrACAQ10 = [];
        var arrACAQ11 = [];
        var arrACAQ12 = [];
        // CG Array
        var arrCGQ1 = [];
        var arrCGQ2 = [];
        var arrCGQ3 = [];
        var arrCGQ4 = [];
        var arrCGQ5 = [];
        var arrCGQ6 = [];
        var arrCGQ7 = [];
        var arrCGQ8 = [];
        var arrCGQ9 = [];
        var arrCGQ10 = [];
        var arrCGQ11 = [];
        var arrCGQ12 = [];
        // CLab Array
        var arrCLQ1 = [];
        var arrCLQ2 = [];
        var arrCLQ3 = [];
        var arrCLQ4 = [];
        var arrCLQ5 = [];
        var arrCLQ6 = [];
        var arrCLQ7 = [];
        var arrCLQ8 = [];
        var arrCLQ9 = [];
        var arrCLQ10 = [];
        var arrCLQ11 = [];
        var arrCLQ12 = [];
        // S/W array
        var arrSWQ1 = [];
        var arrSWQ2 = [];
        var arrSWQ3 = [];
        var arrSWQ4 = [];
        var arrSWQ5 = [];
        var arrSWQ6 = [];
        var arrSWQ7 = [];
        var arrSWQ8 = [];
        var arrSWQ9 = [];
        var arrSWQ10 = [];
        var arrSWQ11 = [];
        var arrSWQ12 = [];
        // N/W array
        var arrNWQ1 = [];
        var arrNWQ2 = [];
        var arrNWQ3 = [];
        var arrNWQ4 = [];
        var arrNWQ5 = [];
        var arrNWQ6 = [];
        var arrNWQ7 = [];
        var arrNWQ8 = [];
        var arrNWQ9 = [];
        var arrNWQ10 = [];
        var arrNWQ11 = [];
        var arrNWQ12 = [];
        const sanjeet = "Sanjeet Kanekar";
        const radhika = "Radhika Prabhu";
        const sanskruti = "Sanskruti Naik";
        const swizel = "Swizel Fernandes";
        const savio = "Savio DeSouza";
        var c1 = 0;
        var c2 = 0;
        var c3 = 0;
        var c4 = 0;
        var c5 = 0;
        json.forEach(obj => {
            if(obj.TeacherName === sanjeet){
                arrACAQ1[c1] = obj.Q1;
                arrACAQ2[c1] = obj.Q2;
                arrACAQ3[c1] = obj.Q3;
                arrACAQ4[c1] = obj.Q4;
                arrACAQ5[c1] = obj.Q5;
                arrACAQ6[c1] = obj.Q6;
                arrACAQ7[c1] = obj.Q7;
                arrACAQ8[c1] = obj.Q8;
                arrACAQ9[c1] = obj.Q9;
                arrACAQ10[c1] = obj.Q10;
                arrACAQ11[c1] = obj.Q11;
                arrACAQ12[c1] = obj.Q12;
                c1++;
            }
            if(obj.TeacherName === radhika){
                arrCGQ1[c2] = obj.Q1;
                arrCGQ2[c2] = obj.Q2;
                arrCGQ3[c2] = obj.Q3;
                arrCGQ4[c2] = obj.Q4;
                arrCGQ5[c2] = obj.Q5;
                arrCGQ6[c2] = obj.Q6;
                arrCGQ7[c2] = obj.Q7;
                arrCGQ8[c2] = obj.Q8;
                arrCGQ9[c2] = obj.Q9;
                arrCGQ10[c2] = obj.Q10;
                arrCGQ11[c2] = obj.Q11;
                arrCGQ12[c2] = obj.Q12;
                c2++;
            }
            if(obj.TeacherName === sanskruti){
                arrCLQ1[c3] = obj.Q1;
                arrCLQ2[c3] = obj.Q2;
                arrCLQ3[c3] = obj.Q3;
                arrCLQ4[c3] = obj.Q4;
                arrCLQ5[c3] = obj.Q5;
                arrCLQ6[c3] = obj.Q6;
                arrCLQ7[c3] = obj.Q7;
                arrCLQ8[c3] = obj.Q8;
                arrCLQ9[c3] = obj.Q9;
                arrCLQ10[c3] = obj.Q10;
                arrCLQ11[c3] = obj.Q11;
                arrCLQ12[c3] = obj.Q12;
                c3++;
            }
            if(obj.TeacherName === swizel){
                arrSWQ1[c4] = obj.Q1;
                arrSWQ2[c4] = obj.Q2;
                arrSWQ3[c4] = obj.Q3;
                arrSWQ4[c4] = obj.Q4;
                arrSWQ5[c4] = obj.Q5;
                arrSWQ6[c4] = obj.Q6;
                arrSWQ7[c4] = obj.Q7;
                arrSWQ8[c4] = obj.Q8;
                arrSWQ9[c4] = obj.Q9;
                arrSWQ10[c4] = obj.Q10;
                arrSWQ11[c4] = obj.Q11;
                arrSWQ12[c4] = obj.Q12;
                c4++;
            }
            if(obj.TeacherName === savio){
                arrNWQ1[c5] = obj.Q1;
                arrNWQ2[c5] = obj.Q2;
                arrNWQ3[c5] = obj.Q3;
                arrNWQ4[c5] = obj.Q4;
                arrNWQ5[c5] = obj.Q5;
                arrNWQ6[c5] = obj.Q6;
                arrNWQ7[c5] = obj.Q7;
                arrNWQ8[c5] = obj.Q8;
                arrNWQ9[c5] = obj.Q9;
                arrNWQ10[c5] = obj.Q10;
                arrNWQ11[c5] = obj.Q11;
                arrNWQ12[c5] = obj.Q12;
                c5++;
            }
            if(c1>=10){
                console.log("ACA Array",arrACAQ1,arrACAQ2,arrACAQ3,arrACAQ4,arrACAQ5,arrACAQ6,arrACAQ7,arrACAQ8,arrACAQ9,arrACAQ10,arrACAQ11,arrACAQ12);  
            }
            if(c2>=5){
                console.log("CG Array",arrCGQ1,arrCGQ2,arrCGQ3,arrCGQ4,arrCGQ5,arrCGQ6,arrCGQ7,arrCGQ8,arrCGQ9,arrCGQ10,arrCGQ11,arrCGQ12);
            }    
            if(c3>=5){
                console.log("CL Array",arrCLQ1,arrCLQ2,arrCLQ3,arrCLQ4,arrCLQ5,arrCLQ6,arrCLQ7,arrCLQ8,arrCLQ9,arrCLQ10,arrCLQ11,arrCLQ12);    
            }
            if(c4>=10){
                console.log("SW Array",arrSWQ1,arrSWQ2,arrSWQ3,arrSWQ4,arrSWQ5,arrSWQ6,arrSWQ7,arrSWQ8,arrSWQ9,arrSWQ10,arrSWQ11,arrSWQ12);    
            }
            if(c5>=10){
                console.log("NW Array",arrNWQ1,arrNWQ2,arrNWQ3,arrNWQ4,arrNWQ5,arrNWQ6,arrNWQ7,arrNWQ8,arrNWQ9,arrNWQ10,arrNWQ11,arrNWQ12); 
            }
        }); 
    })
}
