let nasigoreng = 25000;
let miegoreng = 22000;
let capcay = 32000;
let diskon = '10%';
let uang = 100000;
let totalharga = nasigoreng+miegoreng+capcay;
let potongan = totalharga * 10/100;
let hargadiskon = totalharga - potongan;
let kembalian = uang - hargadiskon;


console.log("Harga Nasi Goreng = Rp.",nasigoreng);
console.log("Harga Mie Goreng = Rp.",miegoreng);
console.log("Harga CapCay = Rp.",capcay);
console.log("Harga Total = Rp.",totalharga);
console.log("Diskon =",diskon);
console.log("Harga Setelah Diskon = Rp.",hargadiskon);
console.log("Pembayaran = Rp.",uang);
console.log("Kembalian = Rp.",kembalian);