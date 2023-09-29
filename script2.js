var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload=function(){

    var result = JSON.parse(request.response);
    
    console.log(result);

    result.filter((ele)=>console.log(ele.population));

    var a= result.reduce((acc,ele)=>acc+ele.population);

    console.log(a)   
} 




