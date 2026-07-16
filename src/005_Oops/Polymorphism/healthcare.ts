class Hospital{

    generateReport(){
        console.log("Generating report for hospital");
    }
}

class Doctor extends Hospital{

    generateReport(){
        console.log("Doctor generating report");
    }
}

class Loboratory extends Hospital{

    generateReport(){
        console.log("Loboratory generating report");
    }
}


class Pharmacy extends Hospital{

    generateReport(){
        console.log("Pharmacy generating report");
    }
}

// object Cre

const doctor = new Doctor();

const lab = new Loboratory();

const pharmacy = new Pharmacy();

doctor.generateReport();
lab.generateReport();
pharmacy.generateReport();