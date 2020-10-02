var TotalPay = 0;
var SelectedCardPrice;
var CartInfo = "";
var CartShown = false;



var Login;
var ProductName;
var Price;
var photoLink;
var discount;
var display;

var AccountName;
var LoggedIN;



var calllog;
var display = true;
var SubMenu = false;


function GoHome() {
    window.location.assign("index.html");
    OrganizeNavBar();
}

function GoCasual() {
    window.location.assign("Casual.html");
    OrganizeNavBar();
}

function GoFormal() {
    window.location.assign("Formal.html");
    OrganizeNavBar();
}

function GoCollections() {
    window.location.assign("Clothes Template.html");
    OrganizeNavBar();
}

function GoAccessories() {
    window.location.assign("Accessories.html");
    OrganizeNavBar();
}

function SingFuckenIn() {
    AccountName = document.getElementById("uname").value;
    LoggedIN = true;
    Lundisplay();
    OrganizeNavBar();
}

function SignFuckenOut() {
    LoggedIN = false;
    Lundisplay();
    OrganizeNavBar();
    document.getElementsByClassName("Admin")[0].style.display = "none";
}

function ShowCart() {
    if (!CartShown) {
        document.getElementById("Right-Content").style.marginRight = "0";
        document.getElementById("Right-Content").style.visibility = "visible";
        document.getElementById("FloatingShoppingCart").style.display = "none";

    } else {
        document.getElementById("Right-Content").style.marginRight = "-200px";
        document.getElementById("Right-Content").style.visibility = "visible";
        document.getElementById("FloatingShoppingCart").style.display = "flex";
    }
    CartShown = !CartShown;
}

function AddToCart() {
    for (var i = 0; i < document.getElementsByClassName("Cart_Counter").length; i++) {
        document.getElementsByClassName("Cart_Counter")[i].innerHTML -= -1;
    }
    TotalPay -= -(event.target.children[0].innerHTML);
    CartInfo += "<div onclick=\"RemoveFromCart()\"> <span class=\"CartProductName\"> " + event.target.children[1].innerHTML + "&nbsp; &nbsp; &nbsp;" + event.target.children[0].innerHTML + "$<span class=\"ChoosedItemHiddenInfo\"> " + event.target.children[0].innerHTML + "</span></div>";
    document.getElementById("CartRecipt").innerHTML = CartInfo;
    document.getElementById("TotalPay").innerHTML = "&nbsp;" + TotalPay + "$";
}

function RemoveFromCart() {
    TotalPay -= event.target.children[0].innerHTML;
    event.target.innerHTML = "";
    CartInfo = document.getElementById("CartRecipt").innerHTML;
    for (var i = 0; i < document.getElementsByClassName("Cart_Counter").length; i++) {
        document.getElementsByClassName("Cart_Counter")[i].innerHTML--;
    }
    document.getElementById("TotalPay").innerHTML = "&nbsp;" + TotalPay + "$";
}

function Ldisplay() {
    Login = document.getElementById("Login");
    Login.style.display = "block";
    OrganizeNavBar();
}

function Lundisplay() {
    document.getElementById("Login").style.display = "none";
}

function Eundisplay() {
    document.getElementById("EDIT").style.display = "none";
}

function Bundisplay() {
    document.getElementById("Buy").style.display = "none";
}

function OpenEdit() {
    var Edit = document.getElementById("EDIT");
    Edit.style.display = "block";

}

function BuyNow() {
    document.getElementById("Buy").style.display = "block";
}

function GoContact() {
    window.location.assign("contact us.html");
}

function RegEditAcc() {
    if (event.target.innerHTML == "Register") {
        window.location.assign("Register.html")

    } else if (event.target.innerHTML == "EDIT PAGE") {
        document.getElementsByClassName("Admin")[0].style.display = "block";

    }
}

function ADD() {
    ProductName = document.getElementById("ProductName").value;
    Price = document.getElementById("Price").value;
    photoLink = document.getElementById("photoLink").value;
    discount = document.getElementById("discount").value;
    document.getElementById("ClothesContainer").innerHTML += "<div class=\"Product_Card\">   <img src=\"" + photoLink + "\" alt=\"" + ProductName + "\" class=\"Product_Image\">" + (discount >= "1" ? "<img src=\"Discount.png\" alt=\"Discount\" class=\"Discount_Image\">" : "") +
        "<div class=\"Text_Above_Image_Container\"> <div class=\"Text_Above_Image\">" + ProductName + "</div>" + " <div class=\"Product_Details\">" +
        (discount >= "1" ? ("<span class=\"Before_Discount_Price\">" + Price + "</span>" + "<span class=\"Price\">" + (Price - discount) + "$</span>") : ("<span class=\"Price\">" + Price + "$</span>")) +
        "<button class=\"Add_To_Cart\" onclick=\"AddToCart()\">Add to cart <span class=\"ChoosedItemHiddenInfo\">" + (discount >= "1" ? (Price - discount) : Price) + "</span><span class=\"ChoosedItemHiddenInfo\">" + ProductName + "</span></button>" +
        "</div></div></div>";
    document.getElementsByClassName("Admin")[0].replaceWith("");
    document.getElementById("ClothesContainer").innerHTML += "<div class=\"Admin Product_Card\" onclick=\"OpenEdit()\"><img src=\"ADD.png\" alt=\"ADD\" class=\"Product_Image\" id=\"ADD_Image\" onclick=\"Ldisplay()\"></div>";
    Lundisplay();
}



function callmenu() {
    var call = document.getElementById("store-dropdown");
    if (!SubMenu) {
        call.style.opacity = 1;
        call.style.visibility = "visible";
        call.style.height = "20px";

    } else {
        call.style.opacity = 0;
        call.style.visibility = "hidden";
        call.style.height = "0";
    }
    SubMenu = !SubMenu;
}

function logORreg() {
    if (display == true) {
        console.warn("true");
        calllog.style.display = "block";
        calllog.style.opacity = 1;
        display = false;
    } else {
        console.warn("false");

        calllog.style.display = "none";
        calllog.style.opacity = 0;
        display = true;
    }
}




function OrganizeNavBar() {
    if (LoggedIN) {

        document.getElementById("Username").innerHTML = "Howdy, " + AccountName;
        if (AccountName == "Admin") {
            document.getElementById("Register").innerHTML = "EDIT PAGE";
            document.getElementById("LoggedIn").style.display = "block";
            document.getElementById("LoggedOut").style.display = "none";

        } else {
            document.getElementById("Register").innerHTML = "Account";
            document.getElementById("LoggedIn").style.display = "block";
            document.getElementById("LoggedOut").style.display = "none";
        }
    } else {
        document.getElementById("Register").innerHTML = "Register";
        document.getElementById("LoggedIn").style.display = "none";
        document.getElementById("LoggedOut").style.display = "block";
    }

}