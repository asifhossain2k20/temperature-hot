var button=document.querySelector('.btn')
var inputValue=document.querySelector('.inputData');
var name=document.querySelector('.name');
var desc=document.querySelector('.overView');
var temp=document.querySelector('.temp');

button.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=0c129c39e6af5a541dafcf7dc066356c')
.then(response=>response.json())
.then(data=>{
    console.log(name);
    var nameValue=data['name'];
    var tempValue=data['main']['temp'];
    var descValue=data['weather'][0]['description'];
    name.innerHTML=nameValue;
    temp.innerHTML=tempValue-273;
    desc.innerHTML=descValue;

})


.catch(err=>alert("wrong City Name!"));
})