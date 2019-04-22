// const fs = require('fs');
let XLSX = require('xlsx')
// const args = process.argv
/*
const local = 'C:/Users/ricardo.hernandez/Nodejs/Rocketbot/demo.js'
console.log(process.argv[2][0]);

var buf = fs.readFileSync("C:/Users/ricardo.hernandez/Nodejs/Rocketbot/clientes.xlsx");
var wb = XLSX.read(buf, {type:'buffer'});

console.log(wb)
*/
const cobranza = XLSX.readFile('C:/Users/ricardo.hernandez/Nodejs/Rocketbot/cobranza.xlsx');
const hojaCobranza = cobranza.Sheets[cobranza.SheetNames[0]];
let rangoCobranza = XLSX.utils.decode_range(hojaCobranza['!ref']);

let arrayC = []

for (let rowNum = rangoCobranza.s.r; rowNum <= rangoCobranza.e.r; rowNum++) {
    // Example: Get second cell in each row, i.e. Column "B"
    const CellB = hojaCobranza[XLSX.utils.encode_cell({r: rowNum, c: 1})] ? hojaCobranza[XLSX.utils.encode_cell({r: rowNum, c: 1})].v : false;
    // NOTE: secondCell is undefined if it does not exist (i.e. if its empty)
    arrayC.push(CellB); // secondCell.v contains the value, i.e. string or number
   // console.log(CellB)
}

const clientes = XLSX.readFile('C:/Users/ricardo.hernandez/Nodejs/Rocketbot/clientes.xlsx');
const hojaClientes = clientes.Sheets[clientes.SheetNames[0]];
let rangoClientes = XLSX.utils.decode_range(hojaClientes['!ref']);

let arrayE = []

for (let rowNum = rangoClientes.s.r; rowNum <= rangoClientes.e.r; rowNum++) {
    // Example: Get second cell in each row, i.e. Column "B"
    const CellA = hojaClientes[XLSX.utils.encode_cell({r: rowNum, c: 0})].v;
    const CellB = hojaClientes[XLSX.utils.encode_cell({r: rowNum, c: 1})].v;
    // NOTE: secondCell is undefined if it does not exist (i.e. if its empty)
   // console.log(CellA,CellB); // secondCell.v contains the value, i.e. string or number
   if(arrayC.includes(CellA)){
    arrayE.push(CellB)
   }
}

console.log(arrayE);