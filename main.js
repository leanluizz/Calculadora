
function Insert(num){
    var number = document.getElementById("result").innerHTML;
    document.getElementById('result').innerHTML = number + num; 
   
};

function Delete(){
    document.getElementById('result').innerHTML = "";
}
    
function ChangeColor(){
    document.getElementById('result').style.fontFamily = 'arial';
    document.getElementById('result').style.fontSize = '30px';
    document.getElementById('result').style.color = 'white';	
	 }
    
    
function SquareRoot(){
    res = split(document.getElementById('result'));
     result = parseInt(res / 2)
     result.innerHTML = res
}

function Calc()
{
    var result = document.getElementById('result').innerHTML;
    if(result)
    {
        document.getElementById('result').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('result').innerHTML = 'Try Again'
    }
    
    
};

