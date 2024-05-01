document.addEventListener("DOMContentLoaded", function() {
    var calcularBtn = document.getElementById('calcularBtn');
    calcularBtn.addEventListener('click', function() {
        console.log("Botão de cálculo clicado");
        calcularArea();
    });
});

function calcularArea() {
    console.log("Função calcularArea() chamada");
    var raio = parseFloat(document.getElementById('raio').value);
    console.log("Valor do raio:", raio);
    var area = raio * raio * Math.PI;
    console.log("Área calculada:", area);
    document.getElementById('resultado').value = area.toFixed(2);
}
