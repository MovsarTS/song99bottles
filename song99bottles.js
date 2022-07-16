function generateSingleStanza(number) {
    for (let i = -1; number > i; number--){
        if (number === 11 || number === 12 || number === 13 || number === 14) {
        console.log(`${number} бутылок пива на стене, ${number} бутылок пива! Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене`)
        } else if (number % 10 === 1) {
        console.log(`${number} бутылка пива на стене, ${number} бутылка пива! Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене`)
        } else if (number % 10 === 2) {
        console.log(`${number} бутылки пива на стене, ${number} бутылки пива! Возьми одну, пусти по кругу, ${number - 1} бутылка пива на стене`)
        } else if (number % 10 === 3 || number % 10 === 4) {
        console.log(`${number} бутылки пива на стене, ${number} бутылки пива! Возьми одну, пусти по кругу, ${number - 1} бутылки пива на столе`)
        } else if (number % 10 === 5) {
        console.log(`${number} бутылок пива на стене, ${number} бутылок пива! Возьми одну, пусти по кругу, ${number - 1} бутылки пива на столе`)
        } else if (number === 0) {
        console.log(`Нет бутылок пива на стене! Нет бутылок пива!
        Пойди в магазин и купи ещё (или Пойди в магазин и стяни ещё), 0 бутылок пива на стене!`)
        } else {
        console.log(`${number} бутылок пива на стене, ${number} бутылок пива! Возьми одну, пусти по кругу, ${number - 1} бутылок пива на стене`)
        }
    }
}
function generateSongText(){
    return generateSingleStanza(99)
}
generateSongText()