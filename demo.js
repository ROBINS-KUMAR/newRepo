// console.dir(document);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.all);
// console.log(document.all[10]);
// console.log(document.forms);

// console.log(document.title);

// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header =document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'HELLO';
// // headerTitle.innerText = 'Goodbye'  
//  header.style.borderBottom ='solid 3px #000'

// GETELEMENTSBYCLASSNAME
// var item =document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[2]);


// item[2].style.backgroundColor = 'green';
// for(var i=0; i< item.length; i++)
// {
//     item[i].style.fontWeight = 'bold';
// }

// GETELEMENTSBYTAGNAME
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[4]);
// li[4].textContent ='Hello';


// GETELEMENTSBYCLASSNAME 


// var item =document.getElementsByClassName('list-group-item');
// console.log(item);
// console.log(item[4]);
// item[4]

//QUERYSELECTOR //
var item = document.querySelector('.list-group-item');
var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor ='yellow';
var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display ='none';

//QUERYSELECTORFORALL //
var even =document.querySelectorAll('li:nth-child(even)');
for(var i =0; i< even.length ; i++)
{
    even[i].style.color ='green';
}
var odd =document.querySelectorAll('li:nth-child(odd)');
for(var i =0; i< odd.length ; i++)
{
    odd[i].style.backgroundColor ='green';
}