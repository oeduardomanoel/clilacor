---
name: Clilacor
description: Clínica e Laboratório do Coração, em pano vinho, renda de bilro branca e alfinetes de latão.
colors:
  wine: "#53090a"
  wine-deep: "#38090a"
  thread: "#f8f3ed"
  ribbon: "#e7e0dc"
  indigo: "#142a64"
  indigo-deep: "#0d1d4a"
  brass: "#b08a3e"
  brass-light: "#e6c989"
  brass-shade: "#6d5020"
  thread-line: "rgb(248 243 237 / 38%)"
  indigo-line: "rgb(20 42 100 / 55%)"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "calc(104 * var(--u))"
    fontWeight: 700
    lineHeight: "calc(102 * var(--u))"
    letterSpacing: "-0.015em"
  display-stacked:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.625rem, 11.2vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.75rem, 5.6vw, 5.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.015em"
  headline-name:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(3rem, 7.2vw, 6rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  statement:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(2.25rem, 4.6vw, 4.25rem)"
    fontWeight: 600
    lineHeight: 1.16
    letterSpacing: "-0.01em"
  address:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.5rem, 3.4vw, 3.125rem)"
    fontWeight: 600
    lineHeight: 1.18
  title:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2.125rem)"
    fontWeight: 650
    lineHeight: 1.15
  lede:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "calc(28.4 * var(--u))"
    fontWeight: 400
    lineHeight: "calc(39 * var(--u))"
  body:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.1875rem"
    fontWeight: 400
    lineHeight: 1.6
  link:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 600
  question:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "calc(24.8 * var(--u))"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  option:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "calc(15.8 * var(--u))"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "-0.02em"
  option-stacked:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.14
    letterSpacing: "0em"
  caption:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  pin: "50%"
  pill-stage: "calc(33 * var(--u))"
  pill-stacked: "34px"
  pill-bar: "28px"
spacing:
  u: "min(calc(100vw / 1536), calc(100svh / 1024))"
  u-booking: "max(min(calc(100vw / 1536), calc(100svh / 1024)), 0.84px)"
  gutter: "clamp(20px, 5.5vw, 84px)"
  lace: "clamp(30px, 3vw, 46px)"
  column-gap: "clamp(32px, 5vw, 80px)"
  row-y: "clamp(24px, 2.6vw, 38px)"
  band-y: "clamp(72px, 9vw, 136px)"
  section-top: "clamp(88px, 11vw, 168px)"
  section-bottom: "clamp(96px, 12vw, 184px)"
  touch-min: "44px"
  option-min: "48px"
components:
  button-whatsapp:
    backgroundColor: "{colors.indigo}"
    textColor: "#f3eee9"
    rounded: "{rounded.pill-stage}"
    padding: "0 calc(14 * var(--u)) 0 calc(33 * var(--u))"
    height: "calc(66 * var(--u))"
    width: "calc(288 * var(--u))"
  button-whatsapp-hover:
    backgroundColor: "{colors.indigo-deep}"
  button-whatsapp-stacked:
    backgroundColor: "{colors.indigo}"
    textColor: "#f3eee9"
    rounded: "{rounded.pill-stacked}"
    padding: "0 16px"
    height: "68px"
    width: "100%"
  whatsapp-bar:
    backgroundColor: "{colors.indigo}"
    textColor: "#f3eee9"
    typography: "{typography.link}"
    rounded: "{rounded.pill-bar}"
    height: "56px"
  booking-band:
    backgroundColor: "{colors.ribbon}"
    textColor: "{colors.indigo}"
    height: "calc(104 * var(--u))"
  booking-option:
    textColor: "{colors.indigo}"
    typography: "{typography.option}"
  booking-option-stacked:
    textColor: "{colors.indigo}"
    typography: "{typography.option-stacked}"
    height: "{spacing.option-min}"
  brass-pin:
    backgroundColor: "{colors.brass}"
    rounded: "{rounded.pin}"
    size: "11px"
  text-link:
    textColor: "{colors.thread}"
    typography: "{typography.link}"
    height: "{spacing.touch-min}"
  text-link-on-ribbon:
    textColor: "{colors.indigo}"
    typography: "{typography.link}"
    height: "{spacing.touch-min}"
  exam-row:
    textColor: "{colors.thread}"
    typography: "{typography.body}"
    padding: "{spacing.row-y} 0"
  doctor-band:
    backgroundColor: "{colors.ribbon}"
    textColor: "{colors.indigo}"
    padding: "{spacing.band-y} {spacing.gutter}"
  visit-field:
    backgroundColor: "{colors.indigo}"
    textColor: "{colors.thread}"
  footer:
    backgroundColor: "{colors.wine-deep}"
    textColor: "{colors.thread}"
    typography: "{typography.caption}"
