// get variable from url
const urlParams = new URLSearchParams(window.location.search);
let id_order = Number(urlParams.get('id'));
let id_bookDate = urlParams.get('bookDate');
console.log(id_order + "=> order");
console.log(id_bookDate + "=> bookDate");
let tbody_table = document.getElementById("tbody_table");
// get API availability 
fetch(`https://arinc.somee.com/api/Employees/GetAvailableEmployees?book=${id_bookDate}`)
    .then(response => response.json())
    .then(data => {
        getDataEmp(data);
        console.log(data)
        updateEmployee();
    })
// function get data Employees
function getDataEmp(data) {
    for (let row of data) {
        let data_obj = `
            <tr>
                <td>${row.firstName} ${row.lastName}</td>
                <td>${row.address}</td>
                <td>${row.email}</td>
                <td>${row.zipCode}</td>
                <td>${row.phoneNumber}</td>
                <td>${btn_assignment(row.id, id_order)}</td>
            </tr>
        `;
        tbody_table.innerHTML += data_obj;
    }
}
// function get btn Assignment
function btn_assignment(id_emp, id_order) {
    return `
    <button class=btn_assignment id='up_emp' data-id1=${id_emp} data-id2=${id_order}> Assignment
    </button>
    `;
}
function updateEmployee() {
    let up_emp = document.querySelectorAll("#up_emp");
    up_emp.forEach(function (button) {
        button.addEventListener("click", function () {
            var id1 = this.getAttribute("data-id1");
            var id2 = this.getAttribute("data-id2");
            console.log("data-id1: " + id1);
            console.log("data-id2: " + id2);
            fetch(`https://arinc.somee.com/api/Employees/AssignTask?employeeid=${id1}&orderid=${id2}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.error(error));
        });
    });
}


