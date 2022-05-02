const express = require('express');
const app = express();
const consign = require('consign');
consign().include('database').into(app)
const session = require('express-session');

var questionsFunction = require('./questions.js');

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/js',express.static(__dirname + 'public/assets/js'));
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'exemplo1',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000000 }
   }));


app.get('/', function (req, res) {
    let sess = req.session

    if(sess.logado == 1){
        console.log("logado");
        res.render('index.ejs');
    }else{
        res.render('index.ejs');
    }
    
});

app.get('/academico', function (req, res){
    res.render('academico.ejs');
})

app.get('/result', function (req, res) {
        res.render('resulttest.ejs');
    
});

app.get('/register', function (req, res) {
    res.render('register.ejs');
});

app.get('/login', function (req, res) {
    res.render('login.ejs');
});

app.post('/form', function (req, res) {

    const dados = req.body;
    let pergunta = dados.pergunta;
    let resposta = dados.resposta;
    questionsFunction.respostas.push(resposta);

    if (pergunta == (questionsFunction.questions.length - 1)) {
        questionsFunction.contarRespostas(questionsFunction.respostas);
        } else {
        pergunta++;
        res.render('teste-forms.ejs', { 'questions': questionsFunction.questions, 'pergunta': pergunta });
    }
})


app.post('/register', (req, res) => {
    let data = req.body;

    let connection = app.database.connection()
    let databaseUser = new app.database.databaseUser(connection)

    databaseUser.searchAll(function (error, result) {
        if (!error) {
            if (!result.filter(x => x.email == data.email).length > 0) {
                databaseUser.createUser(data, (error) => {
                    if (error) {
                        console.log(error)
                    }
                })
            }
        } else {
            console.log(error)
        }
    })

    res.render('index.ejs');
});

app.post('/logged', function(req,res){
    var sess = req.session;
    let data= req.body;

    let connection = app.database.connection()
    let databaseUser = new app.database.databaseUser(connection)

    databaseUser.verifyLogin( data, function(error, success){


        if(success){

            sess.logado = 1;
            res.redirect('/');

        } else{
            console.log(error);
        }
        
    });


});


app.get('/teste', function (req, res) {
    questionsFunction.respostas = [];

    res.render('teste-forms.ejs', { 'questions': questionsFunction.questions, 'pergunta': 0 });
})

app.listen(3000, () => {
    console.log("YourFuture -> Online");
});

