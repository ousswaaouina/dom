let heart=document.getElementsByClassName("heart_btn");
let plus_btn=document.getElementsByClassName("plus-btn")
let Quant=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")
let finalPrice=document.getElementById("finalPrice")
let prices=[1379,176,249];
let Item=document.getElementsByClassName("Item")
let deletee=document.getElementsByClassName("delete")
for (let index = 0; index < heart.length; index++) {
    // Heart Button
    heart[index].addEventListener("click",function(){
        if(heart[index].style.color=="red"){
            heart[index].style.color="black"
        }
        else{
            heart[index].style.color="red"
        }
    })
    // Plus Button
    plus_btn[index].addEventListener("click",function(){
        Quant[index].value=Number(Quant[index].value)+1
        finalPrice.value=Number(finalPrice.value)+prices[index]
    })

    // Minus Button
    minus_btn[index].addEventListener("click",function(){
        if(Number(Quant[index].value)>1){
            Quant[index].value=Number(Quant[index].value)-1
            finalPrice.value=Number(finalPrice.value)-prices[index]*(Number(Quant[index].value))
        }
        

    })
    // Delete Button
    deletee[index].addEventListener("click",function(){
        Item[index].style.display="none"
        finalPrice.value=Number(finalPrice.value)-prices[index]*(Number(Quant[index].value))
    })
}