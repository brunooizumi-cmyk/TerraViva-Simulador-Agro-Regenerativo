// 1. VARIÁVEIS GERAIS
let saudeSolo = 50; // A saúde do solo vai de 0 a 100
let particulas = []; // Lista (Array) para guardar nossa biodiversidade
let modoAtual = 'nenhum'; // Pode ser 'convencional' ou 'regenerativa'

let btnConvencional, btnRegenerativa;

function setup() {
  createCanvas(600, 400);

  // 2. CRIANDO OS BOTÕES DE DECISÃO
  btnConvencional = createButton('Prática Convencional (Arado/Monocultura)');
  btnConvencional.position(20, 420); // Posição do botão na tela
  btnConvencional.mousePressed(escolherConvencional);

  btnRegenerativa = createButton('Prática Regenerativa (ILP/Plantio Direto)');
  btnRegenerativa.position(320, 420);
  btnRegenerativa.mousePressed(escolherRegenerativa);

  // Criando a biodiversidade inicial (10 partículas)
  for (let i = 0; i < 10; i++) {
    particulas.push(new Particula());
  }
}

function draw() {
  // 3. LÓGICA DE SIMULAÇÃO DO TEMPO
  // Se for convencional, a saúde cai aos poucos. Se for regenerativa, ela sobe.
  if (modoAtual === 'convencional' && saudeSolo > 10) {
    saudeSolo -= 0.1;
  } else if (modoAtual === 'regenerativa' && saudeSolo < 100) {
    saudeSolo += 0.1;
  }

  // Ajustando a quantidade de insetos/biodiversidade com base na saúde
  // O map() converte a escala de saúde (0 a 100) para a quantidade de partículas (2 a 50)
  let qtdDesejada = map(saudeSolo, 0, 100, 2, 50); 
  
  if (particulas.length < qtdDesejada) {
    particulas.push(new Particula()); // Adiciona vida
  } else if (particulas.length > qtdDesejada && particulas.length > 0) {
    particulas.pop(); // Remove vida se o solo ficar pobre
  }

  // 4. DESENHO (Visual)
  background(135, 206, 235); // Céu azul

  // Misturando as cores do solo usando lerpColor (transição suave)
  let corPobre = color(210, 180, 140); // Amarelo arenoso
  let corRica = color(60, 40, 20);     // Marrom escuro rico
  // Transforma 0 a 100 em 0.0 a 1.0 para a função de cor
  let corAtual = lerpColor(corPobre, corRica, saudeSolo / 100); 

  fill(corAtual);
  noStroke();
  rect(0, 250, width, 150); // Desenha o solo (X, Y, Largura, Altura)

  desenharPlantas();

  // 5. ATUALIZAR E DESENHAR OS OBJETOS (Biodiversidade)
  for (let i = 0; i < particulas.length; i++) {
    particulas[i].mover();
    particulas[i].mostrar();
  }

  // Textos informativos na tela
  fill(0); // Texto preto
  textSize(18);
  text("Saúde do Solo: " + floor(saudeSolo) + "%", 20, 30);
  text("Prática atual: " + modoAtual.toUpperCase(), 20, 60);
}

// Funções para quando os botões forem clicados
function escolherConvencional() {
  modoAtual = 'convencional';
}
function escolherRegenerativa() {
  modoAtual = 'regenerativa';
}

// Função simples para desenhar o crescimento das plantas
function desenharPlantas() {
  fill(34, 139, 34); // Verde escuro
  let alturaPlanta = map(saudeSolo, 0, 100, 10, 80); // Plantas crescem com solo saudável
  for (let x = 50; x < width; x += 80) {
    rect(x, 250 - alturaPlanta, 15, alturaPlanta); // Caule das plantas
  }
}

// 6. CLASSE: Programação Orientada a Objetos para a Biodiversidade
class Particula {
  constructor() {
    this.x = random(width);
    this.y = random(100, 350);
    this.vx = random(-2, 2); // Velocidade horizontal
    this.vy = random(-2, 2); // Velocidade vertical
  }

  mover() {
    this.x += this.vx;
    this.y += this.vy;
    // Bater nas bordas e voltar
    if (this.x < 0 || this.x > width) this.vx *= -1;
    if (this.y < 0 || this.y > height) this.vy *= -1;
  }

  mostrar() {
    fill(255, 204, 0); // Cor de abelha/pólen
    noStroke();
    ellipse(this.x, this.y, 6, 6);
  }
}
