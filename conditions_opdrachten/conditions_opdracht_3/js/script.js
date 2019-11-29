//javascript code




function CheckSaldo ()
{
    
    var saldo=document.getElementById("inputsaldo").value;
    
    var gift;
    
    if (saldo <= 49)
    { 
        document.getElementById("Mysaldo").innerHTML="saldo is te laag pik"
    }
    else if (saldo > 500) { 
        document.getElementById("Mysaldo").innerHTML="saldo is goed met een bonus"
    }
    else 
    {
        document.getElementById("Mysaldo").innerHTML="saldo is goed "
    }
}