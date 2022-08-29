const sign = document.getElementById('unit');
const check = document.getElementById('check');
const temp = document.getElementById('temperature');

export const convert = () => {
    if(check.checked == true)
    {
        const newF = parseFloat(parseFloat(temp.textContent)*(9/5) + 32.00); 
        // °F = (9/5) x °C + 32
        // °C= (5/9) x (°F - 32)
        temp.textContent = newF.toPrecision(2);
        sign.textContent = "°F";
    }
    else 
    {
        const newC = parseFloat((5/9) * (parseFloat(temp.textContent) - 32.00)); 
        // °F = (9/5) x °C + 32
        // °C= (5/9) x (°F - 32)
        temp.textContent = newC.toPrecision(2);
        sign.textContent = "°C";
    }
}




