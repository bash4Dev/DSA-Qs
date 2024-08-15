const mainFunction = (cTemp = 0) => {
    let hTemp = ((cTemp * 9) / 5) + 32;

    console.log(`Temperature in Celsius: ${cTemp} degrees.`)
    console.log(`Temperature in Fahrenheit: ${hTemp} degrees.`)
}

const btn_1 = document.getElementById("btn1").addEventListener("click", ()=>{
    console.log(mainFunction(10));
});

const btn_2 = document.getElementById("btn2").addEventListener("click", ()=>{
    console.log(mainFunction(20));
});

const btn_3 = document.getElementById("btn3").addEventListener("click", ()=>{
    console.log(mainFunction(30));
});

const btn_4 = document.getElementById("btn4").addEventListener("click", ()=>{
    console.log(mainFunction());
});