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
