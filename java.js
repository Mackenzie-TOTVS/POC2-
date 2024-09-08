// Dados para usar nos exemplos
const numeros = [12, 45, 2, 9, 32];
const nomes = ['Alice', 'Bruno', 'Carlos', 'Daniela'];

// Exemplo de SORT (ordenar os números)
const numerosOrdenados = numeros.sort((a, b) => a - b);
document.getElementById('sort-result').textContent = `Números ordenados: ${numerosOrdenados}`;

// Exemplo de MAP (transformar os números multiplicando por 2)
const numerosMultiplicados = numeros.map(num => num * 2);
document.getElementById('map-result').textContent = `Números multiplicados por 2: ${numerosMultiplicados}`;

// Exemplo de REDUCE (somar todos os números)
const somaNumeros = numeros.reduce((acc, num) => acc + num, 0);
document.getElementById('reduce-result').textContent = `Soma dos números: ${somaNumeros}`;

// Exemplo de FILTER (filtrar números maiores que 10)
const numerosFiltrados = numeros.filter(num => num > 10);
document.getElementById('filter-result').textContent = `Números maiores que 10: ${numerosFiltrados}`;

// Exemplo de SPREAD (combinar dois arrays)
const combinacaoArrays = [...numeros, ...nomes];
document.getElementById('spread-result').textContent = `Combinação de arrays: ${combinacaoArrays}`;
