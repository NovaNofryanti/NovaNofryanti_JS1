// Pernyataan if, else, dan nested if
var nilai = 85;

if (nilai >= 90) {
    console.log("Nilai A");
  } else if (nilai >= 80) {
    console.log("Nilai B");
  } else if (nilai >= 60) {
    console.log("Nilai C");
  } else {
    console.log("Nilai D");
}

// Switch case
var makanan = "Ayam";

switch (makanan) {
    case "Ayam":
        console.log("Ayam Bakar");
        break;
    case "Ikan":
        console.log("ikan Gulai");
        break;
    default:
        console.log("Makanan tidak ready");
}

// For statement
for (var j = 1; j <= 5; j++) {
    console.log("Makanan ready" + j);
}

// While 
var j = 1;
while (j <= 5) {
    console.log("Makanan ready" + j);
    j++;
}

// Do-while 
var j = 1;
do {
    console.log("Makanan ready" + j);
    j++;
} while (j <= 5);

// Function
function tambah(m, n) {
    return m + n;
}

var hasil = tambah(2, 3);
console.log("Hasil penambahan: " + hasil);