var request = new XMLHttpRequest();
request.open('GET','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload = function()
{
    var data=JSON.parse(request.response);
    
    for(var i in data){
                   console.log(data[i].name,data[i].region,data[i].subregion,data[i].population);
    }
            
     }