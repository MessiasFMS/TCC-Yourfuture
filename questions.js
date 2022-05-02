exports.questions = [{
    question: 'Você é gay?',
    A: 'Não',
    B: 'Sim',
    C: 'talvez',
    D: 'Depende do dia',
    E: 'Claro'
    },
    {
    question: 'Você é homem?',
    A: 'Sei la',
    B: 'Sim',
    C: 'talvez',
    D: 'Depende do dia',
    E: 'Claro'
    },
    {
    question: 'Você é mulher?',
    A: 'Sei la',
    B: 'Sim',
    C: 'talvez',
    D: 'Depende do dia',
    E: 'Claro'
    },
    {
    question: 'Você é um animal?',
    A: 'Sei la',
    B: 'Sim',
    C: 'talvez',
    D: 'Depende do dia',
    E: 'Claro'
    },
    {
    question: 'Você é um alfabetizado?',
    A: 'Sei la',
    B: 'Sim',
    C: 'talvez',
    D: 'Depende do dia',
    E: 'Claro'
    }
];

exports.respostas = [];

exports.contarRespostas = (array) => {
    let artistico = 0;
    let humanas = 0;
    let natureza = 0;
    let exatas = 0;
    let linguagens = 0;

    array.map((x) => {
        switch (x){
            case 'A':
                artistico++;
                break;
            case 'B':
                humanas++;
                break;
            case 'C':
                natureza++
                break;    
            case 'D':
                exatas++;
                break;   
            case 'E':
                linguagens++;
                break;
            default:
                break;    
        }
    });  
    return console.log(getResultOfTest(artistico, humanas, natureza, exatas, linguagens));
}    

const getResultOfTest = (A, B, C, D, E) => {
    if (A > B && A > C && A > D && A > E){
        return 'A';
    }
    if (B > A && B > C && B > D && B > E){
        return 'B';
    }
    if (C > A && C > B && C > D && C > E){
        return 'C';
    }
    if (D > A && D > B && D > C && D > E){
        return 'D';
    }
    if (E > A && E > B && E > C && E > D){
        return 'E';
    }
    return 'Erro';
}

