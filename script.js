// Question No.1,
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 

var a = 10;
document.write(`The value of a is: ${a} </br> </br>`);

document.write(`The value of a is: ${++a} </br>`)
document.write(`Now the value of a is: ${a} </br> </br>`);

document.write(`The value of a is: ${a++} </br>`)
document.write(`Now the value of a is: ${a} </br> </br>`);

document.write(`The value of a is: ${--a} </br>`)
document.write(`Now the value of a is: ${a} </br> </br>`);

document.write(`The value of a is: ${a--} </br>`)
document.write(`Now the value of a is: ${a} </br> </br>`);


// Question No.2
// What will be the output in variables a, b & result after execution of the following script:

var a= 2;
var b= 1;
document.write(`a is: ${a} </br>`);
document.write(`b is: ${b} </br>`)

var result=--a - --b + ++b + b--;
document.write(`result is: ${result} </br> </br>`);

// Question No.3
// Write a program that takes input a name from user & greet the user:

var user_name= prompt("Enter Your Name" );
document.write(`Hellow! ${user_name} </br> </br>`)

// Question No.4
// Write a program that takes input a name from user & greet the user. 

var table = prompt("Enter a number!")|| 5;
document.write(`${table} x 1 = ${table * 1}</br>`);
document.write(`${table} x 2 = ${table * 2}</br>`);
document.write(`${table} x 3 = ${table * 3}</br>`);
document.write(`${table} x 4 = ${table * 4}</br>`);
document.write(`${table} x 5 = ${table * 5}</br>`);
document.write(`${table} x 6 = ${table * 6}</br>`);
document.write(`${table} x 7 = ${table * 7}</br>`);
document.write(`${table} x 8 = ${table * 8}</br>`);
document.write(`${table} x 9 = ${table * 9}</br>`);
document.write(`${table} x 10 = ${table * 10}</br></br>`);

// Question No.5
// Take:
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

var sub1= "English";
var sub2= "Urdu";
var sub3= "Math";

var total_num= 100;

var sub1_obt_num= 54;
var sub2_obt_num= 48;
var sub3_obt_num= 54;

var sub1_per= (sub1_obt_num / total_num) *100;
var sub2_per= (sub1_obt_num / total_num) *100;
var sub3_per= (sub1_obt_num / total_num) *100;

document.write( `
    <table border = "2" style="border-collapse: collapse">
        
        <tr>
       <th>Subjects</th>
       <th>Total Mark</th>
       <th>Obtained Mark</th>
       <th>Percentage</th>

        </tr>
          <td>English</td>
          <td>100</td>
          <td>54</td>
          <td> ${sub1_per}%</td>

        <tr>
        <td>Urdu</td>
          <td>100</td>
          <td>48</td>
          <td> ${sub2_per}%</td>
        </tr>

        <tr>
            <td>Math</td>
          <td>100</td>
          <td>54</td>
          <td> ${sub3_per}%</td>
        </tr>

        <tr>
  <td></td>
  <td style="text-align: right;  font-weight: bold;">
  ${total_num + total_num + total_num} 
  </td>
  <td style="text-align: right; font-weight: bold;">
  ${sub1_obt_num + sub2_obt_num + sub3_obt_num} </td>
  <td style="text-align: right; font-weight: bold;">
  ${(sub1_per + sub2_per + sub3_per) / 3}% </td>
  </tr>

    </table>
`)