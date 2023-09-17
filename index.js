let capitalize = document.querySelector(".Capitalize");
let uppercase = document.querySelector(".UpperCase");
let lowercase = document.querySelector(".LowerCase");
let para = document.querySelector(".para");


function Capitalize_Case() {
    let string = para.textContent;
    let breakstring = string.split(" ");
    for (let i = 0; i < breakstring.length; i++) {
        let code = breakstring[i];
        let getcode = code.charAt(0).toUpperCase() + code.slice(1);
        breakstring[i] = getcode;
    }
    let joinstring = breakstring.join(" ");
    return joinstring;
}

capitalize.addEventListener("click", function () {
    para.innerHTML = Capitalize_Case()
})

function Upper_Case() {
    let string = para.textContent;
    let storevalue = "";
    for (let i = 0; i < string.length; i++) {
        let getString = string[i].toUpperCase();
        storevalue += getString;
    }
    return storevalue;
}

uppercase.addEventListener("click", function () {
   para.innerHTML = Upper_Case()
});

function lower_Case() {
    let string = para.textContent;
    let storevalue = "";
    for (let i = 0; i < string.length; i++) {
        let getString = string[i].toLowerCase();
        storevalue += getString;
    }
    return storevalue;
}

lowercase.addEventListener("click", function () {
   para.innerHTML = lower_Case()
});