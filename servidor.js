const db = require('./conexao');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/produtos', (req, res) => {
    db.query('SELECT * FROM tb_produtos', (erro, resultado) => {
        if (erro) {
            res.json({ "mensagem": "Falha ao consultar" });
            return;
        }
        return res.json(resultado);
    });
});

app.get('/produtos/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM tb_produtos WHERE id_produto=?', [id],
        (erro, resultado) => {
            if (erro) {
                res.json({ "mensagem": "falha ao consultar" });
                return;
            }
            return res.json(resultado);
        });
});

app.get('/produtos/pesquisar/:nome', (req, res) => {
    const nome = req.params.nome;
    var pesquisar = "%" + nome + "%";
    db.query('SELECT * FROM tb_produtos WHERE nome_produto LIKE ?',
        [pesquisar], (erro, resultado) => {
            if (erro) {
                return res.json({ "mensagem": "falha ao consultar" });
            }
            return res.json(resultado);
        });
});

app.get('/categorias', (req, res) => {
    db.query('SELECT * FROM tb_categorias',
        (erro, resultado) => {
            if (erro) {
                res.json({ "mensagem": "falha ao consultar" });
                return;
            }
            return res.json(resultado);
        });
});

app.get('/categorias/:id', (req, res) => {
    const id = req.params.id;
    db.query('SELECT * FROM tb_categorias WHERE categoria=?', [id],
        (erro, resultado) => {
            if (erro) { return res.json({ "mensagem": "falha ao consultar" }) };
            return res.json(resultado);
        });
});

app.listen(3000, () => {
    console.log('servidor rodando na porta 3000');
});