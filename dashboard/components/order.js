let tbody_table = document.getElementById("tbody_table");
// Get All Data Clint
fetch("http://arinc.somee.com/api/Orders/GetAll")
    .then(response => response.json())
    .then(data => {
        getDataOrder(data);
        console.log(data);
        View();
    });
function getDataOrder(data){
    let counter = 0;
    for (let row of data) {
        let data_obj = `
            <tr>
                <td>${++counter}</td>
                <td>${row.service.name}</td>
                <td>${row.orderDate.split("T")[0]}</td>
                <td>${row.frequency.title}</td>
                <td>${row.firstName} ${row.lastName}</td>
                <td class='control'>${btn_view_order(row.id)}</td>
            </tr>
        `;
        tbody_table.innerHTML += data_obj;
        console.log("=>" + row.id)
        console.log("=>" + row.id)
    }
}

// function return btn view
function btn_view_order(id1, id2) {
    return `<button class="btn-view" id=${id1}>View</button>`;
}
// READ DATA ORDER FROM TABLE APIs
function View(){
    let btn_View = document.querySelectorAll(".btn-view");
    for (let i = 0; i < btn_View.length; i++) {
        btn_View[i].addEventListener("click", () => {
                const id1 = Number(btn_View[i].id[0]);
                const id2 = Number(btn_View[i].id[1]);
            window.location.href = `./ordernum.html?id1=${id1}`;
        });
    }
}