const td1 = document.getElementById('td1')
const td2 = document.getElementById('td2')
const td3 = document.getElementById('td3')
const td4 = document.getElementById('td4')
const td5 = document.getElementById('td5')
function skrypt(){
    const h = document.getElementById('inpL').value
    th1.style.backgroundColor = `hsl(${h},100%,50%)`
    td2.style.backgroundColor = `hsl(${h},80%,50%)`
    td3.style.backgroundColor = `hsl(${h},60%,50%)`
    td4.style.backgroundColor = `hsl(${h},40%,50%)`
    td5.style.backgroundColor = `hsl(${h},20%,50%)`
}