
document.write("separate even numbers of array"+"<br>")
document.write("------------------------------"+"<br>")

var even=[2,35,57,89,10,30,32,40,100]
var b=[];
for(let i=0;i<=even.length-1;i++){
    if(even[i]%2==0){
        b.push(even[i])
    }
}
document.write(b+"<br>")