---

# Design System: Clilacor

## Overview

**Creative North Star: "A Almofada de Bilro"**

A página é a almofada da rendeira da Ilha de Santa Catarina: um pano vinho esticado, alfinetes de latão cravados nos pontos que importam e renda branca presa sobre o tecido. O paciente lê a longa experiência da clínica no ofício do material, não em promessa. O coração de renda é a peça em obra sobre a almofada, e a faixa de agendamento é a tira que atravessa o pano carregando os controles.

A densidade é baixa e a leitura é direta. Títulos grandes em uma única serifa quente, listas separadas por fios finos, poucas informações por região e um caminho constante até o WhatsApp. A superfície é plana e têxtil: a profundidade vem da sobreposição de pano, renda e faixa, com uma única sombra reservada à barra flutuante do celular.

O sistema recusa o site de clínica em azul e branco, a foto de banco de imagens e a grade de cartões com ícones. O índigo existe aqui como campo escuro de apoio e cor de tinta, sempre em diálogo com o vinho.

**Key Characteristics:**
- Pano vinho com trama visível cobrindo a página inteira.
- Renda de bilro em imagem real nas bordas de cada faixa clara.
- Alfinetes de latão como único ornamento recorrente.
- Uma família tipográfica variável, com hierarquia por tamanho e peso.
- Primeira tela composta como palco proporcional, conteúdo seguinte em fluxo fluido.
- WhatsApp sempre ao alcance, em pílula índigo.

## Colors

Paleta de ateliê: um vinho dominante, dois brancos de fio, um índigo de apoio e latão em doses mínimas.

