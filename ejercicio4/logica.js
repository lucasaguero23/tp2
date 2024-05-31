function calcularIMC() {
    const altura = parseFloat(document.getElementById('altura').value);
    const peso = parseFloat(document.getElementById('peso').value);

    if (isNaN(altura) || isNaN(peso)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    const imc = peso / (altura * altura);
    alert(`Tu índice de masa corporal (IMC) es ${imc.toFixed(2)}`);
}
