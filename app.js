
let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

// -----------------------1--------------------------

let item1 = ""
let n_count1 = 0


let count1 = document.getElementById("count1");
let rbtn1 = document.getElementById("rbtn1");
let abtn1 = document.getElementById("abtn1");

abtn1.addEventListener("click", function () {
    count1.innerText = n_count1 += 1;
    count1.style.display = "inline-block";
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
    item1 = "Iphone/12000/" + count1.innerText;

});
rbtn1.addEventListener("click", function () {
    if (n_count1 > 0) {
        count1.innerText = n_count1 -= 1;
    }
    count1.style.display = "inline-block";
    item1 = "Iphone/12000/" + count1.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});
// ------------------2--------------------

count2 = document.getElementById("count2");
rbtn2 = document.getElementById("rbtn2");
abtn2 = document.getElementById("abtn2");
let item2 = "";
let n_count2 = 0;
rbtn2.addEventListener("click", function () {
    if (n_count2 > 0) {
        count2.innerText = n_count2 -= 1;
    }

    count2.style.display = "inline-block";
    item2 = "Samsung/35000/" + count2.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

abtn2.addEventListener("click", function () {
    count2.innerText = n_count2 += 1;
    count2.style.display = "inline-block";
    item2 = "Samsung/3500/" + count2.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// ------------------3--------------------

count3 = document.getElementById("count3");
rbtn3 = document.getElementById("rbtn3");
abtn3 = document.getElementById("abtn3");
let item3 = "";
let n_count3 = 0;
rbtn3.addEventListener("click", function () {
    if (n_count3 > 0) {
        count3.innerText = n_count3 -= 1;
    }

    count3.style.display = "inline-block";
    item3 = "Redmi/3000/" + count3.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn3.addEventListener("click", function () {
    count3.innerText = n_count3 += 1;
    count3.style.display = "inline-block";
    item3 = "Redmi/3000/" + count3.innerText;
    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

// -------------------4-------------------

count4 = document.getElementById("count4");
rbtn4 = document.getElementById("rbtn4");
abtn4 = document.getElementById("abtn4");
let item4 = "";
let n_count4 = 0;
rbtn4.addEventListener("click", function () {
    if (n_count4 > 0) {
        count4.innerText = n_count4 -= 1;
    }

    count4.style.display = "inline-block";
    item4 = "Xolodilnik/7000/" + count4.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn4.addEventListener("click", function () {
    count4.innerText = n_count4 += 1;
    count4.style.display = "inline-block";
    item4 = "Xolodilnik/7000/" + count4.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

count5 = document.getElementById("count5");
rbtn5 = document.getElementById("rbtn5");
abtn5 = document.getElementById("abtn5");
let item5 = "";
let n_count5 = 0;
rbtn5.addEventListener("click", function () {
    if (n_count5 > 0) {
        count5.innerText = n_count5 -= 1;
    }

    count5.style.display = "inline-block";
    item5 = "Mikavalnovka/1000/" + count5.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn5.addEventListener("click", function () {
    count5.innerText = n_count5 += 1;
    count5.style.display = "inline-block";
    item5 = "Mikavalnovka/1000/" + count5.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


count6 = document.getElementById("count6");
rbtn6 = document.getElementById("rbtn6");
abtn6 = document.getElementById("abtn6");
let item6 = "";
let n_count6 = 0;
rbtn6.addEventListener("click", function () {
    if (n_count6 > 0) {
        count6.innerText = n_count6 -= 1;
    }

    count6.style.display = "inline-block";
    item6 = "Gaz-Plita/7000/" + count6.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn6.addEventListener("click", function () {
    count6.innerText = n_count6 += 1;
    count6.style.display = "inline-block";
    item6 = "Gaz-Plita/7000/" + count6.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


count7 = document.getElementById("count7");
rbtn7 = document.getElementById("rbtn7");
abtn7 = document.getElementById("abtn7");
let item7 = "";
let n_count7 = 0;
rbtn7.addEventListener("click", function () {
    if (n_count7 > 0) {
        count7.innerText = n_count7 -= 1;
    }

    count7.style.display = "inline-block";
    item7 = "Konditsoner/9000/" + count7.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn7.addEventListener("click", function () {
    count7.innerText = n_count7 += 1;
    count7.style.display = "inline-block";
    item7 = "Konditsoner/9000/" + count7.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

count8 = document.getElementById("count8");
rbtn8 = document.getElementById("rbtn8");
abtn8 = document.getElementById("abtn8");
let item8 = "";
let n_count8 = 0;
rbtn8.addEventListener("click", function () {
    if (n_count8 > 0) {
        count8.innerText = n_count8 -= 1;
    }

    count8.style.display = "inline-block";
    item8 = "Plisos/1000/" + count8.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn8.addEventListener("click", function () {
    count8.innerText = n_count8 += 1;
    count8.style.display = "inline-block";
    item8 = "Plisos/1000/" + count8.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


count9 = document.getElementById("count9");
rbtn9 = document.getElementById("rbtn9");
abtn9 = document.getElementById("abtn9");
let item9 = "";
let n_count9 = 0;
rbtn9.addEventListener("click", function () {
    if (n_count9 > 0) {
        count9.innerText = n_count9 -= 1;
    }

    count9.style.display = "inline-block";
    item9 = "Kir-Mashina/6000/" + count9.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn9.addEventListener("click", function () {
    count9.innerText = n_count9 += 1;
    count9.style.display = "inline-block";
    item9 = "Kir-Mashina/6000/" + count9.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

count10 = document.getElementById("count10");
rbtn10 = document.getElementById("rbtn10");
abtn10 = document.getElementById("abtn10");
let item10 = "";
let n_count10 = 0;
rbtn10.addEventListener("click", function () {
    if (n_count10 > 0) {
        count10.innerText = n_count10 -= 1;
    }

    count10.style.display = "inline-block";
    item10 = "Duxovka/1000/" + count10.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn10.addEventListener("click", function () {
    count10.innerText = n_count10 += 1;
    count10.style.display = "inline-block";
    item10 = "Duxovka/1000/" + count10.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});

count11 = document.getElementById("count11");
rbtn11 = document.getElementById("rbtn11");
abtn11 = document.getElementById("abtn11");
let item11 = "";
let n_count11 = 0;
rbtn11.addEventListener("click", function () {
    if (n_count11 > 0) {
        count11.innerText = n_count11 -= 1;
    }

    count11.style.display = "inline-block";
    item11 = "Notebook/16000/" + count11.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


abtn11.addEventListener("click", function () {
    count11.innerText = n_count11 += 1;
    count11.style.display = "inline-block";
    item11 = "Notebook/16000/" + count11.innerText;

    tg.MainButton.setText("Оплата");
    tg.MainButton.show();
});


Telegram.WebApp.onEvent("mainButtonClicked", function () {
    data = item1 + "|" + item2 + "|" + item3 + "|" + item4 + "|" + item5 + "|" + item6 + "|" + item7 + "|" + item8 + "|" + item9
    + "|" + item10 +"|" + item11
    tg.sendData(data);
});

// let tg = window.Telegram.WebApp;
// tg.expand();
//
// tg.MainButton.textColor = "#FFFFFF"
// tg.MainButton.color = "#FC3005"
//
// function updatePaymentButton() {
//     tg.MainButton.setText("Оплата");
//     tg.MainButton.show();
// }
//
// function handleButtonClick(item, countElement, count, price) {
//     countElement.innerText = count += 1;
//     countElement.style.display = "inline-block";
//     item = `${price}/${count}`;
//     updatePaymentButton();
// }
//
// function handleButtonDecrement(countElement, count, price) {
//     if (count > 0) {
//         countElement.innerText = count -= 1;
//         countElement.style.display = "inline-block";
//         item = `${price}/${count}`;
//         updatePaymentButton();
//     }
// }
//
// // -----------------------1--------------------------
//
// let item1 = "";
// let n_count1 = 0;
// let count1 = document.getElementById("count1");
// let rbtn1 = document.getElementById("rbtn1");
// let abtn1 = document.getElementById("abtn1");
//
// abtn1.addEventListener("click", function () {
//     handleButtonClick(item1, count1, n_count1, "Iphone/12000");
// });
//
// rbtn1.addEventListener("click", function () {
//     handleButtonDecrement(count1, n_count1, "Iphone/12000");
// });
//
// // ------------------2--------------------
//
// let item2 = "";
// let n_count2 = 0;
// let count2 = document.getElementById("count2");
// let rbtn2 = document.getElementById("rbtn2");
// let abtn2 = document.getElementById("abtn2");
//
// abtn2.addEventListener("click", function () {
//     handleButtonClick(item2, count2, n_count2, "Samsung/35000");
// });
//
// rbtn2.addEventListener("click", function () {
//     handleButtonDecrement(count2, n_count2, "Samsung/35000");
// });
//
// // ------------------3--------------------
//
// let item3 = "";
// let n_count3 = 0;
// let count3 = document.getElementById("count3");
// let rbtn3 = document.getElementById("rbtn3");
// let abtn3 = document.getElementById("abtn3");
//
// abtn3.addEventListener("click", function () {
//     handleButtonClick(item3, count3, n_count3, "Redmi/3000");
// });
//
// rbtn3.addEventListener("click", function () {
//     handleButtonDecrement(count3, n_count3, "Redmi/3000");
// });
//
// // -------------------4-------------------
//
// let item4 = "";
// let n_count4 = 0;
// let count4 = document.getElementById("count4");
// let rbtn4 = document.getElementById("rbtn4");
// let abtn4 = document.getElementById("abtn4");
//
// abtn4.addEventListener("click", function () {
//     handleButtonClick(item4, count4, n_count4, "Xolodilnik/7000");
// });
//
// rbtn4.addEventListener("click", function () {
//     handleButtonDecrement(count4, n_count4, "Xolodilnik/7000");
// });
//
// // -------------------5-------------------
//
// let item5 = "";
// let n_count5 = 0;
// let count5 = document.getElementById("count5");
// let rbtn5 = document.getElementById("rbtn5");
// let abtn5 = document.getElementById("abtn5");
//
// abtn5.addEventListener("click", function () {
//     handleButtonClick(item5, count5, n_count5, "Mikavalnovka/1000");
// });
//
// rbtn5.addEventListener("click", function () {
//     handleButtonDecrement(count5, n_count5, "Mikavalnovka/1000");
// });
//
// // -------------------6-------------------
//
// let item6 = "";
// let n_count6 = 0;
// let count6 = document.getElementById("count6");
// let rbtn6 = document.getElementById("rbtn6");
// let abtn6 = document.getElementById("abtn6");
//
// abtn6.addEventListener("click", function () {
//     handleButtonClick(item6, count6, n_count6, "Gaz-Plita/7000");
// });
//
// rbtn6.addEventListener("click", function () {
//     handleButtonDecrement(count6, n_count6, "Gaz-Plita/7000");
// });
//
// // -------------------7-------------------
//
// let item7 = "";
// let n_count7 = 0;
// let count7 = document.getElementById("count7");
// let rbtn7 = document.getElementById("rbtn7");
// let abtn7 = document.getElementById("abtn7");
//
// abtn7.addEventListener("click", function () {
//     handleButtonClick(item7, count7, n_count7, "Konditsoner/9000");
// });
//
// rbtn7.addEventListener("click", function () {
//     handleButtonDecrement(count7, n_count7, "Konditsoner/9000");
// });
//
// // -------------------8-------------------
//
// let item8 = "";
// let n_count8 = 0;
// let count8 = document.getElementById("count8");
// let rbtn8 = document.getElementById("rbtn8");
// let abtn8 = document.getElementById("abtn8");
//
// abtn8.addEventListener("click", function () {
//     handleButtonClick(item8, count8, n_count8, "Plisos/1000");
// });
//
// rbtn8.addEventListener("click", function () {
//     handleButtonDecrement(count8, n_count8, "Plisos/1000");
// });
//
// // -------------------9-------------------
//
// let item9 = "";
// let n_count9 = 0;
// let count9 = document.getElementById("count9");
// let rbtn9 = document.getElementById("rbtn9");
// let abtn9 = document.getElementById("abtn9");
//
// abtn9.addEventListener("click", function () {
//     handleButtonClick(item9, count9, n_count9, "Kir-Mashina/6000");
// });
//
// rbtn9.addEventListener("click", function () {
//     handleButtonDecrement(count9, n_count9, "Kir-Mashina/6000");
// });
//
// // -------------------10-------------------
//
// let item10 = "";
// let n_count10 = 0;
// let count10 = document.getElementById("count10");
// let rbtn10 = document.getElementById("rbtn10");
// let abtn10 = document.getElementById("abtn10");
//
// abtn10.addEventListener("click", function () {
//     handleButtonClick(item10, count10, n_count10, "Duxovka/1000");
// });
//
// rbtn10.addEventListener("click", function () {
//     handleButtonDecrement(count10, n_count10, "Duxovka/1000");
// });
//
// // -------------------11-------------------
//
// let item11 = "";
// let n_count11 = 0;
// let count11 = document.getElementById("count11");
// let rbtn11 = document.getElementById("rbtn11");
// let abtn11 = document.getElementById("abtn11");
//
// abtn11.addEventListener("click", function () {
//     handleButtonClick(item11, count11, n_count11, "Notebook/16000");
// });
//
// rbtn11.addEventListener("click", function () {
//     handleButtonDecrement(count11, n_count11, "Notebook/16000");
// });
// Telegram.WebApp.onEvent("mainButtonClicked", function () {
//     let data = `${item1}|${item2}|${item3}|${item4}|${item5}|${item6}|${item7}|${item8}|${item9}|${item10}|${item11}`;
//     tg.sendData(data);
// });
