var education = [ "SSC" ,"HSC" , "BCS" , "BS" , "BCOM" , "MS" , "M.PHIL" , "PhD"]

document.write("<h1> Qualifition: </h1>")
document.write( "1) " + education[0] + "</br>");
document.write( "2) " + education[1]+ "</br>");
document.write( "3) " + education[2]+ "</br>");
document.write( "4) " + education[3]+ "</br>");
document.write( "5) " + education[4]+ "</br>");
document.write( "6) " + education[5]+ "</br>");
document.write( "7) " + education[6]+ "</br>");
document.write( "8) " + education[7]+ "</br> </br> ");
console.log(education);

var studentName = ["Burhan " ,"Ali" , "Ahmed"];

var studentScore = [];

const score = +prompt(`Enter the Score of ${studentName[0]} `, 10);
const score2 = +prompt(`Enter the Score of ${studentName[1]} `, 10);
const score3 = +prompt(`Enter the Score of ${studentName[2]} `, 10);

studentScore.push(score , score2 , score3);

document.write(`Score of ${studentName[0]} is ${studentScore[0]}. Percentage:  ${((studentScore[0] / 500) * 100).toFixed(2)} % </br>`);
document.write(`Score of ${studentName[1]} is ${studentScore[1]}. Percentage:  ${((studentScore[1] / 500) * 100).toFixed(2)} % </br>`);
document.write(`Score of ${studentName[2]} is ${studentScore[2]}. Percentage:  ${((studentScore[2] / 500) * 100).toFixed(2)} % </br>`);



// Question # 9

var colorName = ["Red" , "Green" , "Yellow"];

document.write(`Array:  ${colorName} </br> </br>`)

var color = prompt(`Enter A begining color Expect ${colorName[0]}, ${colorName[1]} , ${colorName[2]}` , "Purple")

colorName.unshift(color)

document.write(`Updated Array After Adding a color in the beginning : ${colorName} </br> </br>`);


var color = prompt(`Enter A ending color Expect ${colorName[0]}, ${colorName[1]} , ${colorName[2]} ` , "Blue")

colorName.push(color);

document.write(`Updated Array After Adding a color in the last: ${colorName} </br> </br>`);

colorName.splice(0 , 0 , "Orange" , "White");

document.write(`Updated Array After adding two more color in the begining : ${colorName} </br> </br>`);

colorName.shift();

document.write(`Updated Array After removing a color from beginning : ${colorName} </br> </br>`);


colorName.pop();


document.write(`Updated Array After removing a color from Last : ${colorName} </br> </br>`);

var color = prompt('Enter a color' , "pink");

var indexNum = +prompt('Enter a index number where you want to add this color');

colorName.splice(indexNum , 0 , color);

document.write(`Updated Array After adding a color as per user requirement : ${colorName} </br> </br>`);


var indexNum = +prompt('At which index number to start delete the number ?' , 0);

var indexNum1 = +prompt("How many color you want to delete ?" , 1);

var remove = colorName.splice(indexNum , indexNum1 );



document.write(`Updated Array deleting colors as per User requirements : ${colorName}. Deleted Value is: <b>${remove} </b></br> </br>`);


var studentScore = [320 , 230 , 480 , 120]

document.write(`Scores Of Students ${studentScore} </br></br>`);

studentScore = studentScore.sort();

document.write(`Ordered Scores of Students : ${studentScore} </br></br>`);

var cityList = ["Karachi" , "Lahore" , "Hyderabad" , "Peshawar"];

document.write(`City List: ${cityList} </br></br>`);

var cityList = cityList.slice(1 , 3);

document.write(`Selected City List: ${cityList} </br></br>`);


var arr1 = [ "This" , "is" , "my" , "cat"];

document.write(`Array : ${arr1} </br></br>`);

var arr1 = arr1.join(" ");

document.write(`String : ${arr1} </br></br>`)


var fifoArr = []

fifoArr.push("Keyboard");
fifoArr.push("Mouse");
fifoArr.push("Printer");
fifoArr.push("Monitor");

document.write("Devices:"+ " " + fifoArr + "</br>");

var shiftValue = fifoArr.shift();
var shiftValue1 = fifoArr.shift();
var shiftValue2 = fifoArr.shift();
var shiftValue3 = fifoArr.shift();

document.write(`Out: ${shiftValue} </br> Out: ${shiftValue1} </br> Out: ${shiftValue2} </br> Out: ${shiftValue3} </br></br>`)

var arr2 = []

arr2.push("Keyboard");
arr2.push("Mouse");
arr2.push("Printer");
arr2.push("Monitor");

document.write(`Devices: ${arr2} </br>`);

var value1 = arr2.pop();
var value2 = arr2.pop();
var value3 = arr2.pop();
var value4 = arr2.pop();

document.write(`Out: ${value1} </br> Out: ${value2} </br> Out: ${value3} </br> Out: ${value4}</br></br> `)

var manufacture = ["Apple" , "Samsung" , "Nokia" , "Motorola" , "Sony" , "Haier"]

document.write(`<select name="" id="">

<option value="option1">${manufacture[0]}</option>
<option value="option2">${manufacture[1]}</option>
<option value="option3">${manufacture[2]}</option>
<option value="option4">${manufacture[3]}</option>
<option value="option5">${manufacture[4]}</option>
<option value="option6">${manufacture[5]}</option>

</select>`)