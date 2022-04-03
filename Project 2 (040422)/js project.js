// Fungsi pemanggilan dengan innerHTML (jelaskan diakhir gak papa)
var sayHello = () => alert("Mari Kita Belajar JavaScript Bersama-sama");


// JAVASCRIPT OPERATION
document.write("<br><br> JAVASCRIPT OPERATION <br><br>"); //judul


// ARITMATIKA DENGAN CONSOLE.LOG
// Aritmatika console Secara Langsung
console.log("Penjumlahan : 5 + 10  adalah", 5 + 10);
console.log("Pengurangan : 15 - 10 adalah", 15 - 5);
console.log("Perkalian   : 2 x 7   adalah", 2 * 7);
console.log("Pembagian   : 18 / 3  adalah", 18 / 3);
console.log("Pangkat     : 3^3     adalah", 3 ** 3);
console.log("Sisa bagi   : sisa bagi 18 / 4 adalah", 18 % 4);


// Aritmatika console dengan fixed variable
console.log("ARITMATIKA DENGAN VARIABEL YANG TELAH DITENTUKAN");
console.log("x = 7 dan y = 2");
var x = 7;
var y = 2;
console.log("Penjumlahan : x + y adalah", x + y);
console.log("Pengurangan : x - y adalah", x - y);
console.log("Perkalian   : x * y adalah", x * y);
console.log("Pembagian   : x / y adalah", x / y);
console.log("Pangkat     : x^y   adalah", x ** y);
console.log("Sisa bagi   : sisa bagi x / y adalah", x % y);


// ARITMATIKA DENGAN DOCUMENT.WRITE
// Aritmatika docwrite secara langsung
document.write("ARITMATIKA SECARA LANGSUNG");
document.write("<br> Penjumlahan : 5 + 10  adalah ", 5 + 10);
document.write("<br> Pengurangan : 15 - 10 adalah ", 15 - 5);
document.write("<br> Perkalian   : 2 x 7   adalah ", 2 * 7);
document.write("<br> Pembagian   : 18 / 3  adalah ", 18 / 3);
document.write("<br> Pangkat     : 3^3     adalah ", 3 ** 3);
document.write("<br> Sisa bagi   : sisa bagi 18 / 4 adalah ", 18 % 4);


// Aritmatika docwrite dengan fixed variable
document.write("<br><br> ARITMATIKA DENGAN VARIABEL YANG TELAH DITENTUKAN");
document.write("<br> x = 7 dan y = 2");
var x = 7;
var y = 2;
document.write("<br> Penjumlahan : x + y adalah ", x + y);
document.write("<br> Pengurangan : x - y adalah ", x - y);
document.write("<br> Perkalian   : x * y adalah ", x * y);
document.write("<br> Pembagian   : x / y adalah ", x / y);
document.write("<br> Pangkat     : x^y   adalah ", x ** y);
document.write("<br> Sisa bagi   : sisa bagi x / y adalah ", x % y);


// PENUGASAN ATAU ASSIGNMENT
// Penugasan dengan console 
console.log("ASSIGNMENT ATAU PENUGASAN");
console.log("x = 12 dan y = 4");
var x = 12;
var y = 4;
console.log("Penjumlahan : x += y  adalah", x += y);
console.log("Pengurangan : x -= y  adalah", x -= y);
console.log("Perkalian   : x *= y  adalah", x *= y);
console.log("Pembagian   : x /= y  adalah", x /= y);
console.log("Pangkat     : x **= y adalah", x **= y);
console.log("Sisa bagi   : sisa bagi x / y adalah", x %= y);


// Penugasan dengan docwrite 
document.write("<br><br> ASSIGNMENT ATAU PENUGASAN");
document.write("<br> x = 12 dan y = 4");
var x = 12;
var y = 4;
document.write("<br> Penjumlahan : x += y  adalah ", x += y);
document.write("<br> Pengurangan : x -= y  adalah ", x -= y);
document.write("<br> Perkalian   : x *= y  adalah ", x *= y);
document.write("<br> Pembagian   : x /= y  adalah ", x /= y);
document.write("<br> Pangkat     : x **= y adalah ", x **= y);
document.write("<br> Sisa bagi   : sisa bagi x / y adalah ", x %= y);


// PERBANDINGAN ATAU COMPARISON
// Comparison dengan console
console.log("PERBANDINGAN ATAU COMPARISON");
console.log("7 == 7 atau 7 sama dengan 7              bernilai", 7 == 7);
console.log("7 != 7 atau 7 tidak sama dengan 7        bernilai", 7 != 7);
console.log("7 == 7 (dengan tipe string)              bernilai", 7 == "7");
console.log("21 === 25 atau 21 sama dengan 21         bernilai", 21 === 25);
console.log("21 !== 25 atau 21 tak sama dengan 25     bernilai", 21 !== 25);
console.log("21 === 21 (dengan tipe string)           bernilai", 21 === "21");
console.log("77 > 55 atau 77 lebih besar dari 55      bernilai", 77 > 55);
console.log("77 < 55 atau 77 lebih kecil dari 55      bernilai", 77 < 55);
console.log("22 >= 22 atau 22 lebih dari sama dgn 22  bernilai", 22 >= 22);
console.log("15 <= 15 atau 15 kurang dari sama dgn 15 bernilai", 22 <= 22);


