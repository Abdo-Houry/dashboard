// variables for the tbody_table
let tbody_table = document.getElementById("tbody_table");
// Get All Data Clint
fetch("http://arinc.somee.com/api/Clients/GetAll")
    .then(response => response.json())
    .then(data => {
        getDataClint(data);
        View();
        console.log(data);
    })
// function get data Clint
function getDataClint(data) {
    for (let row of data) {
        let data_obj = `
            <tr>
                <td>${row.firstName}</td>
                <td>${row.lastName}</td>
                <td>${row.email}</td>
                <td>${row.isActive == true ? "Active" : "Not Active"}</td>
                <td class='control'>${btn_view(row.id)}</td>
            </tr>
        `;
        tbody_table.innerHTML += data_obj;
    }
}
// function return btn view
function btn_view(id) {
    return `<button class="btn-view" id=${id}>View</button>`;
}
// READ DATA CLINT FROM TABLE APIs
function View(){
    let btn_View = document.querySelectorAll(".btn-view");
    for (let i = 0; i < btn_View.length; i++) {
        btn_View[i].addEventListener("click", () => {
            const id = Number(btn_View[i].id);
            window.location.href = `./customerView.html?id=${id}`;
        });
    }
}