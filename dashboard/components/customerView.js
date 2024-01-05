// variables for the tbody_table
let tbody_table = document.getElementById("tbody_table");
// variables for the data clint 1
let em_clint = document.getElementById("email-clint");
let ph_clint = document.getElementById("phon-clint");
let ad_clint = document.getElementById("address-clint");
// variables for the data clint 2
let zipCode = document.getElementById("zip-code");
let countOrder = document.getElementById("count-order");
let status_clint = document.getElementById("status");
// get variable from url
const urlParams = new URLSearchParams(window.location.search);
let id = Number(urlParams.get('id'));
console.log(id);
fetch(`http://arinc.somee.com/api/Orders/GetClientOrders?clientId=${id}`)
    .then(response => response.json())
    .then(data => {
        getDataClint(data);
        console.log(data);
        for (row of data) {
            em_clint.innerHTML = row.client.email
            ph_clint.innerHTML = row.client.phoneNumber
            ad_clint.innerHTML = row.client.address
            zipCode.innerHTML = row.client.zipCode
            countOrder.innerHTML = data.length
            status_clint.innerHTML = (row.client.isActive == true ? "Active" : "Not Active")
        }
    })
// function get data Clint
function getDataClint(data) {
    let counter = 0
    for (let row of data) {
        let data_obj = `
            <tr>
                <td>${++counter}</td>
                <td>${row.service === null ? 'no service' : row.service.name}</td>
                <td>${row.orderDate.split("T")[0]} ${row.arrivalTime}</td>
                <td>${row.frequency === null ? "no frequency" : row.frequency.title}</td>
                <td>${row.notes}</td>
            </tr>
        `;
        tbody_table.innerHTML += data_obj;
    }
}