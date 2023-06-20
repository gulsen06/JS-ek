/* -------------------------------------------------------------------------- */
/*                                SHORT CIRCUIT                               */
/* -------------------------------------------------------------------------- */

// Elektrik devrelerindeki kisa devre örenegi gibi
//kisa devre operatörleri= &&,||,!
// AND :Hersey true olmali bir false varsa false döner.Ilk gördügü False degerini gönsterirHepsitrue ise  son true olani dönderiyor
//OR: ilk gördügü tru degerini

console.log("isci" || "memur" || "serbest meslek");
const personel = {
  name: "batuhan",
  age: "34",
  job: "",
  drivingLisence: true,
};
console.log(personel.job || "issiz");
console.log(false || "ise alinamazsiniz.is kriterlerine ugun degildiniz");

/* -------------------------------------------------------------------------- */
/*                           SELF INVOKING FUNCTION                           */
/* -------------------------------------------------------------------------- */
//!Bu anonüm bir fonksiyondur  ve kendi kendini cagirir .sondaki parantez kendini cagirmasini saglar
(function () {
  console.log("kendini cagiran  fonksiyonicindeyim");
})();
//bunlara parametre gönderilebillr mi?
(function (x, y) {
  console.log(`degerlerin toplami: ${x + y}`);
})(15, 20);

/*.........................................................................*/
/* ------------------------- Varlik yokluk kontrolu ------------------------- */
const isim = "beyza";
if (isim) {
  console.log(`${isim} hosgeldin`);
}
if (personel.job) {
  console.log("personelimizin isi:", personel.job);
} else {
  console.log("issiz");
}
// -----------------------------------------------------------------------------------
let a = 0,
  b = 20,
  c = 100;
console.log(a, b, c);
/*--------------------------------------------------------------------------*/
/* -------------------------------------------------------------------------- */
/*                              OPTIONAL CHAINING     ?.                        */
/* -------------------------------------------------------------------------- */
const ad = "nermin";
console.log(ad?.fulname?.());
console.log("bu satirdan cikmak zorundayim");
const eleman = null;
console.log(eleman?.job);
/* -------------------------------------------------------------------------- */
/*                                   CALBAC k                                  */
/* -------------------------------------------------------------------------- */
const toplam = (a, b) => {
  return a + b;
};

const numbers = (a, b, toplam) => {
  return toplam(a, b);
};
console.log(numbers(5, 7, toplam));
/*------------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------- */
/*                                   CLOSURE                                  */
/* -------------------------------------------------------------------------- */
const dis = (disaGönderilenDegisken) => {
  return function ic(iceGönderilenDegisken) {
    console.log(disaGönderilenDegisken);
    console.log(iceGönderilenDegisken);
  };
};
const fonksiyn = dis(50);
fonksiyn(100);
dis(50)(60);
function enDis(x) {
  return function ic(y) {
    return function enIc(z) {
      console.log(x + y + z);
    };
  };
}
enDis(40)(50)(60);
