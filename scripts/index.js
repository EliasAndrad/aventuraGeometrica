document.addEventListener("DOMContentLoaded", function() {
    var boxes = document.querySelectorAll(".box");
    boxes.forEach(function(box) {
        box.addEventListener("click", function() {
            var pageName = this.id + ".html";

            boxes.forEach(function(box) {
                box.classList.remove("active");
            });
            this.classList.add("active");

            fetch(pageName)
                .then(response => response.text())
                .then(data => {
                    document.querySelector(".main").innerHTML = data;
                })
                .catch(error => console.error('Erro ao carregar a página:', error));
        });
    });
});



function calcularAreaCirculo() {
    console.log("Função calcularArea() chamada");
    var raio = parseFloat(document.getElementById('raio').value);
    console.log("Valor do raio:", raio);
    var area = raio * raio * Math.PI;
    console.log("Área calculada:", area);
    document.getElementById('resultado').value = area.toFixed(2);
}


function calculoAreaCubo() {
    var base = parseFloat(document.getElementById('base').value);
    var area = 6 * base * base;
    document.getElementById('resultado').value = area;
}

function calculoAreaCuboide(){
    var comprimento = parseFloat(document.getElementById('comprimento').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var largura = parseFloat(document.getElementById('largura').value);


    var area =  2 * (comprimento * altura) + 2 * (altura * largura) + 2 * (largura * comprimento)

    document.getElementById('resultado').value = area;
    
}



function calculoAreaQuadrado(){
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var area = base * altura;

    document.getElementById('resultado').value = area;
    
}


function calculoAreaTriangulo(){
    var base = parseFloat(document.getElementById('base').value);
    var altura = parseFloat(document.getElementById('altura').value);

    var area = (base * altura)/2;

    document.getElementById('resultado').value = area;
    
}