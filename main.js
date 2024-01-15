var object = {
    hoTen: "",
    email: "",
    diaChi: "",
    soDienThoai: "",
    yeuCau: "",
    tenNuoc: "",
    giaTien: ""
}

$("#btn-1").on("click", function(){
    console.log("Khách hàng chọn mua nước Matcha Latte");
    $("#btn-1").removeClass("btn btn-success bg-main w-100").addClass("btn-danger bg-main w-100")
    $("#btn-2").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-3").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-4").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-5").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-6").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-7").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-8").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-9").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    object.tenNuoc = "Matcha Latte";
    object.giaTien = "45.000VND";
})

$("#btn-2").on("click", function(){
    console.log("Khách hàng chọn mua nước Capuchino");
    $("#btn-2").removeClass("btn btn-success bg-main w-100").addClass("btn-danger bg-main w-100")
    $("#btn-1").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-3").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-4").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-5").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-6").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-7").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-8").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-9").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    object.tenNuoc = "Capuchino";
    object.giaTien = "40.000VND";
})

$("#btn-3").on("click", function(){
    console.log("Khách hàng chọn mua nước Cafe Espresso");
    $("#btn-3").removeClass("btn btn-success bg-main w-100").addClass("btn-danger bg-main w-100")
    $("#btn-2").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-1").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-4").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-5").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-6").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-7").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-8").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-9").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    object.tenNuoc = "Cafe Espresso";
    object.giaTien = "33.000VND";
})

$("#btn-4").on("click", function(){
    console.log("Khách hàng chọn mua nước Lychee Black Tea");
    $("#btn-4").removeClass("btn btn-success bg-main w-100").addClass("btn-danger bg-main w-100")
    $("#btn-2").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-3").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-1").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-5").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-6").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-7").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-8").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-9").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    object.tenNuoc = "Lychee Black Tea";
    object.giaTien = "47.000VND";
})

$("#btn-5").on("click", function(){
    console.log("Khách hàng chọn mua nước Lotus Tea");
    $("#btn-5").removeClass("btn btn-success bg-main w-100").addClass("btn-danger bg-main w-100")
    $("#btn-2").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-3").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-4").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-1").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-6").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-7").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-8").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-9").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    object.tenNuoc = "Lotus Tea";
    object.giaTien = "47.000VND";
})

$("#btn-6").on("click", function(){
    console.log("Khách hàng chọn mua nước Apple Juice");
    $("#btn-6").removeClass("btn btn-success bg-main w-100").addClass("btn-danger bg-main w-100")
    $("#btn-2").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-3").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-4").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-5").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-1").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-7").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-8").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-9").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    object.tenNuoc = "Apple Juice";
    object.giaTien = "40.000VND";
})
$("#btn-7").on("click", function(){
    console.log("Khách hàng chọn mua nước Lemon Smoothie");
    $("#btn-7").removeClass("btn btn-success bg-main w-100").addClass("btn-danger bg-main w-100")
    $("#btn-2").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-3").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-4").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-5").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-6").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-1").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-8").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-9").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    object.tenNuoc = "Lemon Smoothie";
    object.giaTien = "45.000VND";
})
$("#btn-8").on("click", function(){
    console.log("Khách hàng chọn mua nước Orange Juice");
    $("#btn-8").removeClass("btn btn-success bg-main w-100").addClass("btn-danger bg-main w-100")
    $("#btn-2").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-3").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-4").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-5").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-6").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-7").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-1").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-9").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    object.tenNuoc = "Orange Juice";
    object.giaTien = "40.000VND";
})
$("#btn-9").on("click", function(){
    console.log("Khách hàng chọn mua nước Avocado Smoothie");
    $("#btn-9").removeClass("btn btn-success bg-main w-100").addClass("btn-danger bg-main w-100")
    $("#btn-2").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-3").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-4").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-5").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-6").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-7").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-8").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    $("#btn-1").removeClass("btn-danger  bg-main w-100").addClass("btn btn-success bg-main w-100")
    object.tenNuoc = "Avocado Smoothie";
    object.giaTien = "45.000VND";
})
$("#btn-0").on("click", function(){
    console.log(object)
    alert("Thanh toán thành công!")
    $("#btn-0").removeClass("btn-success").addClass("btn-warning")
})

$("#btn-send").on("click", function(){
    object.hoTen = document.getElementById("inp-hoTen").value
    object.email = document.getElementById("inp-email").value
    object.soDienThoai = document.getElementById("inp-soDienThoai").value
    object.diaChi = document.getElementById("inp-diaChi").value
    object.yeuCau = document.getElementById("inp-yeuCau").value
    console.log(object)
    alert("Đặt hàng thành công!")
    $("#btn-send").removeClass("btn-success").addClass("btn-warning")
})