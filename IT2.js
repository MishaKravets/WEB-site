let a = "ПРИВЕТ АНДРЕЙ!!!";
console.log(a);
$('document').ready(function(){
     let a = "ПРИВЕТ АНДРЕЙ!!!";
         console.log(a);
     $('#bu').on('click', function(){
     var value1;
     value1 = $('#in1').val();
     if(value1 == 'mishakravets@gmail.com'){
     	alert('Добро, пожаловать! Кравец Михаил');
     } else{
     	alert('Вы еще не зареганны!');
     }

     });
});