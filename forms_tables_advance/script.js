
function showdata(){
    let name = document.getElementById("name").value
    let dob = document.getElementById("dob").value
    let hobby = document.getElementById("hobby").value
    let color = document.getElementById("color").value

    document.getElementById("showName").innerText = name
    document.getElementById("showDob").innerText = dob
    document.getElementById("showhobby").innerText = hobby
    document.getElementById("showcolor").innerText = color
    document.getElementById("colorbox").style.backgroundColor = color

    // 🍕 FAVORITE FOOD CODE (very easy)
    let foods = document.getElementsByClassName("inputcheckbox")
    let selectedFood = ""

    for (let i = 0; i < foods.length; i++) {
        if (foods[i].checked) {
            selectedFood += foods[i].value + ", "
        } 
    }

    document.getElementById("showfavfood").innerText = selectedFood
}


function savedata(){
    let name= document.getElementById("name").value
    let dob= document.getElementById("dob").value
    let hobby= document.getElementById("hobby").value
    let color= document.getElementById("color").value
    let foods = document.getElementsByClassName("inputcheckbox")
    let selectedFood = ""

    for (let i = 0; i < foods.length; i++) {
        if (foods[i].checked) {
            selectedFood += foods[i].value + " "
        } 
    }
    
    console.log(selectedFood)

    if(name == "" || dob =="" || hobby=="" || color=="" || color=="select" || selectedFood =="" ){
        alert("enter all details")
    }
    else{
        let table= document.getElementById("datatable")
        let row= table.insertRow()

        row.insertCell(0).innerHTML=name
        row.insertCell(1).innerHTML=dob
        row.insertCell(2).innerHTML=hobby
        row.insertCell(3).innerHTML=color
        row.insertCell(4).innerHTML=selectedFood

        document.getElementById("name").value=""
        document.getElementById("dob").value=""
        document.getElementById("hobby").value=""
        document.getElementById("color").value=""
        document.getElementById("colorbox").style.backgroundColor=""
        document.getElementById("showfavfood").value=""
    }

    
}