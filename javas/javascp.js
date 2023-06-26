function myfunction()
{
   var x = document.getElementById("diplays");
    if((x.style.display) =="none")
    {
        x.style.display="block";
    }
    else
    {
        x.style.display="none";
    }
}
function emp()
{   
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var email = document.getElementById("email");
    var table = document.getElementById("tableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML= name.value;
    row.insertCell(1).innerHTML= number.value;
    row.insertCell(2).innerHTML= email.value;
    row.insertCell(3).innerHTML='<button class="onedit">edit</button> <button class="ondelete">delete</button>';
}
$(document).on('click','.ondelete',function(){
    $(this).closest('tr').remove();
})
//hover
    $(document).ready(function(){
        $("#name").hover(function(){
            var ress=document.getElementById("ress");
            ress.innerText="this name field is important"},
        function(){
            var ress=document.getElementById("ress");
            ress.innerText="";
        });
    })    