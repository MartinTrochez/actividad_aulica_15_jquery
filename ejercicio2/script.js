let x = $(document);
$.ready(clickEvento)

function clickEvento() {
	let x
	x = $("#primer-parrafo")
	x.click(clickParrafo)
}

function clickParrafo() {
	alert("Se presione el pimer parrafo")
}
