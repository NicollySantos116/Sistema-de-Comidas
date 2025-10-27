import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const comidas = [
  // 1. Pratos Principais, Entradas, Salgados, etc.
  {
    id: 1,
    nome: "Feijoada Clássica",
    tipo: "Prato Principal",
    preco: 45.00,
    descricao: "Feijão preto cozido lentamente com carnes salgadas, paio e bacon. Acompanha arroz, farofa e couve."
  },
  {
    id: 2,
    nome: "Salmão Grelhado ao Molho de Maracujá",
    tipo: "Prato Principal",
    preco: 68.00,
    descricao: "Filé de salmão grelhado, servido com um agridoce e refrescante molho de maracujá e purê de batatas."
  },
  {
    id: 3,
    nome: "Picanha na Brasa",
    tipo: "Prato Principal",
    preco: 72.00,
    descricao: "Picanha suculenta assada no ponto de sua preferência. Acompanha vinagrete e mandioca frita."
  },
  {
    id: 4,
    nome: "Risoto de Funghi Secchi",
    tipo: "Prato Principal",
    preco: 55.00,
    descricao: "Arroz arbóreo cremoso com cogumelos funghi secchi italianos e toque de vinho branco."
  },
  {
    id: 5,
    nome: "Lasanha à Bolonhesa",
    tipo: "Prato Principal",
    preco: 38.00,
    descricao: "Camadas de massa fresca, molho bolonhesa tradicional, presunto e muito queijo muçarela."
  },
  {
    id: 6,
    nome: "Bruschetta de Tomate e Manjericão",
    tipo: "Entrada",
    preco: 18.00,
    descricao: "Pão italiano tostado com azeite, coberto com tomate fresco, manjericão e alho."
  },
  {
    id: 7,
    nome: "Coxinha de Frango com Catupiry",
    tipo: "Salgado",
    preco: 8.00,
    descricao: "Clássico salgado brasileiro, recheado com frango desfiado e autêntico Catupiry."
  },
  {
    id: 8,
    nome: "Bolo de Cenoura com Cobertura de Chocolate",
    tipo: "Sobremesa",
    preco: 15.00,
    descricao: "Bolo fofo de cenoura, caseiro, com uma generosa e brilhante cobertura de chocolate."
  },
  {
    id: 9,
    nome: "Tiramisu Originale",
    tipo: "Sobremesa",
    preco: 22.00,
    descricao: "Sobremesa italiana com camadas de biscoito champagne, café, mascarpone e cacau em pó."
  },
  {
    id: 10,
    nome: "Mousse de Limão",
    tipo: "Sobremesa",
    preco: 14.00,
    descricao: "Leve e refrescante mousse com sumo de limão siciliano."
  },
  {
    id: 11,
    nome: "Parmegiana de Frango",
    tipo: "Prato Principal",
    preco: 42.00,
    descricao: "Filé de frango empanado, coberto com molho de tomate caseiro e queijo gratinado."
  },
  {
    id: 12,
    nome: "Ceviche Clássico Peruano",
    tipo: "Entrada",
    preco: 35.00,
    descricao: "Peixe branco marinado em suco de limão, cebola roxa, coentro e pimenta."
  },
  {
    id: 13,
    nome: "Sopa Cremosa de Abóbora com Gengibre",
    tipo: "Sopa",
    preco: 28.00,
    descricao: "Sopa aveludada de abóbora cabotiá, realçada pelo toque picante do gengibre."
  },
  {
    id: 14,
    nome: "Tapioca de Queijo Coalho e Orégano",
    tipo: "Lanche",
    preco: 16.00,
    descricao: "Massa de tapioca crocante com recheio de queijo coalho grelhado e orégano."
  },
  {
    id: 15,
    nome: "Pastel de Feira de Carne",
    tipo: "Salgado",
    preco: 7.00,
    descricao: "Pastel de massa fina e crocante, recheado com carne moída temperada."
  },
  {
    id: 16,
    nome: "Hambúrguer Gourmet Cheddar Bacon",
    tipo: "Lanche",
    preco: 32.00,
    descricao: "Pão brioche, 180g de carne, queijo cheddar, bacon crocante e maionese defumada."
  },
  {
    id: 17,
    nome: "Yakisoba de Camarão",
    tipo: "Prato Principal",
    preco: 58.00,
    descricao: "Macarrão oriental salteado com camarões, legumes e molho especial à base de shoyu."
  },
  {
    id: 18,
    nome: "Açaí na Tigela com Granola e Banana",
    tipo: "Doce",
    preco: 25.00,
    descricao: "Açaí puro e gelado, servido com banana fatiada e granola crocante."
  },
  {
    id: 19,
    nome: "Esfiha de Carne Aberta",
    tipo: "Salgado",
    preco: 6.00,
    descricao: "Esfiha árabe aberta, com recheio tradicional de carne bovina temperada e limão."
  },
  {
    id: 20,
    nome: "Moqueca Baiana de Peixe",
    tipo: "Prato Principal",
    preco: 65.00,
    descricao: "Peixe cozido em leite de coco, azeite de dendê, pimentões e coentro. Acompanha pirão e arroz."
  },
  {
    id: 21,
    nome: "Quibe Frito",
    tipo: "Salgado",
    preco: 7.50,
    descricao: "Bolinho de trigo e carne moída, temperado com hortelã, frito e crocante."
  },
  {
    id: 22,
    nome: "Camarão na Moranga",
    tipo: "Prato Principal",
    preco: 85.00,
    descricao: "Camarões em molho cremoso, servidos dentro de uma abóbora moranga assada."
  },
  {
    id: 23,
    nome: "Panqueca Doce de Nutella com Morango",
    tipo: "Sobremesa",
    preco: 19.00,
    descricao: "Panqueca fina e macia, recheada com creme de avelã e morangos frescos."
  },
  {
    id: 24,
    nome: "Salada Caesar com Frango",
    tipo: "Salada",
    preco: 38.00,
    descricao: "Alface americana, frango grelhado, croutons, queijo parmesão e molho Caesar."
  },
  {
    id: 25,
    nome: "Caldo de Mandioca com Bacon",
    tipo: "Sopa",
    preco: 25.00,
    descricao: "Caldo cremoso de mandioca (aipim/macaxeira) finalizado com bacon crocante e cheiro-verde."
  },
  {
    id: 26,
    nome: "Bolo Red Velvet",
    tipo: "Sobremesa",
    preco: 18.00,
    descricao: "Bolo aveludado vermelho com cobertura e recheio de cream cheese."
  },
  {
    id: 27,
    nome: "Batata Frita Palito",
    tipo: "Acompanhamento",
    preco: 16.00,
    descricao: "Batatas fritas crocantes, corte palito."
  },
  {
    id: 28,
    nome: "Pudim de Leite Condensado",
    tipo: "Sobremesa",
    preco: 17.00,
    descricao: "Clássico pudim brasileiro, cremoso, com calda de caramelo escura."
  },
  {
    id: 29,
    nome: "Pizza Margherita (Broto)",
    tipo: "Pizza",
    preco: 35.00,
    descricao: "Molho de tomate, muçarela, rodelas de tomate, manjericão fresco e azeite."
  },
  {
    id: 30,
    nome: "Strogonoff de Carne",
    tipo: "Prato Principal",
    preco: 40.00,
    descricao: "Tiras de carne em molho cremoso à base de mostarda, ketchup e cogumelos. Acompanha arroz e batata palha."
  },
  {
    id: 31,
    nome: "Torta Holandesa",
    tipo: "Sobremesa",
    preco: 20.00,
    descricao: "Torta gelada com base de biscoito, creme, cobertura de chocolate e biscoitos Calipso."
  },
  {
    id: 32,
    nome: "Dadinhos de Tapioca com Geleia de Pimenta",
    tipo: "Entrada",
    preco: 28.00,
    descricao: "Cubos crocantes de tapioca e queijo coalho, servidos com agridoce geleia de pimenta."
  },
  {
    id: 33,
    nome: "Fettuccine Alfredo",
    tipo: "Prato Principal",
    preco: 48.00,
    descricao: "Massa fettuccine com molho cremoso de manteiga e queijo parmesão ralado."
  },
  {
    id: 34,
    nome: "Churros com Doce de Leite",
    tipo: "Doce",
    preco: 15.00,
    descricao: "Churros fritos e polvilhados com açúcar e canela, acompanhados por doce de leite."
  },
  {
    id: 35,
    nome: "Empada de Palmito",
    tipo: "Salgado",
    preco: 9.00,
    descricao: "Massa podre, recheio cremoso e saboroso de palmito."
  },
  {
    id: 36,
    nome: "Bobó de Camarão Vegano",
    tipo: "Prato Principal",
    preco: 55.00,
    descricao: "Versão vegana do bobó, com chuchu e palmito, no creme de mandioca, leite de coco e dendê."
  },
  {
    id: 37,
    nome: "Caldo Verde Português",
    tipo: "Sopa",
    preco: 26.00,
    descricao: "Caldo à base de batata, couve fatiada finamente e rodelas de linguiça portuguesa."
  },
  {
    id: 38,
    nome: "Omelete de Queijo e Presunto",
    tipo: "Lanche",
    preco: 20.00,
    descricao: "Omelete de 3 ovos, recheado com queijo muçarela e presunto."
  },
  {
    id: 39,
    nome: "Croissant de Queijo e Peru",
    tipo: "Lanche",
    preco: 18.00,
    descricao: "Croissant amanteigado e folhado, recheado com queijo prato e peito de peru."
  },
  {
    id: 40,
    nome: "Petit Gateau de Chocolate",
    tipo: "Sobremesa",
    preco: 24.00,
    descricao: "Bolinho quente de chocolate com recheio cremoso, servido com sorvete de baunilha."
  },
  {
    id: 41,
    nome: "Bife à Cavalo",
    tipo: "Prato Principal",
    preco: 43.00,
    descricao: "Bife grelhado coberto por dois ovos fritos. Acompanha arroz e fritas."
  },
  {
    id: 42,
    nome: "Sushi Hot Roll Filadélfia (8 unid)",
    tipo: "Japonês",
    preco: 30.00,
    descricao: "Rolls de salmão, cream cheese e cebolinha, empanados e fritos."
  },
  {
    id: 43,
    nome: "Crepe Salgado de Quatro Queijos",
    tipo: "Lanche",
    preco: 22.00,
    descricao: "Massa de crepe recheada com muçarela, provolone, parmesão e catupiry."
  },
  {
    id: 44,
    nome: "Arroz de Carreteiro",
    tipo: "Prato Principal",
    preco: 38.00,
    descricao: "Arroz cozido com carne-seca (charque) desfiada e temperos, prato típico gaúcho."
  },
  {
    id: 45,
    nome: "Quindim",
    tipo: "Sobremesa",
    preco: 12.00,
    descricao: "Doce de coco e gemas, com textura brilhante e lisa."
  },
  {
    id: 46,
    nome: "Pão de Queijo Recheado com Catupiry",
    tipo: "Salgado",
    preco: 11.00,
    descricao: "Pão de queijo grande, macio por dentro e recheado com Catupiry."
  },
  {
    id: 47,
    nome: "Carpaccio de Carne",
    tipo: "Entrada",
    preco: 32.00,
    descricao: "Fatias finas de carne crua, molho de mostarda, alcaparras, rúcula e parmesão."
  },
  {
    id: 48,
    nome: "Salada Caprese (Entrada)",
    tipo: "Entrada",
    preco: 25.00,
    descricao: "Rodelas de tomate, muçarela de búfala e folhas de manjericão, regadas com azeite e aceto."
  },
  {
    id: 49,
    nome: "Tacos de Frango (2 unid)",
    tipo: "Lanche",
    preco: 29.00,
    descricao: "Tortilhas de milho macias recheadas com frango desfiado, pico de gallo e sour cream."
  },
  {
    id: 50,
    nome: "Gelato Artesanal de Pistache",
    tipo: "Sobremesa",
    preco: 16.00,
    descricao: "Sorvete italiano cremoso e intenso, sabor pistache."
  }
];

async function seed() {
    console.log('Start seeding...');

    await prisma.comidas.deleteMany({}); 

    console.log('Dados antigos deletados. Inserindo 50 novos registros...');

    const result = await prisma.comidas.createMany({
        data: comidas,
        skipDuplicates: true,
    });

    console.log(`Database seeded com ${result.count} novos registros de comidas!`);
    await prisma.$disconnect();
}

seed().catch(e => {
    console.error(e);

    prisma.$disconnect();
    process.exit(1);
});