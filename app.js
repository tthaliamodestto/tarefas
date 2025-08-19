const express = require('express');
const app = express();
const PORT = 8081;


app.get("/imc", (req, res) => {

    
    const peso = parseFloat(req.query.peso);
    const altura = parseFloat(req.query.altura);

    if (isNaN(peso) || isNaN(altura) || altura === 0) {
        return res.status(400).send('Erro! Forneça valores válidos para peso e altura.');
    }

    const imc = peso / (altura * altura);
    let classificacao;


    if (imc < 18.5) {

        classificacao = 'Baixo peso';

    } 

    else if (imc >= 18.5 && imc <= 24.9) {
        classificacao = 'Peso normal';


    } 
    
    else if (imc >= 25 && imc <= 29.9) {
        classificacao = 'Sobrepeso';
    } 
    
    else if (imc >= 30 && imc <= 34.9) {
             classificacao = 'Obesidade';
        }
       
    
    
   
    res.send(`IMC: ${imc.toFixed(2)} - ${classificacao}`);
});



app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

