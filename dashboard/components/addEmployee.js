// input the data Employees
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let address = document.getElementById("address");
let email = document.getElementById("email");
let phon = document.getElementById("phon");
let zip = document.getElementById("zip");
let pass = document.getElementById("pass");
let salary = document.getElementById("salary");
// let notion = document.getElementById("notion");
// btn Add Employees
var data = new Date
var data_new = data.getFullYear() + "-" + data.getMonth() + "-" + data.getDay()
let btnAddEmp = document.getElementById("btn-add2");
btnAddEmp.addEventListener('click', (e) => {
    e.preventDefault();
    if (fname.value != "" && lname.value != "" && address.value != "" && email.value != "" && phon.value != "" && zip.value != "" && pass.value != "" && salary.value != "") {
        const data = {
            firstName: fname.value,
            lastName: lname.value,
            email: email.value,
            phoneNumber: phon.value,
            password: pass.value,
            address: address.value,
            zipCode: Number(zip.value),
            salary: Number(salary.value),
            notion: "Syrian",
            jointDate: "2023-06-30",
            isActive: false,
        };
        fetch(`https://arinc.somee.com/api/Employees/Create`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));
    }
})