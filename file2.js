let bsalary = parseInt(prompt("Enter your bSalary"))
let benefits = parseInt(prompt("Enter your benefits"))


function calc_gSalary(bSalary , benefits){
let gSalary =(bSalary+benefits)
console.log(gSalary);
}

function calcNhif(gSalary){
if (gSalary <=5999){f
    nhif=150
}
};

if (gSalary >=6000 && gSalary<7999){
    nhif=300;
}

else if (gSalary >=8000 && gSalary<11999){
    nhif=400;
}

else if (gSalary >=12000 && gSalary<14999){
    nhif=500;
}

else if (gSalary >=15000 && gSalary<19999){
    nhif=600;
}

else if (gSalary >=20000 && gSalary<24999){
    nhif=750;
}

else if (gSalary >=25000 && gSalary<29000){
    nhif=850;
}

else if (gSalary >=30000 && gSalary<34999){
    nhif=900;
}

else if(gSalary >=35000 && gSalary<39999){
    nhif=950;
}

else if(gSalary >=40000 && gSalary<44999){
    nhif=1000;
}

else if (gSalary >=45000 && gSalary<49999){
    nhif=1100;
}

else if (gSalary >=50000 && gSalary<59999){
    nhif=1200;
}

else if(gSalary >=60000 && gSalary<69000){
    nhif=1300;
}

else if (gSalary >=70000 && gSalary<79999){
    nhif=1400;
}

else if (gSalary >=80000 && gSalary<89999){
    nhif=1500;
}

else if (gSalary >=90000 && gSalary<99999){
    nhif=1600;
}

else {
    nhif=1700;
}

console.log(nhif);