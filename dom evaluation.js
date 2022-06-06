document.querySelector("form").addEventListener("submit",myFunction);
function myFunction(event){
    event.preventDefault();
    let Name=document.querySelector("#name").value
    let EmployeeID=document.querySelector("#employeeID").value
    let Department=document.querySelector("#department").value
    let Experienceinyears=document.querySelector("#exp").value
    let Emailaddress=document.querySelector("#email").value
    let Mobilenumber=document.querySelector("#mbl").value
    console.log(Name,EmployeeID,Department,Experienceinyears,Emailaddress,Mobilenumber);
    var tr=document.createElement("tr");
    var td1=document.createElement("td");
    td1.innerText=Name;
    var td2=document.createElement("td");
    td2.innerText=EmployeeID;
    var td3=document.createElement("td");
    td3.innerText=Department;
    var td4=document.createElement("td");
    td4.innerText=Experienceinyears;
    var td5=document.createElement("td");
    td5.innerText=Emailaddress;
    var td6=document.createElement("td");
    td6.innerText=Mobilenumber;
    if(Experienceinyears<1){
        td7.innerText="Fresher";
        td7.style.color="yellow";
    }
    else if(Experienceinyears>=2 && Experienceinyears<=5){
        td7.innerText="Junior";
        td7.style.color="green";
    }
    else{
        td7.innerText="Senior";
        td7.style.color="blue";
    }
    var td7=document.createElement("td");
    td7.innerText=Role;
    var td8=document.createElement("td");
    td8.innerText="<button onclick='deleteRow(this)'>Delete</button>";

    tr.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(tr);

}