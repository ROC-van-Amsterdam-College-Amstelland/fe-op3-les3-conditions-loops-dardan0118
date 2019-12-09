
function nummers ()
{
    var i;
    var MyOutput="";
   
    for(i=0;i<=50;i++)
    {
        if(i==20)
        {
            MyOutput+=i+" dit zijn mooie getallen <br>"
        }
        
        else if(i==40)
        {
            MyOutput+=i+" dit zijn mooie getallen <br>"
        }
        
        else {MyOutput+=i+"<br>";}
        
    }
    
    
    document.getElementById("MyOutput").innerHTML=MyOutput;
}