### Primary
- **Vinho de Almofada** (#53090a): chão da página inteira, aplicado sob a textura de pano, e cor de `theme-color` do navegador.
- **Vinho de Arremate** (#38090a): rodapé, o ponto mais escuro do pano, onde a página se encerra.

### Secondary
- **Índigo de Tinta** (#142a64): botões de WhatsApp, campo da seção Como chegar e toda a tinta sobre a faixa clara.
- **Índigo Fechado** (#0d1d4a): estado de hover do botão de WhatsApp.

### Tertiary
- **Latão** (#b08a3e): corpo dos alfinetes e contorno de foco sobre vinho e índigo.
- **Brilho de Latão** (#e6c989): ponto de luz no degradê radial do alfinete.
- **Sombra de Latão** (#6d5020): borda escura do degradê radial do alfinete.

### Neutral
- **Fio Branco** (#f8f3ed): títulos, texto e links sobre vinho e índigo; fundo da seleção de texto.
- **Faixa de Renda** (#e7e0dc): campo claro da faixa de agendamento e da seção do médico.
- **Fio Tênue** (rgb(248 243 237 / 38%)): linhas divisórias sobre vinho e índigo.
- **Fio Índigo** (rgb(20 42 100 / 55%)): divisórias verticais entre grupos de opções na faixa clara.

### Named Rules

**The Pano Inteiro Rule.** O vinho com textura é o chão padrão de toda a página. Faixa clara e campo índigo interrompem o pano por região inteira, de borda a borda, e nunca viram blocos soltos dentro dele.

**The Par de Tinta Rule.** Cada campo tem uma tinta fixa: Fio Branco sobre vinho e índigo, Índigo de Tinta sobre a Faixa de Renda. Esses pares medem de 10,4:1 a 15,7:1.

**The Latão Escasso Rule.** Latão aparece só em alfinetes circulares e no contorno de foco. Nunca é cor de texto nem de campo.

## Typography

**Display Font:** Source Serif 4 (com Georgia, serif)
**Body Font:** Source Serif 4 (com Georgia, serif)

**Character:** Serifa quente e robusta, auto-hospedada em um único arquivo variável latino, com eixos de peso (200 a 900) e tamanho óptico (8 a 60). O tamanho óptico automático afina o desenho nos títulos enormes e o reforça nos rótulos pequenos, e é assim que uma só família cobre todos os papéis.

### Hierarchy
- **Display** (700, `calc(104 * var(--u))`, entrelinha `calc(102 * var(--u))`, -0.015em): título da primeira tela composta. Empilhada, passa a `clamp(2.625rem, 11.2vw, 5.5rem)` com entrelinha 1,02.
- **Headline** (700, `clamp(2.75rem, 5.6vw, 5.5rem)`, 1, -0.015em): títulos de seção, limitados a `min(5.5rem, calc(84 * var(--u)))` em telas largas.
- **Headline Name** (700, `clamp(3rem, 7.2vw, 6rem)`, 1,02, -0.02em): nome do médico, o maior texto fora da primeira tela, limitado a `min(6rem, calc(92 * var(--u)))` em telas largas.
- **Statement** (600, `clamp(2.25rem, 4.6vw, 4.25rem)`, 1,16, -0.01em): lista de convênios lida como afirmação.
- **Address** (600, `clamp(1.5rem, 3.4vw, 3.125rem)`, 1,18): endereço da clínica.
- **Title** (650, `clamp(1.5rem, 2.2vw, 2.125rem)`, 1,15): nome de cada exame.
- **Lede** (400, `calc(28.4 * var(--u))`, entrelinha `calc(39 * var(--u))`): linha do responsável na primeira tela. Empilhada, usa 1,1875rem com entrelinha 1,45.
- **Body** (400, 1,1875rem, 1,5 a 1,6): descrições e parágrafos, com medida máxima de 58 a 62ch.
- **Link** (600, 1,125rem): links de texto sublinhados.
- **Question** (600, `calc(24.8 * var(--u))`, 1,1, -0.02em): pergunta da faixa de agendamento.
- **Option** (600, `calc(15.8 * var(--u))`, 1,14, -0.02em): rótulos de exame e período na faixa. Empilhada, usa 1,125rem sem tracking negativo.
- **Caption** (400, 1rem, 1,5): rodapé.

### Named Rules

**The Serifa Única Rule.** Source Serif 4 é a única família. Hierarquia nasce de tamanho, peso (400, 600, 650, 700 e 800) e cor de tinta.

**The Algarismos Alinhados Rule.** Telefones, CRM, CEP e números de endereço usam algarismos tabulares e alinhados (`tabular-nums lining-nums`).

## Layout

O sistema tem dois regimes. Em telas de 1300px ou mais, em paisagem, a primeira tela é um palco de altura `100svh` (mínimo de 640px) desenhado sobre uma referência de 1536 × 1024. Cada medida do palco é múltipla da unidade `--u`, que acompanha o menor entre largura e altura, então a composição inteira escala sem recompor. A faixa de agendamento redefine a unidade com piso de 0,84px, para os rótulos continuarem legíveis em telas baixas. Entre 1300px e 1535px, e em telas largas com menos de 1024px de altura, a faixa troca as larguras fixas por distribuição flexível com tamanhos em pixels.

Abaixo de 1300px, ou em retrato, o palco vira coluna: logo, navegação, título, coração, faixa. As opções formam grade automática com mínimo de 210px por coluna e o período fica em duas colunas.

Depois da primeira tela, o conteúdo segue em fluxo fluido com margem lateral `clamp(20px, 5.5vw, 84px)`. Exames e convênios usam grade 4/8, com o título de exames fixo ao rolar; o médico usa 8/4; Como chegar usa 7/5; a linha de exame usa 5/6/auto. Em 900px ou menos, todas as grades caem para uma coluna e a barra fixa de WhatsApp entra em cena. Em 480px ou menos, a navegação encurta "Médico responsável" para "Médico".

### Named Rules

**The Unidade de Palco Rule.** `--u` governa a primeira tela. O conteúdo em fluxo usa `clamp()` e só consulta `--u` para limitar títulos em telas largas.

**The Alvo Generoso Rule.** Links empilhados e de texto têm ao menos 44px de altura, e opções de exame e período têm ao menos 48px quando empilhadas.

## Elevation & Depth

O sistema é plano e têxtil. A profundidade vem do empilhamento de materiais: pano ao fundo, coração de renda por cima, faixa de agendamento à frente do coração e bordas de renda sobrepostas ao pano. Sombra projetada existe em um único lugar.

### Shadow Vocabulary
- **Barra flutuante** (`box-shadow: 0 8px 24px rgb(20 4 6 / 45%)`): separa a barra fixa de WhatsApp do conteúdo que rola por baixo.
- **Contorno do alfinete** (`box-shadow: 0 0 0 1px #5c4318`): filete que define o alfinete sobre a faixa clara.
- **Alfinete escolhido** (`box-shadow: 0 0 0 calc(3 * var(--u)) var(--indigo)`): anel índigo da opção marcada, com 3px quando empilhada.

### Named Rules

**The Única Sombra Rule.** Só o que flutua sobre a rolagem projeta sombra. Faixas, linhas e campos ficam rentes ao pano.

## Shapes

A forma é reta nos campos e redonda só onde a mão toca. Faixas, seções e linhas de exame têm cantos vivos e atravessam a largura disponível. O círculo pertence aos alfinetes (11px a 13px) e a pílula pertence às ações de WhatsApp. A borda recortada vem das imagens de renda, repetidas na horizontal sobre e sob cada faixa clara.

### Named Rules

**The Reto e Redondo Rule.** Não existe canto intermediário: campo é reto, alfinete é círculo, ação é pílula.

## Components

### Buttons
Pílula índigo, firme e única, sempre levando ao WhatsApp.
- **Shape:** pílula completa (`calc(33 * var(--u))` no palco, 34px empilhada).
- **Primary:** fundo Índigo de Tinta, texto claro (#f3eee9), ícone do WhatsApp à esquerda e duas linhas: a ação em peso 600 e o número em algarismos tabulares.
- **Hover / Focus:** o fundo fecha para Índigo Fechado em 180ms; foco com contorno índigo de 2px e afastamento de 3px sobre a faixa.

### Barra fixa de WhatsApp
Aparece em 900px ou menos, a 12px das laterais e da base, somando a área segura do aparelho. Pílula de 56px de altura com ícone de 26px e a Barra flutuante como sombra. Some em 180ms enquanto o botão principal da faixa está visível, para nunca haver duas ações iguais na tela. O rodapé reserva 96px na base, somados à área segura, para a barra não cobrir o texto final.

### Faixa de agendamento
Assinatura do sistema: tira de renda que atravessa a tela com a pergunta, os cinco exames, o período e o botão de WhatsApp. Fundo Faixa de Renda, tinta índigo, bordas de renda em imagem acima e abaixo. Grupos separados por um Fio Índigo vertical. Escolher exame e período reescreve a mensagem do WhatsApp nos dois botões.

### Opções com alfinete
Cada opção é um rádio nativo invisível sobre toda a área do rótulo, com um alfinete de latão no lugar do círculo padrão.
- **Repouso:** alfinete acima do rótulo no palco, à esquerda quando empilhado.
- **Hover:** o alfinete cresce para 1,25 em 180ms.
- **Selecionada:** alfinete em 1,35 com anel índigo, rótulo em peso 800 e sublinhado.
- **Foco:** contorno índigo de 2px com afastamento de 4px ao redor da opção.

### Alfinete de latão
Círculo com degradê radial deslocado (`circle at 35% 30%`, de Brilho de Latão a Latão em 55% até Sombra de Latão). Separa links da navegação no palco, marca o início de cada linha de exame, serve de marcador na lista de convênios e indica cada opção da faixa.

### Links de texto
Herdam a tinta do campo, em peso 600, com sublinhado de 1px afastado 0,3em. No hover o sublinhado engrossa para 2px e desce para 0,45em em 180ms.

### Navigation
Links em Fio Branco sem sublinhado, com alfinetes entre os itens no palco e sublinhado de 1px no hover. Empilhada, perde os alfinetes, quebra em linhas e cada link ganha 44px de altura.

### Linha de exame
Nome, descrição e link Agendar em uma linha, abertos por um Fio Tênue com alfinete na extremidade esquerda. A última linha também fecha com um fio. Sem cartão e sem ícone.

### Pulso do coração
O coração de renda bate duas vezes em 1000ms (escala 1,018 e depois 1,01), com `cubic-bezier(0.16, 1, 0.3, 1)`. Dispara uma vez 500ms após o carregamento e a cada mudança na escolha de exame ou período. Com `prefers-reduced-motion: reduce`, o pulso não roda, as transições são removidas e a rolagem suave é desligada.

## Do's and Don'ts

### Do:
- **Do** manter o Vinho de Almofada com a textura de pano como chão de toda página nova.
- **Do** emoldurar toda faixa clara com as imagens de renda, acima e abaixo.
- **Do** usar Fio Branco sobre vinho e índigo, e Índigo de Tinta sobre a Faixa de Renda.
- **Do** usar contorno de foco de 2px em latão sobre vinho e índigo, e em índigo sobre a Faixa de Renda.
- **Do** construir a primeira tela composta com `--u` e o conteúdo em fluxo com `clamp()`.
- **Do** aplicar `tabular-nums lining-nums` a telefones, registros e números de endereço.
- **Do** levar toda ação de agendamento ao WhatsApp, com a mensagem já preenchida.
- **Do** condicionar qualquer movimento a `prefers-reduced-motion`.

### Don't:
- **Don't** usar o layout de clínica em azul e branco, foto de banco de imagens ou cartões com ícones.
- **Don't** usar latão em texto, em campo ou como contorno de foco sobre a Faixa de Renda, onde mede 2,46:1.
- **Don't** introduzir uma segunda família tipográfica.
- **Don't** substituir a renda em imagem por borda, ondulação ou traço desenhados em CSS.
- **Don't** projetar sombra em faixas, seções ou linhas; a sombra pertence à barra flutuante.
- **Don't** criar cantos intermediários em campos: campo é reto, alfinete é círculo, ação é pílula.
