var obj1 = {"name":"Sam","class":"MCA"};
var obj2 = {"class":"MCA","name":"Sam"};

var flag=true;

for(var i=0;i<obj1.length;i++)
{
    for(var j=0;j<obj2.length;j++)
    {
      
        if(obj1[i] == obj2[j]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}

console.log("is object equal : "+flag);