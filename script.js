/*PASCALL ✨*/
let p2 = [128, 64, 32, 16, 8, 4, 2, 1]
let ip = 192168010095
let mask = 9
let ip1 = (ip - ip %1000000000 )/ 1000000000// później po prostu nie zaokrąglaj bo dla 1 w 168 w dół a 5 w góre więc po prostu odejmuj reszte zroibone juz ale sprawdz reszte
let ip2 = Math.round(ip /1000000 - ip1 * 1000)//moze tablice
let ip3 = Math.round(ip /1000 - (ip1 * 1000 + ip2)* 1000)
let ip4 = ip % 1000
let maskDecimal = 0
let ipsieci = 0
let ipsiecibin = [[],[],[],[]]
let ipbroadcast
let ipbin = [[],[],[],[]]
let maskbin = [[],[],[],[]]
let ipbroadcastbin = 0
let one = 0

function IpToBin(ip1, ip2, ip3, ip4){
    for(let i = 0; i<4;i++){
        let toIp = 0
        for(let j = 0; j < p2.length; j++){
            if(toIp + p2[j] <= (function(){switch (i){case 0: return ip1; case 1: return ip2; case 2: return ip3; case 3: return ip4;}})()){
                toIp += p2[j]
                ipbin[i][j] = 1
                console.log()
            }else{
                ipbin[i][j] = 0
            }
        }
        
    }
}

function MaskToBin(mask) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++){
            one++
            if (one <= mask){
                maskbin[i][j] = 1
            }else{
                maskbin[i][j] = 0
            }
        }
    }
}

function MaskToDecimal(maskbin) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            if (maskbin[i][j] == 1) {
                maskDecimal += p2[j]
            }
        }
        maskDecimal *= 1000
    }
    maskDecimal /= 1000
}

function FirstIp(ipbin, maskbin) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            ipsiecibin[i][j] = ipbin[i][j] * maskbin[i][j]
        }
    }
    console.log(ipsiecibin)
    console.log(maskbin)
    console.log(ipsiecibin)
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            if (ipsiecibin[i][j] == 1) {
                ipsieci += p2[j]
            }
        }
        ipsieci *= 1000
    }
    ipsieci /= 1000
}

IpToBin(ip1, ip2, ip3, ip4)
MaskToBin(mask)
MaskToDecimal(maskbin)
FirstIp(ipbin, maskbin)

let mask1 = (maskDecimal - maskDecimal %1000000000 )/ 1000000000
let mask2 = maskDecimal /1000000 - mask1 * 1000
let mask3 = maskDecimal /1000 - (mask1 * 1000 + mask2)* 1000
let mask4 = maskDecimal % 1000
let ipsieci1 = (ipsieci - ipsieci %1000000000 )/ 1000000000
let ipsieci2 = ipsieci /1000000 - ipsieci1 * 1000
let ipsieci3 = ipsieci /1000 - (ipsieci1 * 1000 + ipsieci2)* 1000
let ipsieci4 = ipsieci % 1000

console.log(`Adres ip: ${ip1}.${ip2}.${ip3}.${ip4}`)
console.log(`Maska: /${mask} = ${mask1}.${mask2}.${mask3}.${mask4}`)
console.log(`Adres sieci: ${ipsieci1}.${ipsieci2}.${ipsieci3}.${ipsieci4}`)
console.log(`Adres broadcast: ${ipbroadcast}`)
//Funckja do: Bin -> Dec uniwersalnie
//Funckja do: Dec-> Bin uniwersalnie