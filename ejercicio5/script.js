document.getElementById('area-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los inputs
    const altura = parseFloat(document.getElementById('altura').value);
    const base = parseFloat(document.getElementById('base').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);

    // Calcular el área del rectángulo (base * altura)
    const areaRectangulo = base * altura;

    // Calcular el área del triángulo (1/2 * base * altura)
    const baseTriangulo = base - ladoC;
    const areaTriangulo = 0.5 * baseTriangulo * altura;

    // Calcular el área total sumando ambas áreas
    const areaTotal = areaRectangulo + areaTriangulo;

    // Mostrar el resultado
    document.getElementById('resultado').innerText = `El área del terreno es: ${areaTotal.toFixed(2)} m²`;
});
