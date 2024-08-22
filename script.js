//1.Faça um Programa que mostre a mensagem "Olá mundo" na tela.
alert(`Olá mundo`)
//2.Faça um Programa que peça um número e então mostre a mensagem "O número informado foi [número]".
const number =window.prompt('insira numero')
alert('esse é o seu numero?' +  number)
//3. Faça um Programa que peça dois números e imprima a soma.
const number1 = window.prompt('insira um valor para somar')
const number2 = window.prompt('insira outro valor para somar com o anterior')
let plus =parseInt(number1) + parseInt (number2)
const results = window.alert ('esse é o seu resultado da sua soma ' + plus)
//4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
let bi1 =window.prompt('qual a nota do seu primeiro bimestre?')
let bi2 =window.prompt('qual a nota do seu segundo bimestre?')
let bi3 =window.prompt('qual a nota do seu terceiro bimestre?')
let bi4 =window.prompt('qual a nota do seu quarto bimestre?') 
let media = parseInt (bi1) + parseInt (bi2) + parseInt(bi3) + parseInt (bi4)
let div = media/4
let resultado =window.alert('a media final será ' + div)
//5. Faça um Programa que converta metros para centímetros.
const ritornela =prompt('diga seu valor e metros que deseja converter para centímetros')
const converter = ritornela*100
alert(' esse é  se valor em centímetros' + converter)
//6. Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
const valordoraio =prompt('coloque o valor do raio de um circulo que você quer calcular!')
const mult =valordoraio * valordoraio
const pi =mult *3.14
let = alert('A área do seu circulo é:' + pi +'!')
//7. Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
const quadrado = prompt('coloque o comprimento de um dos lados do quadrado para saber a área dele')
const  mul = quadrado * quadrado
const dobro = mul*2
alert ('A área do quadrado é' +''+ mult +'! e dobro dela é ' + dobro + '!' )
//8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
const money =window.prompt('Quanto você ganha por hora?')
const trabalho =window.prompt('Quantas horas você trabalha por mês?')
const mês = money*trabalho
const mu = mês*30
alert('Seu sálario mensalmente será' + mult)
//9. Faça um Programa que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius. C = 5 * ((F-32) / 9).
const fahrenheit =prompt('coloque o numero em graus fahrenheit para transforma-los em graus celsius.')
const celsius= (fahrenheit - 32) *5/9
alert('em graus celsius o valor é'+ celsius + '!')
//10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Fahrenheit.
const celius=prompt ('Coloque o valor em graus celcius para transforma-los em graus fahrenheit')
const fahenheit= celius*9/5+ parseInt (32)
alert('Seu valor e graus fahrenheit é' + fahenheit + '!')
//11. Faça um Programa que peça 2 números inteiros e um número real. Calcule e mostre

//o produto do dobro do primeiro com metade do segundo .
//a soma do triplo do primeiro com o terceiro.
//o terceiro elevado ao cubo.
let num1 = parseInt(prompt("Digite o primeiro número inteiro:"))
let num2 = parseInt(prompt("Digite o segundo número inteiro:"))
let num3 = parseInt(prompt("Digite um número real"))

let dobrodoprim = num1 * 2
let metadedoseg = num2 / 2
let produto = dobrodoprim * metadedoseg

let somadoprim = num1 * 3
let triplo = somadoprim + num3

let cubo = Math.pow(num3, 3)

alert("Produto do dobro do primeiro com a metade do segundo: " + produto);
alert("Soma do triplo do primeiro com o terceiro: " + triplo);
alert("Terceiro número elevado ao cubo: " + cubo);
//12. Tendo como dados de entrada a altura de uma pessoa, construa um algoritmo que calcule seu peso ideal, usando a seguinte fórmula: (72.7*altura) - 58
const altura = parseFloat(prompt('Coloque sua altura aqui para saber seu peso ideal'))
const calculo = 72.7*altura - 58
alert("Seu peso ideal é: " + calculo.toFixed(2) + " kg")
//13. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que calcule seu peso ideal, utilizando as seguintes fórmulas:
//Para homens: (72.7*h) - 58
//Para mulheres: (62.1*h) - 44.7
let alt=prompt('qual sua altura?')
let masc= (72.7*alt) -58
let female= (62.1*alt) -44.7
alert(`O peso ideal para homens é ${masc} \n o peso ideal para mulher ${female}`)
//14. João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um programa que leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a quantidade de quilos além do limite e na variável multa o valor da multa que João deverá pagar. Imprima os dados do programa com as mensagens adequadas.
let pexe= parseInt(prompt('digite a quantidade de quilos de peixe?'))
let exce = pexe - 50
let multa = exce * 4
alert(`a quantidade de quilos excedente é ${exce} e a multa é ${multa}R$`) 
//15. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
//salário bruto.
//quanto pagou ao INSS.
//quando pagou para o sindicato.
//o salário líquido. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
//Salário Bruto : R$
//INSS (8%) : R$
//Sindicato ( 5%) : R$ = Salário Liquido : R$ Obs.: Salário Bruto - Descontos = Salário Líquido.
let ganh= parseInt(prompt('quanto você ganha por hora?'))
let hora= parseInt(prompt('quantas horas você trabalha no mês?'))
let salario=ganh * hora
let ins = salario * 8/100
let ctrl = salario * 5/100
let salarioLiquido = salario - ins - ctrl
alert('seu salario bruto é'+ salario +' o valor pago ao INSS foi '+ ins +' o valor pago ai sindicato foi '+ ctrl + 'seu salario liquido é ' + salarioLiquido)