var request = new XMLHttpRequest();

request.open("GET","https://restcountries.com/v3.1/all");

request.send();

request.onload= function() { 
    
    var result = JSON.parse(request.response);

    console.log(result);

    var a = result.filter((hin)=>hin.currencies=='USD')

    console.log(a);

    var name = a.map((e)=>e.name.common);
    console.log(name);
}
