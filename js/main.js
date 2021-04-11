document.addEventListener('DOMContentLoaded',() =>{


	const input_length = document.getElementById('input_length');
	const resultado_length = document.getElementById('resultado_length');
	const btn_length = document.getElementById('btn_length');
	let cadena = "";
	btn_length.addEventListener('click', () => {
		cadena = input_length.value;

		resultado_length.innerHTML = cadena.length;
	});



	const input_concat = document.getElementById('input_concat');
	const input_concat2 = document.getElementById('input_concat2');
	const resultado_concat = document.getElementById('resultado_concat');
	const btn_concat = document.getElementById('btn_concat');
	let cadena_concat = "";
	btn_concat.addEventListener('click', () => {
		cadena_concat = input_concat.value;

		resultado_concat.innerHTML = cadena_concat.concat(input_concat2.value);
	});




	const input_startsWith = document.getElementById('input_startsWith');
	const input_startsWith2 = document.getElementById('input_startsWith2');
	const resultado_startsWith = document.getElementById('resultado_startsWith');
	const btn_startsWith = document.getElementById('btn_startsWith');
	let cadena_startsWith = "";
	btn_startsWith.addEventListener('click', () => {
		cadena_startsWith = input_startsWith.value;

		resultado_startsWith.innerHTML = cadena_startsWith.startsWith(input_startsWith2.value);
	});



	const input_indexOf = document.getElementById('input_indexOf');
	const input_indexOf2 = document.getElementById('input_indexOf2');
	const resultado_indexOf = document.getElementById('resultado_indexOf');
	const btn_indexOf = document.getElementById('btn_indexOf');
	let cadena_indexOf = "";
	btn_indexOf.addEventListener('click', () => {
		cadena_indexOf = input_indexOf.value;

		resultado_indexOf.innerHTML = cadena_indexOf.indexOf(input_indexOf2.value);
	});



	const input_padStart = document.getElementById('input_padStart');
	const input_padStart2 = document.getElementById('input_padStart2');
	const resultado_padStart = document.getElementById('resultado_padStart');
	const btn_padStart = document.getElementById('btn_padStart');
	let cadena_padStart = "";
	btn_padStart.addEventListener('click', () => {
		cadena_padStart = input_padStart.value;

		resultado_padStart.innerHTML = cadena_padStart.padStart(10 ,input_padStart2.value);
	});



	const input_repeat = document.getElementById('input_repeat');
	const input_repeat2 = document.getElementById('input_repeat2');
	const resultado_repeat = document.getElementById('resultado_repeat');
	const btn_repeat = document.getElementById('btn_repeat');
	let cadena_repeat = "";
	btn_repeat.addEventListener('click', () => {
		cadena_repeat = input_repeat.value;
		let hola = "";
		resultado_repeat.innerHTML = cadena_repeat.repeat(input_repeat2.value);
	});



	const input_split = document.getElementById('input_split');
	const input_split2 = document.getElementById('input_split2');
	const resultado_split = document.getElementById('resultado_split');
	const btn_split = document.getElementById('btn_split');
	let cadena_split = "";
	btn_split.addEventListener('click', () => {
		cadena_split = input_split.value;
		let hola =cadena_split.split(",");
		resultado_split.innerHTML = hola[input_split2.value];
	});





	const input_substring = document.getElementById('input_substring');
	const input_substring2 = document.getElementById('input_substring2');
	const input_substring3 = document.getElementById('input_substring3');
	const resultado_substring = document.getElementById('resultado_substring');
	const btn_substring = document.getElementById('btn_substring');
	let cadena_substring = "";
	btn_substring.addEventListener('click', () => {
		cadena_substring = input_substring.value;
		let hola =cadena_substring.substring(input_substring2.value, input_substring3.value);
		resultado_substring.innerHTML = hola;
	});





	const input_toLowerCase = document.getElementById('input_toLowerCase');
	const resultado_toLowerCase = document.getElementById('resultado_toLowerCase');
	const btn_toLowerCase = document.getElementById('btn_toLowerCase');
	let cadena_toLowerCase = "";
	btn_toLowerCase.addEventListener('click', () => {
		cadena_toLowerCase = input_toLowerCase.value;
		let hola =cadena_toLowerCase.toLowerCase();
		resultado_toLowerCase.innerHTML = hola;
	});







	const input_toUpperCase = document.getElementById('input_toUpperCase');
	const resultado_toUpperCase = document.getElementById('resultado_toUpperCase');
	const btn_toUpperCase = document.getElementById('btn_toUpperCase');
	let cadena_toUpperCase = "";
	btn_toUpperCase.addEventListener('click', () => {
		cadena_toUpperCase = input_toUpperCase.value;
		let hola =cadena_toUpperCase.toUpperCase();
		resultado_toUpperCase.innerHTML = hola;
	});





	const input_trim = document.getElementById('input_trim');
	const resultado_trim = document.getElementById('resultado_trim');
	const btn_trim = document.getElementById('btn_trim');
	let cadena_trim = "";
	btn_trim.addEventListener('click', () => {
		cadena_trim = input_trim.value;
		let hola =cadena_trim.trim();
		resultado_trim.innerHTML = hola;
	});











});