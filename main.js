(function(){
var button1 = document.getElementById('info');
var thomas = document.getElementsByTagName('H1')[0];
var button2 = document.getElementById('titre');
var compe = document.getElementById('compe');
var expe = document.getElementById('expe');
var forma = document.getElementById('forma');
var infor = document.getElementById('infor');
var ul1 =document.getElementsByTagName('UL')[0];
var ul2 =document.getElementsByTagName('UL')[1];
var ul3 =document.getElementsByTagName('UL')[2];
var ul4 =document.getElementsByTagName('UL')[3];

button1 = setHidden (button1);
ul1 = setHidden (ul1);
ul2 = setHidden (ul2);
ul3 = setHidden (ul3);
ul4 = setHidden (ul4);
compe = setHidden(compe);
expe = setHidden(expe);
forma = setHidden(forma);
infor = setHidden(infor);

function setHidden(variable){

variable.style.display = "none";

  return variable;
}

compe.addEventListener( "click", functionclick3);
function functionclick3(){
  ul1.style.display = 'block';
};
expe.addEventListener( "click", functionclick4);
function functionclick4(){
  ul2.style.display = 'block';
};
forma.addEventListener( "click", functionclick5);
function functionclick5(){
  ul3.style.display = 'block';
};
infor.addEventListener( "click", functionclick6);
function functionclick6(){
  ul4.style.display = 'block';
};

button2.addEventListener( "click", functionclick2);
function functionclick2(){
  compe.style.display = 'block';
  expe.style.display = 'block';
  forma.style.display = 'block';
  infor.style.display = 'block';
};

 thomas.addEventListener( "click", functionclick);
 function functionclick(){
   button1.style.display = 'block';
 };
console.log(thomas);
})()
