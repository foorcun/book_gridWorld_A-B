/* buraya javascritp kodlarımız gelecek - google drive boş dosya upload etmiyor die bir yorum bu */



//state objects
var stateArray = [];


for (let index = 0; index < 25; index++) {

    stateArray[index] = new State(index);


}





//reware data
var rewardData = [
    [-1, -1, 0, 0],
    [10, 10, 10, 10],
    [0, -1, 0, 0],
    [5, 5, 5, 5],
    [0, -1, -1, 0],

    [-1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, -1, 0],

    [-1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, -1, 0],

    [-1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, -1, 0],

    [-1, 0, 0, -1],
    [0, 0, 0, -1],
    [0, 0, 0, -1],
    [0, 0, 0, -1],
    [0, 0, -1, -1]

]


//next stateler
var nextState = [
    [0, 0, 1, 5],
    [21, 21, 21, 21],
    [1, 2, 3, 7],
    [13, 13, 13, 13],
    [3, 4, 4, 9],

    [5, 0, 6, 10],
    [5, 1, 7, 11],
    [6, 2, 8, 12],
    [7, 3, 9, 13],
    [8, 4, 9, 14],

    [10, 5, 11, 15],
    [10, 6, 12, 16],
    [11, 7, 13, 17],
    [12, 8, 14, 18],
    [13, 9, 14, 19],

    [15, 10, 16, 20],
    [15, 11, 17, 21],
    [16, 12, 18, 22],
    [17, 13, 19, 23],
    [18, 14, 19, 24],

    [20, 15, 21, 20],
    [20, 16, 22, 21],
    [21, 17, 23, 22],
    [22, 18, 24, 23],
    [23, 19, 24, 24]
]



/* function valueFunc(stateNO, ust, alt, sag, sol) {

    var sonuc = 0;
    var reward = 0;

    valueUssuler = [ust, alt, sag, sol]

    for (let index = 0; index < valueUssuler.length; index++) {

        sonuc = sonuc + (1 / 4) * (reward + 0.9 * (valueUssuler[index]));


    }



    var sonucRounded = Math.round(sonuc * 10) / 10



    return sonucRounded;

}


//state 12 nin durumu
var sonuc = valueFunc(12, 2.3, -0.4, 0.4, 0.7);
console.log(sonuc);
 */






function valueFunc(nextState, rewardData) {


    var sonuc = 0;

    var stateUssuler = nextState;
    //console.log(stateArray[stateUssuler[0]].no);
    var reward = rewardData;


    for (let index = 0; index < stateUssuler.length; index++) {

        sonuc = sonuc + (1 / 4) * (reward[index] + 0.9 * (stateArray[stateUssuler[index]].value));


    }




    //var sonucRounded = Math.round(sonuc * 10) / 10


    // return sonucRounded;

    return sonuc;

}






//state 0

sonuc = valueFunc(nextState[0], rewardData[0]);
//console.log(sonuc);

//state 1

sonuc = valueFunc(nextState[1], rewardData[1]);
//console.log(sonuc);





function sonuclarHesap() {

    var sonuclar = [];

    for (let index = 0; index < stateArray.length; index++) {

        var sonuc = valueFunc(nextState[index], rewardData[index]);
        stateArray[index].value = sonuc;
        sonuclar.push(sonuc);

    }
    return sonuclar

}

var sonuclar = sonuclarHesap()

//console.log(sonuclar)



var iterasyon = 100;
for (let index = 0; index < iterasyon; index++) {
    sonuclar = sonuclarHesap()


    //console.log("bunlar sonuclar - > ",sonuclar)
    //console.log(sonuclar)
}

//console.log(sonuclar[1]);



for (let i = 0; i < sonuclar.length; i++) {

    sonuclar[i] = Math.round(sonuclar[i] * 10) / 10



}

// hesaplar ve iterasyonu yaparken yuvarlama yapmıycaz, sadece en son sonucta tek hane ye indircek bir yuvarlama o kadar
console.log("Rounded soncular: ", sonuclar);














//birinci satır
//state 0 action sonucu gelinen stateler
let state0North = stateArray[0].no
let state0South = stateArray[5].no
let state0East = stateArray[1].no
let state0West = stateArray[0].no


//state1 action sonucu gelinen stateler
let state1North = stateArray[1].no
let state1South = stateArray[6].no
let state1East = stateArray[2].no
let state1West = stateArray[0].no


