// 宣告變數

//1.var             全域變數  
//2.let             區域變數
//3.const           區域變數 & 常數 (java final的意思)

const body = 200;
console.log(body);


// 宣告變數 a
var a = 10;

if(true){
  //  在if(block scope)中宣告變數 b
  let b = 20;
  a = 500;
  var cdx = "c++";
}

// 輸出: A = 10
console.log(a);
console.log(cdx);

//console.log(b);
// 因為變數 b使用let宣告，離開if區域便無法被存取

console.log("-----------------------------------------------------物件介紹----------------------------------------------------------")
//JS物件介紹 跟json格式相同，若要存取其中一個屬性的值，ex : obj.height
let obj = {
    height : "30cm",
    left : "60cm"
}


console.log(obj);
console.log(obj.height);


const obj2 = {
    height : "30cm",
    left : "60cm"
}

console.log(obj2);
console.log(obj2.height);

obj2.height = "44cm";
console.log(obj2.height);


var obj3 = obj2;

obj3.height = "20com";

console.log("obj3:"+obj3);
console.log("obj3.height:"+obj3.height);

console.log("obj2:"+obj2);
console.log("obj2.height:"+obj2.height);

console.log("-----------------------------------------------------物件介紹----------------------------------------------------------")


console.log("-----------------------------------------------------Array介紹----------------------------------------------------------")
//常用函式
//pop   從陣列末端剔除一個值
//push  在陣列結束加入值
let array1 = [1,3,5,7,9];
let array2 = [2,4,6,8,10];


console.log(array1.length);
array1.pop;
console.log(array1);
array2.push(12);
console.log(array2);

console.log("-----------------------------------------------------Array介紹----------------------------------------------------------")


console.log("-----------------------------------------------------常用----------------------------------------------------------")

console.log("-------------------------Array----------------------------")
let bitch = ["三八雞","三八雞2","三八雞3"];

//forEach中的item index array並不代表 bitch陣列本身
bitch.forEach(function(item, index, array){
    item = "神經病";
    console.log(item);
    console.log(index);
    console.log(array);


})
console.log(bitch);
console.log("-------------------------Array----------------------------")


console.log("-------------------------Map----------------------------")
//使用時機 將陣列改為另一個陣列
//一定要有return值
let gift = [
    {
        cellPhone : "iPhone",
        note : "macbook",
        computer : "msi"
    },{
        cellPhone : "pixel",
        note : "samsung",
        computer : "asus"
    },{
        cellPhone : "samsung",
        note : "dell",
        computer : "acer"
    }
]
let newGift = gift.map(function(item,index,array){
    {
        item.note = "筆電品牌:"+item.note;
        return item.note;

    }
})
console.log(newGift)

console.log("-------------------------Map----------------------------")

console.log("-------------------------filter----------------------------")
//使用時機 將陣列改為另一個陣列
//一定要有return值
let weight = [
    {
        Anthony : "70kg",
    },{
        Anthony : "50kg",
    },{
        Anthony : "99kg"
    }
]
let weight2 = weight.filter(function(item){
    return item.Anthony >= "50kg";
})
console.log(weight2)

console.log("-------------------------filter----------------------------")


console.log("-----------------------------------------------------常用----------------------------------------------------------")






let students = {
    jason : "160cm",
    Amy : "150cm",
    Anthony : "176cm"

};