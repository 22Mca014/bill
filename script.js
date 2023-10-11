
// Define the variables and functions for calculating totals
let q5 = document.getElementById('q5');
let q6 = document.getElementById('q6');
let q7 = document.getElementById('q7');
let q8 = document.getElementById('q8');
let r5 = document.getElementById('r5');
let r6 = document.getElementById('r6');
let r7 = document.getElementById('r7');
let r8 = document.getElementById('r8');
let t5 = document.getElementById('t5');
let t6 = document.getElementById('t6');
let t7 = document.getElementById('t7');
let t8 = document.getElementById('t8');
let output = document.getElementById('Result');

function total5() {
    let to5 = q5.value * r5.value;
    t5.value = to5;
}

function total6() {
    let to6 = q6.value * r6.value;
    t6.value = to6;
}

function total7() {
    let to7 = q7.value * r7.value;
    t7.value = to7;
}

function total8() {
    let to8 = q8.value * r8.value;
    t8.value = to8;
}

function Gtotal() {
    let gt = (parseFloat(t5.value) || 0) + (parseFloat(t6.value) || 0) + (parseFloat(t7.value) || 0) + (parseFloat(t8.value) || 0);
    output.textContent = gt;
}
