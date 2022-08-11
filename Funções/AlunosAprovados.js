const alunos = [
{
    nome: 'João',
    nota: 5,
    turma: '1B'
},
{
    nome: 'Sofia',
    nota: 9,
    turma: '1B'
},
{
    nome: 'Paulo',
    nota: 6,
    turma: '2C',
},
{
    nome: 'Miguel',
    nota: 3,
    turma: '2C',
}
];

function AlunosAprovados(lista, media) {
    let Aprovados = [];

    for (let i = 0; i < lista.length; i++) {
        const {nota, nome} = lista[i];

        if (nota >= media) {
            Aprovados.push(nome);
        }
    }    
    return Aprovados;   
} 

console.log(AlunosAprovados(alunos, 6))