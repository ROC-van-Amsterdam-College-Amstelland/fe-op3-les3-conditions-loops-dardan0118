
function nummers ()
{
    var i;
    var MyOutput="";
   
    for(i=0;i<=20;i++)
    {
        if( i%2 == 0){
            MyOutput+=i+"<br>"
        }
        else if(i%2 !== 0){
            console.log(i);
        }

    }
    document.getElementById("MyOutput").innerHTML=MyOutput;

}
