document.addEventListener("DOMContentLoaded", () => {
    // Lógica do Accordion de Práticas Diárias
    const accordionHeaders = document.querySelectorAll(".accordion-header");
  
    accordionHeaders.forEach(header => {
      header.addEventListener("click", () => {
        const item = header.parentElement;
        
        // Fecha outros itens abertos
        document.querySelectorAll(".accordion-item").forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            otherItem.querySelector("span").textContent = "+";
          }
        });
  
        // Alterna o estado do item clicado
        item.classList.toggle("active");
        const icon = header.querySelector("span");
        icon.textContent = item.classList.contains("active") ? "−" : "+";
      });
    });
  
    // Lógica de Curtidas para Mensagens
    const likeButtons = document.querySelectorAll(".like-btn");
  
    likeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const countSpan = btn.querySelector(".like-count");
        let currentLikes = parseInt(countSpan.textContent);
        
        // Incrementa e adiciona feedback visual
        countSpan.textContent = currentLikes + 1;
        btn.style.backgroundColor = "#fbd38d";
      });
    });
  });