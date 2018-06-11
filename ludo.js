var i=0,z=0,winA=0,winB=0,flagA,flagB;
var x,daan=0,count=1;
function myfunction()
{ 
if(daan==0)
{if((Number(document.getElementById('dieelement').value) >= 1) && (Number(document.getElementById('dieelement').value) <= 6))
            x = Number(document.getElementById('dieelement').value);
else
x=Math.floor(Math.random() * 6)+1;
document.getElementById('outcome').innerHTML=x;
if((i%2==0)&&(x!=6))
  document.getElementById('turn').innerHTML="Turn of B";
else if((i%2===1)&&(x!=6))
  document.getElementById('turn').innerHTML="Turn of A";
if(x!=6)
  ++i;
  flagA=0;
  flagB=0;
}
check();
}
function check()
{
  if(x==6)
  daan=1;
  else if(document.getElementById('turn').innerHTML=="Turn of B")
  {
  if(document.getElementById('lockerA').innerHTML=="2A")
  daan=0;
  else if((document.getElementById('lockerA').innerHTML=="1A")&&(winA==1))
  daan=0;
  else if((document.getElementById('lockerA').innerHTML=="1A")||(document.getElementById('lockerA').innerHTML=="0A"))
  daan=1;
  }
  else if(document.getElementById('turn').innerHTML=="Turn of A")
  {if(document.getElementById('lockerB').innerHTML=="2B")
  daan=0;
  else if((document.getElementById('lockerB').innerHTML=="1B")&&(winB==1))
  daan=0;
  else if((document.getElementById('lockerB').innerHTML=="1B")||(document.getElementById('lockerB').innerHTML=="0B"))
  daan=1;
}
}
function move(text)
{var y;
if(Number(text[1]+text[2])>=10)
y=Number(text[1]+text[2])+x;
else
y=Number(text[1])+x;
if((((document.getElementById('turn').innerHTML=="Turn of B")&&(x!=6))||((document.getElementById('turn').innerHTML=="Turn of A")&&(x==6)))&&(flagA==0))
{
if((document.getElementById(text).innerHTML=="1A")||(document.getElementById(text).innerHTML=="2A"))
   {flagA=1;
    daan=0;
document.getElementById("misc").innerHTML="Let's Play Ludo";
 if(y>28)
      {document.getElementById("misc").innerHTML="You need an exact value to land in the end";
       flagA=0;
      }
  if(y==28)
    {document.getElementById("misc").innerHTML="one token wins";
     winA++;
     if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML=" ";
     if(document.getElementById(text).innerHTML=="2A")
       document.getElementById(text).innerHTML="1A";
     if(document.getElementById("b28").innerHTML=="1B")
       {if(document.getElementById("lockerB").innerHTML=="1B")
             document.getElementById("lockerB").innerHTML="2B";
        else
            document.getElementById("lockerB").innerHTML="1B";
        }
     if(document.getElementById("b28").innerHTML=="2B")
        document.getElementById("lockerB").innerHTML="2B"; 
      }
if(y==28)
document.getElementById("b28").innerHTML=" ";
  else if((document.getElementById('b'+y).innerHTML!="1A")&&(document.getElementById('b'+y).innerHTML!="1B")&&(document.getElementById('b'+y).innerHTML!="2B")&&(y!=28))
    {document.getElementById('b'+y).innerHTML="1A";
    if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1A";
     }
else if((document.getElementById('b'+y).innerHTML=="1A")&&(y!=28))
    {
      document.getElementById('b'+y).innerHTML="2A";
    if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1A";
     }
  else if((document.getElementById('b'+y).innerHTML=="1B")&&(y!=28))
       {if(document.getElementById("lockerB").innerHTML=="1B")
           {document.getElementById("lockerB").innerHTML="2B";
           document.getElementById('b'+y).innerHTML='1A';
           if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1A";
          }
        else if(document.getElementById("lockerB").innerHTML=="0B")
          {document.getElementById("lockerB").innerHTML="1B";
           document.getElementById('b'+y).innerHTML='1A';
          if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1A";
          }
       }
    else if((document.getElementById('b'+y).innerHTML=="2B")&&(y!=28))
    {
      document.getElementById('b'+y).innerHTML="1A";
      document.getElementById('lockerB').innerHTML="2B";
    if(document.getElementById(text).innerHTML=="1A")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1A";
     }
   }
if(winA==2)
window.alert("congrats A wins");                           /* if winA==2    A wins*/
}
else if( (((document.getElementById('turn').innerHTML=="Turn of A")&&(x!=6))||((document.getElementById('turn').innerHTML=="Turn of B")&&(x==6)))&&(flagB==0))
{
if(y>28)
y=y-28;
var m=y-x;
if((document.getElementById(text).innerHTML=="1B")||(document.getElementById(text).innerHTML=="2B"))
   {flagB=1;
   daan=0;
   document.getElementById("misc").innerHTML="Let's Play Ludo";
     if(y==14)
    {document.getElementById("misc").innerHTML="one token wins";
     winB++;
     if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
     if(document.getElementById(text).innerHTML=="2B")
        document.getElementById(text).innerHTML="1B";   
     
     if(document.getElementById("b14").innerHTML=="1A")
       {if(document.getElementById("lockerA").innerHTML=="1A")
             document.getElementById("lockerA").innerHTML="2A";
        else
            document.getElementById("lockerA").innerHTML="1A";
        }
     if(document.getElementById("b14").innerHTML=="2A")
        document.getElementById("lockerA").innerHTML="2A"; 
}
if(y==14)
document.getElementById("b14").innerHTML=" ";
 if(((m==8)||(m==9)||((m>9)&&(m<14)))&&((m+x)>=15))
       {document.getElementById("misc").innerHTML="You need an exact value to land in the end";
        flagB=0;
        }
      else if((document.getElementById('b'+y).innerHTML!="1A")&&(document.getElementById('b'+y).innerHTML!="1B")&&(document.getElementById('b'+y).innerHTML!="2A")&&(y!=14))
    {document.getElementById('b'+y).innerHTML="1B";
    if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1B";
     }
else if(document.getElementById('b'+y).innerHTML=="1A")
       {if(document.getElementById("lockerA").innerHTML=="1A")
          {document.getElementById("lockerA").innerHTML="2A";
           document.getElementById('b'+y).innerHTML='1B';
           if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1B";
          }
        else if(document.getElementById("lockerA").innerHTML=="0A")
          {document.getElementById("lockerA").innerHTML="1A";
           document.getElementById('b'+y).innerHTML='1B';
          if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1B";
          }
       }
else if((document.getElementById('b'+y).innerHTML=="1B"))
    {
      document.getElementById('b'+y).innerHTML="2B";
    if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1B";
     }
else if((document.getElementById('b'+y).innerHTML=="2A"))
    {
      document.getElementById('b'+y).innerHTML="1B";
      document.getElementById('lockerA').innerHTML="2A" ;
    if(document.getElementById(text).innerHTML=="1B")
        document.getElementById(text).innerHTML="";
        else
        document.getElementById(text).innerHTML="1B";
     }
}
if(winB==2)
window.alert("congrats B wins");
}
}
function lockerAfunc()
{if((document.getElementById("turn").innerText=="Turn of A")&&(x==6)&&(flagA==0))
{if(document.getElementById("lockerA").innerText=="2A")
 {flagA=1;
daan=0;
document.getElementById("lockerA").innerText="1A";
  if(document.getElementById("b1").innerText=="1A")
  document.getElementById("b1").innerText="2A";
 else if(document.getElementById("b1").innerText=="1B")
        {document.getElementById("b1").innerText="1A";
          if(document.getElementById("lockerB").innerText=="1B")
           document.getElementById("lockerB").innerText="2B";
          else if(document.getElementById("lockerB").innerText=="0B")
           document.getElementById("lockerB").innerText="1B";
         }
  else if(document.getElementById("b1").innerText=="2B")
{document.getElementById("b1").innerText="1A";
document.getElementById("lockerB").innerText="2B";
}
  else
  document.getElementById("b1").innerText="1A";
 }
 else if(document.getElementById("lockerA").innerText=="1A")
 {flagA=1;
daan=0;
document.getElementById("lockerA").innerText="0A";
   if(document.getElementById("b1").innerText=="1A")
  document.getElementById("b1").innerText="2A";
  else
  document.getElementById("b1").innerText="1A";
 }
}
}
function lockerBfunc()
{if((document.getElementById('turn').innerText=='Turn of B')&&(x==6)&&(flagB==0))
 {if((document.getElementById('lockerB').innerText=="2B"))
 {flagB=1;
  daan=0;
  document.getElementById("lockerB").innerText="1B";
   if(document.getElementById("b15").innerText=="1B")
  document.getElementById("b15").innerText="2B";
  else if(document.getElementById("b15").innerText=="1A")
        {document.getElementById("b15").innerText="1B";
          if(document.getElementById("lockerA").innerText=="1A")
           document.getElementById("lockerA").innerText="2A";
          else if(document.getElementById("lockerA").innerText=="0A")
           document.getElementById("lockerA").innerText="1A";
         }
  else if(document.getElementById("b15").innerText=="2A")
{document.getElementById("b15").innerText="1B";
document.getElementById("lockerA").innerText="2A";
}
  else
  document.getElementById("b15").innerText="1B";
 }
 else if((document.getElementById("lockerB").innerText=="1B")&&(document.getElementById('outcome').innerText=="6"))
 {flagB=1;
  daan=0;
  document.getElementById("lockerB").innerText="0B";
   if(document.getElementById("b15").innerText=="1B")
  document.getElementById("b15").innerText="2B";
  else if(document.getElementById("b15").innerText=="1A")
        {document.getElementById("b15").innerText="1B";
          if(document.getElementById("lockerA").innerText=="1A")
           document.getElementById("lockerA").innerText="2A";
          else if(document.getElementById("lockerA").innerText=="0A")
           document.getElementById("lockerA").innerText="1A";
         }
  else if(document.getElementById("b15").innerText=="2A")
{document.getElementById("b15").innerText="1B";
document.getElementById("lockerA").innerText="2A";
}
  else
  document.getElementById("b15").innerText="1B";
 }
 } 
}
