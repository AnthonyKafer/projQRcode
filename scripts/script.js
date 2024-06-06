const btn = document.querySelector("button")
const inputValue = document.querySelector("#inputText")
const container = document.querySelector(".mainContainer")
const qrCode = document.querySelector("#qrCode img")


function generateCode(){
    inputData = inputValue.value

    if(!inputData) return

    btn.innerHTML = "Gerando o QRcode!"
    qrCode.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputData}`
    container.classList.add("active")
    qrCode.addEventListener("load", ()=>{
        btn.innerHTML = "QRcode Gerado!"
    })
    console.log(inputData)
}

btn.addEventListener("click", ()=>{
    generateCode()
})

inputValue.addEventListener("keydown", (e)=>{
    if (e.code === "Enter")
    generateCode()
})

inputValue.addEventListener("keyup", ()=>{
    if(!inputValue.value){
        btn.innerHTML = "Gerar QRcode!"
        container.classList.remove("active")
    }
})