// input the data Employees
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let address = document.getElementById("address");
let email = document.getElementById("email");
let phon = document.getElementById("phon");
let zip = document.getElementById("zip");
let pass = document.getElementById("pass");
let salary = document.getElementById("salary");
// btn save editings
let btn_save = document.getElementById("btn-save");
// get variables from linked
const urlParams = new URLSearchParams(window.location.search);
var id = Number(urlParams.get('id'));
console.log(id)
// Get data for Update
fetch(`http://arinc.somee.com/api/Employees/Get?empid=${id}`)
    .then(response => response.json())
    .then(data => {
        fname.value = `${data.firstName}`
        lname.value = `${data.lastName}`
        address.value = `${data.address}`
        email.value = `${data.email}`
        phon.value = `${data.phoneNumber}`
        zip.value = `${data.zipCode}`
        pass.value = `${data.password}`
        salary.value = `${data.salary}`
    });
//Edit data to API
btn_save.addEventListener('click', async (e) => {
    e.preventDefault();
    const data = {
        firstName: fname.value,
        lastName: lname.value,
        email: email.value,
        phoneNumber: phon.value,
        password: pass.value,
        address: address.value,
        zipCode: Number(zip.value),
        salary: Number(salary.value),
        nation: "",
        jointDate: "2022-12-12T00:00:00",
        isActive: true
    }
    await fetch(`http://arinc.somee.com/api/Employees/Update?empid=${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    window.location.href = "./editEmployee.html";
});