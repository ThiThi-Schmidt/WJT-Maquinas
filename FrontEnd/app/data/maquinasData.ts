// Exportamos o "Tipo" para o TypeScript saber exatamente o que é uma máquina
export interface Maquina {
  id: number;
  nome: string;
  descricaoCurta: string;
  imagem: string;
  tutorial: string;
}

// Exportamos os nossos dados fictícios
export const maquinasData: Maquina[] = [
  {
    id: 1,
    nome: "WAP Líder 2200",
    descricaoCurta: "A Lavadora de Alta Pressão WAP Líder 2200 é a parceira ideal para quem busca remover sujeiras incrustadas com agilidade e menos esforço.",
    imagem: "/images/lavadora2.png",
    tutorial: "Para ligar a lavadora, verifique se a entrada de água está devidamente conectada e livre de ar no sistema. Após ligar o interruptor principal na lateral do equipamento, ajuste o bico da lança para o tipo de jato desejado. Certifique-se de direcionar o gatilho da pistola para uma área segura antes de iniciar o ciclo de limpeza. Ao finalizar, desligue a chave e acione o gatilho novamente para aliviar a pressão interna antes de desconectar as mangueiras."
  },
  {
    id: 2,
    nome: "DeWalt 20V MAX Brushless",
    descricaoCurta: "A DeWalt 20V Brushless fura e parafusa com alta potência. É essencial para marcenaria e montagens rápidas com força, precisão e total mobilidade sem fios.",
    imagem: "/images/parafusadeira2.png",
    tutorial: "Para operar a parafusadeira, certifique-se de que a bateria de 20V esteja totalmente carregada e devidamente travada na base do equipamento. Após inserir o bit ou broca no mandril de aperto, ajuste o anel de torque para o nível adequado ou selecione o modo de furação. Verifique o seletor para definir a rotação (avanço ou reverso). Ao finalizar o uso, remova a bateria para evitar acionamentos acidentais durante a limpeza e armazene todos os componentes com segurança em sua maleta de transporte.."
  },
  {
    id: 3,
    nome: "DeWalt Soprador/Aspirador elétrico",
    descricaoCurta: "O Soprador DeWalt limpa pó e folhas com jato de ar potente. É essencial para obras e jardins, oferecendo limpeza prática sem esforço manual.",
    imagem: "/images/soprador2.png",
    tutorial: "Para operar o soprador, conecte o cabo elétrico à rede compatível e direcione o bocal para a área de trabalho antes de acionar o interruptor. Durante o uso, mantenha as aletas de ventilação traseiras desobstruídas para garantir o fluxo de ar e evitar o superaquecimento do motor. Após finalizar o serviço, desconecte o equipamento da tomada, limpe o acúmulo de poeira das entradas de ar com um pincel macio e armazene a ferramenta em um local seco e seguro."
  }
];