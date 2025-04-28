const mysql = require('mysql2');

const conexao = mysql.createConnection({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '',
    database: 'base_supermercado'
});

conexao.connect((erro) => {
    if (erro) {
        console.error('Erro na conexão:', erro);
    } else {
        console.log('Conectado ao MySQL com sucesso!');
    }
});

module.exports = conexao;
