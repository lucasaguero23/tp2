function calculateIMC() {
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    if (!height || !weight) {
        alert('Por favor, ingrese valores válidos para la estatura y el peso.');
        return;
    }

    const imc = weight / (height * height);
    alert(`Tu IMC es ${imc.toFixed(2)}`);
}
