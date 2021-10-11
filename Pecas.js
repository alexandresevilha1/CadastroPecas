let Peso = 99
if (Peso >= 100) {
    console.log("Peso adequado para cadastro")
} else {
    console.log("Peso minimo não alcançado")
}
let ListaPecas = ['Carburador',"Cano de Escape","Embreagem","escapamento","Farol","Vela","Amortecedor","Bateria","Radiador","virabrequim"]
if (ListaPecas.length < 10) {
    console.log("Peça Cadastrada")
} else {
    console.log("Não ha espaço no deposito")
}

let NomePeca = ListaPecas[0]
if (NomePeca.length > 3) {
    console.log("Nome da peça registrado com sucesso")
} else {
    console.log("Nome da peça deve possuir mais que 3 caracteres")
}