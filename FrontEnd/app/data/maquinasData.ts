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
  },
  {
    id: 4,
    nome: "Makita Serra Circular 7-1/4\"",
    descricaoCurta: "A Serra Circular Makita oferece cortes precisos em madeira. Potente e ergonômica, é indispensável para trabalhos de carpintaria e construção civil.",
    imagem: "/images/serra-circular.png",
    tutorial: "Antes de iniciar o corte, verifique se o equipamento está fora da tomada e certifique-se de que o disco está bem fixado e é apropriado para o material. Ajuste a profundidade e o ângulo de corte na base da serra. Apoie firmemente a peça a ser cortada, ligue a máquina e espere atingir a rotação máxima antes de tocar na madeira. Nunca force a serra durante o avanço para evitar solavancos."
  },
  {
    id: 5,
    nome: "Bosch Esmerilhadeira Angular 4-1/2\"",
    descricaoCurta: "Esmerilhadeira Bosch ideal para cortes, desbastes e acabamentos em metais. Alta performance com capa de proteção ajustável para máxima segurança.",
    imagem: "/images/esmerilhadeira.png",
    tutorial: "Sempre verifique se a máquina está desconectada da energia antes de trocar o disco usando a chave de pino. Posicione a capa de proteção de forma que desvie as faíscas para longe do seu corpo. Ao cortar, mantenha a ferramenta em um ângulo de 90 graus em relação à peça de metal. Ao desbastar, incline a máquina num ângulo de 15 a 30 graus. Não aplique pressão excessiva contra a peça."
  },
  {
    id: 6,
    nome: "Vonder Compressor de Ar 50L",
    descricaoCurta: "O Compressor Vonder é versátil e robusto, perfeito para pinturas, calibração de pneus e acionamento de ferramentas pneumáticas em oficinas.",
    imagem: "/images/compressor.png",
    tutorial: "Antes do primeiro uso, verifique o nível de óleo no visor frontal do cárter. Ligue o compressor na tomada e puxe o interruptor do pressostato para carregar o reservatório. Aguarde o motor desligar automaticamente ao atingir a pressão máxima. Ajuste a válvula de saída para a pressão ideal da ferramenta acoplada. Ao fim do dia, abra a válvula de purga inferior para retirar a água condensada de dentro do cilindro."
  }
];