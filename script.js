let p2 = [128, 64, 32, 16, 8, 4, 2, 1]
let ip = 192168010095
let mac = 24
let ip1 = (ip - ip %1000000000 )/ 1000000000// później po prostu nie zaokrąglaj bo dla 1 w 168 w dół a 5 w góre więc po prostu odejmuj reszte zroibone juz ale sprawdz reszte
let ip2 = Math.round(ip /1000000 - ip1 * 1000)//moze tablice
let ip3 = Math.round(ip /1000 - (ip1 * 1000 + ip2)* 1000)
let ip4 = ip % 1000
let ipsieci
let ipsiecibin = [[],[],[],[]]

function IpToBin(ip1, ip2, ip3, ip4){
    for(let i = 0; i<4;i++){
        let toIp = 0
        for(let j = 0; j < p2.length; j++){
            if(toIp + p2[j] <= (function(){switch (i){case 0: return ip1; case 1: return ip2; case 2: return ip3; case 3: return ip4;}})()){
                toIp += p2[j]
                ipsiecibin[i][j] = 1
                console.log()
            }else{
                ipsiecibin[i][j] = 0
            }
        }
        
    }
}

IpToBin(ip1, ip2, ip3, ip4)
console.log(`Adres ip: ${ip1}.${ip2}.${ip3}.${ip4}`)
console.log(`Maska: /${mac}`)
console.log(`Adres sieci: ${ipsiecibin}`)