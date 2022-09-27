function clearfields(){

if(document.getElementById("field1").value ==""){
    alert("Fill all the Blanks");
        document.getElementById('field1').style.borderColor="red";
    return false;
}
else if(document.getElementById("field2").value =="")
{
    alert("Fill all the Blanks");
        document.getElementById('field2').style.borderColor="red";
    return false;
}
else
{
const myform = document.getElementById("contactform");
myform.addEventListener("submit",(e) => {
    e.preventDefault();
    alert("THANK YOU, Your Form has been Submitted, We will Contact you Soon");
});
}
document.getElementById("field1").value="";
document.getElementById("field2").value="";
document.getElementById("area").value="";
}
