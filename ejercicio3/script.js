let x = $(document)
x.ready(clickEvento)

function clickEvento() {
	let x = $("#primera-fila")
	x.click(primeraFila)
	x = $("#segunda-fila")
	x.click(segundaFila)
}

function primeraFila() {
	let x = $("#primera-fila")
	x.css("background-color", "#eeeeee")
}

function segundaFila() {
	let x = $("#segunda-fila")
	x.css("background-color", "#eeeeee")
}
