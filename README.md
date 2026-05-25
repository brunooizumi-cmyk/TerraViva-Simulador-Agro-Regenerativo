# 🚜 TerraViva: Simulador Agro-Regenerativo

> **Projeto desenvolvido para o Programa Agrinho 2026** > **Tema:** *Agro forte, futuro sustentável: equilíbrio entre produção e meio ambiente* > **Categoria:** Ensino Médio (2º Ano)

---

## 🎯 Sobre o Projeto

O **TerraViva** é um simulador interativo desenvolvido em JavaScript utilizando a biblioteca **p5.js**. O objetivo do projeto é demonstrar de forma visual e prática como as decisões de manejo agrícola impactam diretamente a saúde do solo e a biodiversidade de uma propriedade rural.

A aplicação coloca o usuário no papel de um produtor que precisa escolher entre práticas agrícolas convencionais e regenerativas, provando que o agronegócio forte e a preservação ambiental podem caminhar juntos em perfeito equilíbrio.

---

## 🛠️ Como Funciona a Simulação?

O projeto utiliza conceitos de **Programação Orientada a Objetos (POO)** e lógica matemática para simular as reações de um ecossistema real:

* **Práticas Convencionais (Monocultura/Arado):** Ao acionar essa opção, o solo sofre degradação contínua. Visualmente, o solo perde nutrientes (sua cor clareia para um tom arenoso), as plantas param de crescer e a biodiversidade diminui drasticamente.
* **Práticas Regenerativas (ILP/Plantio Direto):** Ao acionar essa opção, o sistema simula a Integração Lavoura-Pecuária e a rotação de culturas. A saúde do solo aumenta, a cor se torna um marrom escuro rico em matéria orgânica, a vegetação cresce e novos elementos de biodiversidade (partículas) surgem na tela.
* **Métrica de Reatividade:** Através da função `map()`, a quantidade de partículas de biodiversidade e a altura das plantas respondem em tempo real ao nível percentual de saúde do solo.

---

## 💻 Tecnologias Utilizadas

* **HTML5** (Estrutura da página)
* **CSS3** (Estilização visual, microinterações e design responsivo)
* **JavaScript (p5.js)** (Lógica do simulador, renderização de gráficos e animações em loop)

---

## 🚀 Como Executar o Projeto

Você pode interagir com a simulação de duas formas:

1.  **Online (GitHub Pages):** Acesse o simulador rodando direto no navegador através do link: `[INSIRA O LINK DO SEU GITHUB PAGES AQUI]`
2.  **Localmente:**
    * Clone este repositório ou baixe os arquivos.
    * Abra o arquivo `index.html` em qualquer navegador web moderno.
