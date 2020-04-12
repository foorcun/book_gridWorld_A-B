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




    //var sonucRounded = Math.round(sonuc * 10) / 10 //bu aşama hesap aşaması burda yuvarlama yapamayız, en son yaparız


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











