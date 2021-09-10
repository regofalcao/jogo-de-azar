const teste = document.getElementById("resposta")
const button = document.getElementById("btn");
button.addEventListener("click", function() {  
    let resposta = [" É certo.", "É decididamente assim.",
     "Sem dúvida.", " Sim, definitivamente.","Você pode confiar nisso.", 
     "A meu ver, sim", "Provavelmente.", "Parece Bom.","Sim",
     "Os sinais apontam para sim.","Resposta nebulosa, tente novamente.",
     "Pergunte novamente mais tarde.", "Melhor não contar agora.", 
     "Não é possível prever agora.", "Concentre-se e pergunte novamente.",
     " Não conte com isso.","Minha resposta é não.", "Minhas fontes dizem não.",
     "Isto não parece tão bom.","Muito duvidoso." ]
    
     numero = Math.floor(Math.random() * 19 + 1);
     teste.innerText = resposta[numero]

     
});


