// get variable from url
const urlParams = new URLSearchParams(window.location.search);
// let id_clint = Number(urlParams.get('id1'));
let id_order = Number(urlParams.get('id1'));
// console.log("clint =>" + id_clint);
// console.log("order =>" + id_order);
// variable data the clint
let f_name = document.getElementById("f-name");
let l_name = document.getElementById("l-name");
let e_mail = document.getElementById("e-mail");
let p_one = document.getElementById("p_one");
let a_ddress = document.getElementById("a_ddress");
// Get All Data Clint
fetch(`https://arinc.somee.com/api/Orders/Get?OrderId=${id_order}`)
    .then(response => response.json())
    .then(data => {
        console.log(data.client)
        f_name.innerHTML = data.firstName
        l_name.innerHTML = data.lastName
        e_mail.innerHTML = data.email
        p_one.innerHTML = data.phoneNumber
        a_ddress.innerHTML = data.address
    });
// variable data the order fro clint
let s_name = document.getElementById("s-name");
let frequency = document.getElementById("frequency");
let dateTime = document.getElementById("dateTime");
var data_order = document.getElementById("data-order_and_clint");
var swiper_wrapper = document.getElementById("swiper-wrapper");
var move_pageToEmp = document.getElementById("move-page");
// Get All Data Order
fetch(`https://arinc.somee.com/api/Orders/Get?OrderId=${id_order}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        s_name.innerHTML = data.service.name;
        frequency.innerHTML = data.frequency === null ? "no frequency" : "data.frequency";
        dateTime.innerHTML = `${data.bookings[0].bookingDate.split("T")[0]} ${data.arrivalTime}`;
        // console.log(data.needToBeDones.length)
        for (row of data.needToBeDones) {
            let div = document.createElement("div");
            div.className = "data_order";
            let h3 = document.createElement("h3");
            h3.innerHTML = `${row.name } :`
            div.appendChild(h3);
            let span = document.createElement("span");
            span.innerHTML = `${(row.option)}`
            div.appendChild(span);
            data_order.appendChild(div)
        }
        let h3_Extra = document.createElement("h3");
        h3_Extra.innerHTML = "Extras :";
        data_order.appendChild(h3_Extra)
        for (row of data.extras) {
            let div = document.createElement("div");
            div.className = "swiper-slide";
            div.style = "max-width: 100px !important";
            let div_img = document.createElement("div");
            let img = document.createElement("img");
            img.src = "../img/team-3.jpg"
            img.alt = "Loading...";
            div_img.appendChild(img)
            div.appendChild(div_img);
            let p = document.createElement("p");
            p.innerHTML = row.name
            div.appendChild(p)
            let span = document.createElement("span");
            span.innerHTML = `X(${row.count})`
            div.appendChild(span)
            swiper_wrapper.appendChild(div);
        }
        if(data.employee == null){
            move_pageToEmp.innerHTML = "Assigned to employee";
            move_pageToEmp.href=`./assigToemp.html?id=${id_order}&bookDate=${data.bookings[0].bookingDate.split("T")[0]}`;
        }else{
            move_pageToEmp.innerHTML = data.employee.firstName + data.employee.lastName;
            move_pageToEmp.href = "#"
            move_pageToEmp.className = "move-page_no"
        }
    });