// Comparison dengan docwrite
var x = 21
var y = 14
document.write("<br><br> PERBANDINGAN ATAU COMPARISON")
document.write("<br> x = 21 dan y = 14")
document.write("<br> 21 == 14 atau 21 sama dengan 14          bernilai ", x == y);
document.write("<br> 21 != 14 atau 21 tidak sama dengan 14    bernilai ", x != y);
document.write("<br> 21 === 14 atau 21 sama dengan 14         bernilai ", x === y);
document.write("<br> 21 !== 14 atau 21 tak sama dengan 14     bernilai ", x !== y);
document.write("<br> 21 > 14 atau 21 lebih besar dari 14      bernilai ", x > y);
document.write("<br> 21 < 14 atau 21 lebih kecil dari 14      bernilai ", x < y);
document.write("<br> 21 >= 14 atau 21 lebih dari sama dgn 14  bernilai ", x >= y);
document.write("<br> 21 <= 14 atau 21 kurang dari sama dgn 14 bernilai ", x <= y);


// IF ELSE dengan innerHTML
function bebas(){
    var x;
    var y=Number(document.getElementById("nomor").value);
    if (isNaN (y)) {
        x = "tepat sekali";
    } else { 
        x = (y < 10 )?"salah":"benar";
    }
    document.getElementById("coba").innerHTML = x;
}
bebas();


// STRING
// String dengan console
var a = "aku"
var b = "kamu"
var c = "dia"
var d = "sayang"
console.log("STRING DENGAN CONSOLE");
console.log("a = aku, b = kamu, c = dia, d = sayang");
console.log("Note : Semua variable string");
console.log("a + d + b            HASILNYA", a + d + b); // tanpa space
console.log("tapi + b + d + c     HASILNYA", "tapi " + b + " " + d + " " + c ); //dengan space
console.log("eh + c + nya + d + a HASILNYA", "eh " + c + "nya" + " " + d + " " + a); //dengan space dan tambahan kata


// String dengan docwrite
document.write("<br><br> STRING DENGAN CONSOLE");
document.write("<br> a = aku, b = kamu, c = dia, d = sayang");
document.write("<br> Note : Semua variable string");
document.write("<br> a + d + b        HASILNYA ", a + d + b); // tanpa space
document.write("<br> tapi + b + d + c     HASILNYA ", "tapi " + b + " " + d + " " + c ); //dengan space
document.write("<br> eh + c + nya + d + a HASILNYA ", "eh " + c + "nya" + " " + d + " " + a); //dengan space dan tambahan kata


// TYPE OF OPERATOR
// Typeof di console
console.log("Typeof dalam console"); 
console.log(typeof(12));
console.log(typeof("12"));
console.log(typeof("yaho"));
console.log(typeof(true));


// Typeof di docwrite
document.write("<br><br> TYPEOF DALAM CONSOLE"); 
document.write("<br>", typeof(12));
document.write("<br>", typeof("12"));
document.write("<br>", typeof("yaho"));
document.write("<br>", typeof(true));


// JAVASCRIPT FUNCTION
document.write("<br><br><br><br> JAVASCRIPT FUNCTION <br><br>"); //judul


// Contoh fungsi array dengan innerHTML (program input barang)
var dataBarang = [
    "Buku Tulis",
    "Pensil",
    "Spidol"
];

function showBarang(){
    var listBarang = document.getElementById("list-barang");

    // clear list barang
    listBarang.innerHTML = "";

    // cetak semua barang
    for(let i = 0; i < dataBarang.length; i++){
        var btnEdit = "<a href='#' onclick='editBarang("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBarang("+i+")'>Hapus</a>";

        listBarang.innerHTML += "<li>" + dataBarang[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>";        
    }
}

function addBarang(){
    var input = document.querySelector("input[name=barang]");
    dataBarang.push(input.value);
    showBarang();
}

function editBarang(id){
    var newBarang = prompt("Nama baru", dataBarang[id]);
    dataBarang[id] = newBarang;
    showBarang();
}

function deleteBarang(id){
    dataBarang.splice(id, 1);
    showBarang();
}
showBarang();


// Tabel dinamis menggunakan looping dengan innerHTML
function showTable(){
    var table = document.getElementById("content_table");
    table.innerHTML = "";

    for(var i = 1; i <= 15; i++){
        table.innerHTML += "<tr><td>"+i+"<td>Nama"+i+"<td>Random"+i*100,"</tr></td>";
    }
}
showTable();


// Default
document.write("Cara Default : <br>"); //judul
function say(){
	console.log("Halo Semuanya!");
	document.write("Halo Semuanya! <br><br>");
}
say();


// Fungsi dengan ekspresi (variable)
document.write("Fungsi dengan ekspresi (variable) : <br>"); //judul
var katakan = function(){
	console.log("Halo Teman-Teman!");
	document.write("Halo Teman-Teman! <br><br>");
}
katakan();


// Fungsi dengan tanda panah (=>)
document.write("Fungsi dengan tanda panah : <br>"); //judul
var ucapkan = () =>{
	console.log("Hello Sahabat!");
	document.write("Hello Sahabat! <br>");
}
ucapkan();

var hello = () => document.write("Hello World! <br><br>"); // Jika ingin menuliskannya dalam 1 baris
hello();


// Fungsi dengan parameter
document.write("Fungsi dengan parameter : <br>"); //judul
function kali(a, b){
	hasil_kali = a * b;
	document.write("Hasil a kali b = " + hasil_kali + "<br><br>");
	console.log("Hasil a kali b = " + hasil_kali);
}
kali(5, 10);


// Fungsi return dengan innerHTML
var x = myFunction(4, 3);
document.getElementById("percobaan").innerHTML = x;

function myFunction(a, b){
    return a * b;
}