//state2 action sonucu gelinen stateler
let state2North = stateArray[2].no
let state2South = stateArray[7].no
let state2East = stateArray[3].no
let state2West = stateArray[1].no


//state3 action sonucu gelinen stateler
let state3North = stateArray[3].no
let state3South = stateArray[8].no
let state3East = stateArray[4].no
let state3West = stateArray[2].no

//state4 action sonucu gelinen stateler
let state4North = stateArray[4].no
let state4South = stateArray[9].no
let state4East = stateArray[4].no
let state4West = stateArray[3].no




//ikinci satır
//state5 action sonucu gelinen stateler
let state5North = stateArray[0].no
let state5South = stateArray[10].no
let state5East = stateArray[6].no
let state5West = stateArray[5].no


//state6 action sonucu gelinen stateler
let state6North = stateArray[1].no
let state6South = stateArray[11].no
let state6East = stateArray[7].no
let state6West = stateArray[5].no



//state7 action sonucu gelinen stateler
let state7North = stateArray[2].no
let state7South = stateArray[12].no
let state7East = stateArray[8].no
let state7West = stateArray[6].no


//state8 action sonucu gelinen stateler
let state8North = stateArray[3].no
let state8South = stateArray[13].no
let state8East = stateArray[9].no
let state8West = stateArray[7].no

//state9 action sonucu gelinen stateler
let state9North = stateArray[4].no
let state9South = stateArray[14].no
let state9East = stateArray[9].no
let state9West = stateArray[8].no


//ucuncu satır
//state10 action sonucu gelinen stateler
let state10North = stateArray[5].no
let state10South = stateArray[15].no
let state10East = stateArray[11].no
let state10West = stateArray[10].no


//state11 action sonucu gelinen stateler
let state11North = stateArray[6].no
let state11South = stateArray[16].no
let state11East = stateArray[12].no
let state11West = stateArray[10].no

//state12 action sonucu gelinen stateler
let state12North = stateArray[7].no
let state12South = stateArray[17].no
let state12East = stateArray[13].no
let state12West = stateArray[11].no

//state13 action sonucu gelinen stateler
let state13North = stateArray[8].no
let state13South = stateArray[18].no
let state13East = stateArray[14].no
let state13West = stateArray[12].no

//state14 action sonucu gelinen stateler
let state14North = stateArray[9].no
let state14South = stateArray[19].no
let state14East = stateArray[14].no
let state14West = stateArray[13].no


//satır 4
//state15 action sonucu gelinen stateler
let state15North = stateArray[10].no
let state15South = stateArray[20].no
let state15East = stateArray[16].no
let state15West = stateArray[15].no

//state16 action sonucu gelinen stateler
let state16North = stateArray[11].no
let state16South = stateArray[21].no
let state16East = stateArray[17].no
let state16West = stateArray[15].no

//state17 action sonucu gelinen stateler
let state17North = stateArray[12].no
let state17South = stateArray[22].no
let state17East = stateArray[18].no
let state17West = stateArray[16].no

//state18 action sonucu gelinen stateler
let state18North = stateArray[13].no
let state18South = stateArray[23].no
let state18East = stateArray[19].no
let state18West = stateArray[17].no

//state19 action sonucu gelinen stateler
let state19North = stateArray[14].no
let state19South = stateArray[24].no
let state19East = stateArray[19].no
let state19West = stateArray[18].no


//satır5
//state20 action sonucu gelinen stateler
let state20North = stateArray[15].no
let state20South = stateArray[20].no
let state20East = stateArray[21].no
let state20West = stateArray[20].no

//state21action sonucu gelinen stateler
let state21North = stateArray[16].no
let state21South = stateArray[21].no
let state21East = stateArray[22].no
let state21West = stateArray[20].no

//state22action sonucu gelinen stateler
let state22North = stateArray[17].no
let state22South = stateArray[22].no
let state22East = stateArray[23].no
let state22West = stateArray[21].no

//state23action sonucu gelinen stateler
let state23North = stateArray[18].no
let state23South = stateArray[23].no
let state23East = stateArray[24].no
let state23West = stateArray[22].no

//state24action sonucu gelinen stateler
let state24North = stateArray[19].no
let state24South = stateArray[24].no
let state24East = stateArray[24].no
let state24West = stateArray[23].no