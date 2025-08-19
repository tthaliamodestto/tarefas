const express = require('express');
const app = express();
const PORT = 8081;


app.get('/saudacao/:nome', (req, res) => {

    try {

    const nome = req.params.nome;
    const hora = parseInt(req.query.hora);
    
    if (isNaN(hora) || hora < 0 || hora > 23) {
        return res.status(400).send('Erro: Forneça uma hora válida (0-23).');
    }
    
    let saudacao;
    if (hora >= 5 && hora <= 11) {
        saudacao = 'Bom dia';
    } 

    else if (hora >= 12 && hora <= 17) {
        saudacao = 'Boa tarde';
    }
    
    else if (hora >= 18 && hora <= 23) {
        saudacao = 'Boa noite';
    } 
    
    else { 
        saudacao = 'Boa madrugada';
    }
    

    res.send(`${saudacao}, ${nome}!`);
    
    
} catch (error) {
    
    console.error('Erro ao processar a saudação:', error);
    return res.status(500).send('Erro interno do servidor.');
 }

});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});