
# Prova de Conceito - Métodos JavaScript

# Bernnardo 
Este projeto demonstra a utilização de cinco métodos importantes do JavaScript: `sort`, `map`, `reduce`, `filter` e `spread`. A atividade foi criada com o objetivo de ilustrar visualmente o comportamento de cada um desses métodos, utilizando um exemplo simples para facilitar a compreensão.

## 🚀 Tecnologias Utilizadas

- **HTML**: Estrutura do conteúdo da página.
- **CSS**: Estilização do layout e aparência visual.
- **JavaScript**: Implementação dos exemplos de código e métodos solicitados.

## 📁 Estrutura do Projeto

O projeto é composto por três arquivos principais:

- `index.html`: Estrutura básica da página, onde os exemplos são exibidos.
- `estilo.css`: Estilos aplicados para deixar a página visualmente agradável.
- `java.js`: Implementação dos exemplos dos métodos `sort`, `map`, `reduce`, `filter` e `spread`.

## 📜 Exemplos Implementados

Abaixo está a descrição detalhada dos exemplos implementados em cada método:

### 1. **Sort**
O método `sort` é utilizado para ordenar os elementos de um array. Neste exemplo, os números foram ordenados em ordem crescente.

```javascript
const numerosOrdenados = numeros.sort((a, b) => a - b);
```

**Resultado**: Números ordenados: `[2, 9, 12, 32, 45]`

### 2. **Map**
O método `map` cria um novo array com o resultado de uma função aplicada em cada elemento do array original. Aqui, multiplicamos os números por 2.

```javascript
const numerosMultiplicados = numeros.map(num => num * 2);
```

**Resultado**: Números multiplicados por 2: `[24, 90, 4, 18, 64]`

### 3. **Reduce**
O método `reduce` reduz o array a um único valor. Neste caso, somamos todos os números.

```javascript
const somaNumeros = numeros.reduce((acc, num) => acc + num, 0);
```

**Resultado**: Soma dos números: `100`

### 4. **Filter**
O método `filter` cria um novo array com todos os elementos que passam em um teste (função). Filtramos os números maiores que 10.

```javascript
const numerosFiltrados = numeros.filter(num => num > 10);
```

**Resultado**: Números maiores que 10: `[12, 45, 32]`

### 5. **Spread**
O operador `spread` permite combinar arrays de forma eficiente. Combinamos um array de números com um array de nomes.

```javascript
const combinacaoArrays = [...numeros, ...nomes];
```

**Resultado**: Combinação de arrays: `[12, 45, 2, 9, 32, 'Alice', 'Bruno', 'Carlos', 'Daniela']`

## 🎨 Estilização (CSS)

Utilizamos CSS simples para melhorar a apresentação dos exemplos. Cada exemplo é exibido em uma caixa (`div`) com um fundo leve e uma borda discreta, proporcionando uma visualização clara e organizada.

### Exemplo de CSS aplicado:

```css
.example {
    padding: 10px;
    background-color: #e8e8e8;
    border: 1px solid #ccc;
    margin-bottom: 20px;
    border-radius: 5px;
}
```

## 💡 Como Executar o Projeto

Para visualizar o projeto localmente, siga as instruções abaixo:

1. Clone o repositório para o seu ambiente local:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue até a pasta do projeto:
   ```bash
   cd seu-repositorio
   ```

3. Abra o arquivo `index.html` no seu navegador para visualizar os exemplos em ação.

## 📚 Referências

- [Documentação do método sort](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- [Documentação do método map](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [Documentação do método reduce](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [Documentação do método filter](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Documentação do operador spread](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

---

Projeto desenvolvido como parte de uma atividade acadêmica para a disciplina de Web Mobile.
