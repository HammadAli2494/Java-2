document.getElementById('rs').style.fontWeight = "600";

document.getElementById('btn1').onclick=function()
{
    let string1="Hello "
    let string2="Welcome to the Dark World!"
    let string=string1 +" "+ string2;
    document.getElementById('os').innerHTML="Let string1='Hello ' <br>Let string2='Welcome to the dark World!'<br> Let string=string1 + string2";
    document.getElementById('rs').innerHTML=string;
}

document.getElementById('btn2').onclick=function()
{
    let name=prompt("Enter your lovely name");
    document.getElementById('os').innerHTML="Let name='prompt(Enter your lovely name)'";
    document.getElementById('rs').innerHTML=name;
}

document.getElementById('btn3').onclick=function()
{
    var num1=+prompt("Enter first Number")
    var num2=+prompt("Enter second Number")
    if(num1==num2){
        document.getElementById('os').innerHTML="var num1=+prompt('Enter first Number') <br> var num2=+prompt('Enter second Number')";
        document.getElementById('rs').innerHTML="Your Condition is True <br> Num1 == Num2";
    }
    else{
        document.getElementById('os').innerHTML="var num1=+prompt('Enter first Number') <br> var num2=+prompt('Enter second Number')";
        document.getElementById('rs').innerHTML="Your Condition is False <br> Num1 != Num2 ";
    }
}

document.getElementById('btn4').onclick=function()
{
    let marks=+prompt("Enter the marks 0-100")
    if(marks>=90){
        document.getElementById('os').innerHTML="";
        document.getElementById('rs').innerHTML="You got A+ grade";
    }
    else if(marks>=85){
        document.getElementById('os').innerHTML="";
        document.getElementById('rs').innerHTML="You got A grade";
    }
    else if(marks>=80){
        document.getElementById('os').innerHTML="";
        document.getElementById('rs').innerHTML="You got B+ grade";
    }
    else if(marks>=70){
        document.getElementById('os').innerHTML="";
        document.getElementById('rs').innerHTML="You got B grade";
    }
    else if(marks>=50){
        document.getElementById('os').innerHTML="";
        document.getElementById('rs').innerHTML="You got C grade";
    }
    else{
        document.getElementById('os').innerHTML="";
        document.getElementById('rs').innerHTML="You are Fail";
    }
}

document.getElementById('btn5').onclick=function()
{
    var name=prompt("Enter you beautiuful name")
    var age=prompt("Enter your Age")
    var city=prompt("Enter your city")
    if(age>=20 && city=="Gujranwala")
    {
        document.getElementById('os').innerHTML="var name=prompt('Enter you beautiuful name') <br>var age=prompt('Enter your Age') <br> var city=prompt('Enter your city')";
        document.getElementById('rs').innerHTML=name + "You are able to marriage";
    }
    else if(age>=20 && city!=="Gujranwala")
    {
        document.getElementById('os').innerHTML="var name=prompt('Enter you beautiuful name') <br>var age=prompt('Enter your age') <br> var city=prompt('Enter your city')";
        document.getElementById('rs').innerHTML=name + "You are able to marry but not in Gujranwala";
    }
    else if(age<20 && city==="Gujranwala")
    {
        document.getElementById('os').innerHTML="var name=prompt('Enter you beautiuful name') <br>var age=prompt('Enter your age') <br> var city=prompt('Enter your city')";
        document.getElementById('rs').innerHTML=name + "You are under age";
    }
    else
    {
        document.getElementById('os').innerHTML="var name=prompt('Enter you beautiuful name') <br>var age=prompt('Enter your age') <br> var city=prompt('Enter your city')";
        document.getElementById('rs').innerHTML="Enter the age and city to know";
    }
}

document.getElementById('btn6').onclick=function()
{
    var degree=prompt("Enter your degree")
    if(degree=="Computer science" || degree=="Information Technology" ||degree=="Software Engineering")
    {
        var name=prompt("Enter Your name")
        var cgpa=+prompt("Enter Your CGPA")
        if(cgpa>=3.8)
        {
            document.getElementById('os').innerHTML="Nested Conditions are used";
            document.getElementById('rs').innerHTML=name + " You are an Extra ordinary Student";
        }
        else if(cgpa>=3.6)
        {
            document.getElementById('os').innerHTML="Nested Conditions are used";
            document.getElementById('rs').innerHTML=name + " You are an Intelligent Student";
        }
        else if(cgpa>3.4)
        {
            document.getElementById('os').innerHTML="Nested Conditions are used";
            document.getElementById('rs').innerHTML=name + " You are a normal Student";
        }
        else
        {
            document.getElementById('os').innerHTML="Nested Conditions are used";
            document.getElementById('rs').innerHTML=name + " You are not studying properly <br> Focus on your Studies";
        }
    }
    else
    {
        document.getElementById('os').innerHTML="";
        document.getElementById('rs').innerHTML="Enter your degree of IT";

    } 
}

document.getElementById('btn7').onclick=function()
{
    var username=prompt("Enter the username")
    var password=+prompt("Enter the password to login")
    if(username==="hammadahmad" && password=="12345678")
    {
        document.getElementById('os').innerHTML="Enter the username and password to Login";
        document.getElementById('rs').innerHTML="You are logged In";
    }
    else
    {
        document.getElementById('os').innerHTML="Enter the username and password to Login";
        document.getElementById('rs').innerHTML="Incorrect username or password <br>Please enter the correct username and password";
    }
}

document.getElementById('btn8').onclick=function()
{
    var username=prompt("Enter the username")
    var password=+prompt("Enter the password to login")
    if(username==="hammadahmad" && password=="12345678")
    {
        document.getElementById('os').innerHTML="Enter the username and password to Login";
        document.getElementById('rs').innerHTML="You are logged In";
    }
    else
    {
        document.getElementById('os').innerHTML="Enter the username and password to Login";
        document.getElementById('rs').innerHTML="Incorrect username or password <br>Please enter the correct username and password";
    }
}

document.getElementById('cs').onclick=function(){
    document.getElementById('os').innerHTML="";
}

document.getElementById('co').onclick=function(){
    document.getElementById('rs').innerHTML="";
}