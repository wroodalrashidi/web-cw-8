// ------------------------------ 1️⃣ السؤال الأول ------------------------------
//     - driving اسمها function عرف دالة او
//     - تأخذ عمر شخص (رقم) واذا كان اكبر من 18 تطبع
//          🚘😍 مبروك سوف تحصل على الليسن
//     - واذا كان اقل من 18 يطبع
//          😢 للاسف عمرك لا يسمح
//     console.log ، if ملاحظة: سوف تستخدم

// 👇 هنا function عرف الدالة او


function driving(age) {
 if (age >= 18){
     console.log(`🚘😍 مبروك سوف تحصل على الليسن`)
 } else {
     console.log(`😢 للاسف عمرك لا يسمح`)
 }
}

driving(18)


// لا تنسى أن تنادي الدالة



// ------------------------------ 2️⃣ السؤال الثاني ------------------------------
// 2️⃣ السؤال الثاني
//     - iceCream واجعل اسمها array عرف مصفوفة او
//     - 🍦 احفظ فيها مجموعة من نكهات الآيس كريم
//     - console.log لطباعة قائمة نكهات الآيس كريم بإستخدام for loop استخدم

// 👇 هنا array عرف المصفوفة او

let iceCream = ["Chocolate", "Vanilla", "Mint", "Strawberry"]

for (let ice of iceCream) {
    console.log(ice);
}



// --------------------------------- ✨ بونص ------------------------------------
// بحيث عند مناداة الدالة تطبع القائمة myIceCream بإسم function عرف دالة او
// for loop عرف مصفوفة أخرى تحتوي على أفلامك الكرتون المفضلة بالنسبة لك وقم بطباعة الأفلام بإستخدام

// --------------------------------- 🔥 بونص ------------------------------------
// while loop اطبع احد المصفوفات بإستخدام

let cartoonShows = ["Spongebob", "Dora", "Conon", "Ben Ten"]

function myIceCream(x) {
    console.log(iceCream);
}

myIceCream()

for (let cartoons of cartoonShows) {
    console.log(cartoons);
}


let counter = 0;

while (counter < cartoonShows.length) {
  console.log(cartoonShows[counter]);
     counter += 1;   
}


