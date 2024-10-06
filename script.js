/*PASCALL ✨*/
/*Debiloodporne ✨*/
let p2 = [128, 64, 32, 16, 8, 4, 2, 1]
let ip = 192168010095
let ipbin = [[],[],[],[]]
let mask = 0
let maskNum = 24
let maskbin = [[],[],[],[]]
let ipsieci = 0
let ipsiecibin = [[],[],[],[]]
let ipbroadcast = 0
let ipbroadcastbin = [[],[],[],[]]
let ones = 0
let first = 0
let last = 0
let numhosts = 2**(32 - maskNum) - 2
let numsubnets = 2**(32 - maskNum)

for (let i = 0; i < 4; i++) {
    for(let j = 0; j < 8; j++){
        ones++
        if (ones <= maskNum) {
            maskbin[i][j] = 1
        }else {
            maskbin[i][j] = 0
        }
    }
}

function DecToBin(decimal, bin){
    for(let i = 0; i<4;i++){
        let toIp = 0
        for(let j = 0; j < p2.length; j++){
            if(toIp + p2[j] <= (function(){switch (i){case 0: return Show(decimal).oktet1; case 1: return Show(decimal).oktet2; case 2: return Show(decimal).oktet3; case 3: return Show(decimal).oktet4;}})()){
                toIp += p2[j]
                bin[i][j] = 1
            }else{
                bin[i][j] = 0
            }
        }   
    }
    return bin
}

function BinToDec(bin, decimal){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            if(bin[i][j]==1){
                decimal+=p2[j]
            }
        }
        decimal *= 1000
    }
    decimal /= 1000
    return decimal
}

function AND(ipbin, maskbin){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            ipsiecibin[i][j] = ipbin[i][j] * maskbin[i][j]
        }
    }
    ipsieci = BinToDec(ipsiecibin, ipsieci)//podsieci uniwerslanie
    first = ipsieci + 1
}

function ORNEGATIVE(ipbin, maskbin){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            if(maskbin[i][j] == 1){
                maskbin[i][j] = 0
            } else{
                maskbin[i][j] = 1
            }
            if(ipbin[i][j] == 1 || maskbin[i][j] == 1){
                ipbroadcastbin[i][j] = 1
            } else {
                ipbroadcastbin[i][j] = 0
            }
        }
    }
    ipbroadcast = BinToDec(ipbroadcastbin, ipbroadcast)
    last = ipbroadcast - 1
}

function Show(dec) {
    let oktet1 = (dec - dec %1000000000 )/ 1000000000
    let oktet2 = Math.round(dec /1000000 - oktet1 * 1000)
    let oktet3 = Math.round(dec /1000 - (oktet1 * 1000 + oktet2)* 1000)
    let oktet4 = dec % 1000
    return {address: `${oktet1}.${oktet2}.${oktet3}.${oktet4}`, oktet1: oktet1, oktet2: oktet2, oktet3: oktet3, oktet4: oktet4}
}

ipbin = DecToBin(ip, ipbin)
mask = BinToDec(maskbin, mask) //to nie jest dobre bo dla wielu podsieci nie będzie juz uniwersalnie albo coś z this bo nie mozemy do kadego przypisywać chyba ze dane kazdej podsieci zapiszemy jako obiekt a w funkcji będziemy dal odpowiedniego elementu z obiektu przypisywac
AND(ipbin, maskbin)
ORNEGATIVE(ipbin, maskbin)

console.log(`Adres ip: ${Show(ip).address}`)
console.log(`Maska: /${maskNum} - ${Show(mask).address}`)
console.log(`Adres sieci: ${Show(ipsieci).address}`)
console.log(`Adres broadcast: ${Show(ipbroadcast).address}`)
console.log(`max liczba hostów w podsieci: ${numhosts}`)
console.log(`max liczb. podsieci: ${numsubnets}`)
console.log(`min host: ${Show(first).address}`)
console.log(`min host: ${Show(last).address}`)

let previous = document.querySelector(".previous-subnet")
let actual = document.querySelector(".actual-subnet")
let next = document.querySelector(".next-subnet")
let actualsubnet = 0
let subnets = []
let liczbapodsieci = 5 //nie moze przekroczyć maksymalnej
let podsieci = [[]] //na obiekty podsieci

for (let j = 0; j < liczbapodsieci; j++) {
    subnets[j] = `subnet ${j}`
}
//for less code smth with last name assign to next text
function subnetSwitch(subnets) {
    previous.addEventListener('click', () => {
        actualsubnet -= 1
        if(actual.textContent != "subnet 0"){
        previous.textContent = `${subnets[actualsubnet - 1]}`
        actual.textContent =  `${subnets[actualsubnet]}`
        next.textContent = `${subnets[actualsubnet + 1]}`
        }else{
            previous.textContent = ""
        }
    });
    next.addEventListener('click', () => {
        actualsubnet += 1
        previous.textContent = `${subnets[actualsubnet - 1]}`
        actual.textContent =  `${subnets[actualsubnet]}`
        next.textContent = `${subnets[actualsubnet + 1]}`
    });
}
function getIp() {
    ip = document.getElementById("ip").value;

}
subnetSwitch(subnets)
// function PODSIECI(numsubnets, numhosts) {
//     numsubnets++
//     podsieci[i] = podsiec = {
//         name: `podsiec${i}`,
//         ipsieci: ipsieci,
//         ipbroadcast: ORNEGATIVE(podsieci[i - 1].ipsieci, ),
//         hosts: numhosts
//     }  
// }

// PODSIECI(liczbapodsieci, numhosts)

// do {

// }while(enter || pdsieci => możliwe posieci)
// let userInput = prompt("Wpisz coś:");
// console.log(userInput);
// newmaska = maska + n
// newmaxlhost = 2^liczbapodsieci - 2
let title = document.querySelector(".title")
let star = document.querySelector(".star")
let calctext = document.querySelector(".calc-text")
let controlpanel = document.querySelector(".control-panel")
let est = document.querySelector(".est")

function intro(params) {
    
}
function scrollControl(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            est.style.color = "white"
        }else{
            est.style.color = "black"
        }
        if(window.scrollY > window.innerHeight * 90/100){
            title.style.color = "white"
            star.style.color = "white"
        }else{
            title.style.color = "black"
            star.style.color = "black"
        }
        if(window.scrollY > window.innerHeight * 70/100){
            calctext.style.transition = ".5s"
            calctext.style.opacity = "0"
            controlpanel.style.top = "-20vh"
            controlpanel.style.transform = "rotate(0deg)"
            controlpanel.style.filter = "blur(.5px)"
        }else{
            calctext.style.opacity = "1"
            controlpanel.style.top = "10vh"
            controlpanel.style.transform = "rotate(5deg)"
            controlpanel.style.filter = "blur(5px)"
        }
    });
}
scrollControl()
