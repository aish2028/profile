function factorial(){
    num=parseInt(document.getElementById("num").value)
    if(num){
        res=1
        for(let i=2;i<=num;i<++)
        res*=1
    }
    message="factorial of"+num+"is"+res
}
    document.getElementById("res").innerHTML="<h2>"+message+"</br>"
function digitsSum(){
    num=parseInt(document.getElementById("num").value)
    message="";
    s=0;
    if(num){
       while(num!=0)
       s += parseInt(num%10)
       num=parseInt(num/10)
    }
   message="sum of digits of:"+num+"is"+s 
}
document.getElementById("res").innerHTML="<h2>"+message+"</h2>"
