import { iUser } from "../interfaces/user";
import logo from "../assets/w.png";
import mandim from "../assets/dev-mandim.jpg";
import gabriel from "../assets/dev-gabriel.jpg";
import amanda from "../assets/amanda.png"
import nathalia from "../assets/nat.png"
//import imgSf from "../assets/semimg.png"

export const client: iUser = {
  name: "Digital While",
  logo: logo /* aqui nesta parte, a logo pode ser tanto um link (endereço) ou pode ser um arquivo importado; */,
  isAdmin: true,
  team: [
    {
      name: "Gabriel W.",
      occupation: "Desenvolvedor Full Stack",
      photo:
        gabriel,
    },
    {
      name: "Beatriz M.",
      occupation: "Desenvolvedora Full Stack e CEO",
      photo:
        mandim,
    },
    {
      name: "Amanda C.",
      occupation: "Desenvolvedora Full Stack",
      photo:
        amanda,
    },
    {
      name: "Nathalia K.",
      occupation: "Designer",
      photo:
        nathalia,
    },
  ],
  controlPanel: {
    productEdit: [
      // {
      //   title: "Design",
      //   description: "Aproveite nossos serviços de design, crie logos (provisórias ou definitivas), destaques, artes para impressão e divulgação!",
      //   urlName: "design",
      //   productList: [
      //     {
      //       name: "Design para Sites",
      //       img: 'https://s.tmimgcdn.com/scr/400x250/248100/modelo-de-design-de-site-de-consultor-gratuito_248126-original.jpg',
      //       littleDescription:
      //         "descrição pequena do produto (até 150 caracteres)",
      //       price: 123.0,
      //       largeDescription:
      //         "grande descrição do produto (sem limitação de caracteres)",
      //       blocked: false,
      //       edited: "2222-22-22 : 22:22:22",
      //       deleted: "1111-11-11 11:11:11",
      //     },
      //     {
      //       name: "Logo Provisória",
      //       img: 'https://img.freepik.com/vetores-gratis/conjunto-de-design-de-marca-do-logotipo-azul_53876-97528.jpg',
      //       littleDescription:
      //         "descrição pequena do produto (até 150 caracteres)",
      //       price: 123.0,
      //       largeDescription:
      //         "grande descrição do produto (sem limitação de caracteres)",
      //       blocked: false,
      //       edited: "2222-22-22 : 22:22:22",
      //       deleted: "1111-11-11 11:11:11",
      //     },
      //     {
      //       name: "Logo Definitiva",
      //       img: 'https://1000marcas.net/wp-content/uploads/2022/07/Los-logotipos-mas-famosos-en-azul.png',
      //       littleDescription:
      //         "descrição pequena do produto (até 150 caracteres)",
      //       price: 123.0,
      //       largeDescription:
      //         "grande descrição do produto (sem limitação de caracteres)",
      //       blocked: false,
      //       edited: "2222-22-22 : 22:22:22",
      //       deleted: "1111-11-11 11:11:11",
      //     },
      //     {
      //       name: "Publicações",
      //       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-w7oVvYRYrcCGE7Jq6T5kD7X8jJvHsPHw7LNy60z1oVUKVoUTpCgVGRP6EO2v-SJZUFw&usqp=CAU',
      //       littleDescription:
      //         "descrição pequena do produto (até 150 caracteres)",
      //       price: 123.0,
      //       largeDescription:
      //         "grande descrição do produto (sem limitação de caracteres)",
      //       blocked: false,
      //       edited: "2222-22-22 : 22:22:22",
      //       deleted: "1111-11-11 11:11:11",
      //     },
      //     {
      //       name: "Destaques",
      //       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPGO4Tay_O7W-IWIHrKSOMikZKfbkUWVsl71DWSfizKugXSKcQwckcwUooZpDBLXTjhE&usqp=CAU',
      //       littleDescription:
      //         "descrição pequena do produto (até 150 caracteres)",
      //       price: 123.0,
      //       largeDescription:
      //         "grande descrição do produto (sem limitação de caracteres)",
      //       blocked: false,
      //       edited: "2222-22-22 : 22:22:22",
      //       deleted: "1111-11-11 11:11:11",
      //     },
      //     {
      //       name: "Stories",
      //       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVVxbOxxHU2QVs2Qxvwww52evBAv29fKXTj3adsOqBQa_R6aek8_0AOrQmnLiOplxncU&usqp=CAU',
      //       littleDescription:
      //         "descrição pequena do produto (até 150 caracteres)",
      //       price: 123.0,
      //       largeDescription:
      //         "grande descrição do produto (sem limitação de caracteres)",
      //       blocked: false,
      //       edited: "2222-22-22 : 22:22:22",
      //       deleted: "1111-11-11 11:11:11",
      //     },
      //     {
      //       name: "Cardápio",
      //       img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KCTgx2x4ob28EYajc1dXiAKYFyOzMisvNA&usqp=CAU',
      //       littleDescription:
      //         "descrição pequena do produto (até 150 caracteres)",
      //       price: 123.0,
      //       largeDescription:
      //         "grande descrição do produto (sem limitação de caracteres)",
      //       blocked: false,
      //       edited: "2222-22-22 : 22:22:22",
      //       deleted: "1111-11-11 11:11:11",
      //     },
      //   ],
      // },
      {
        title: "Sites",
        description: "Aqui nós temos sites com foco em facilitar, automatizar e melhorar a imagem da sua empresa.",
        urlName: "sites",
        productList: [
          {
            name: "Site Simples",
            img: "https://planejadorweb.com.br/wp-content/uploads/2021/04/modelos-de-sites-17.jpg",
            littleDescription:
              "Se estiver com baixo orçamento e em busca de um site simples e direto? Nós temos!",
            price: 1500.00,
            largeDescription:
              "Tenha visibilidade, acessibilidade, credibilidade, marketing, publicidade, comunicação, suporte ao cliente, vendas, comercio eletrônico, alcance global, análise, feedback e o mais importante, competitividade no mercado.",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Vitrine de Produtos",
            img: "https://d1ih8jugeo2m5m.cloudfront.net/2022/07/vitrine-virtual-boreal-joias.jpg",
            littleDescription:
              "Está em busca de um site com foco em fazer mostruário dos seus produtos? Nós temos!",
            price: 2500.00,
            largeDescription:
              "Aumente sua visibilidade, tenha informações detalhadas, facilidade de compra, análise e otimização, alcance global, marketing, crie promoções atrativas, interação e o mais importante, ganhe feedbacks.",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Landing Page",
            img: "https://img.freepik.com/vetores-gratis/conjunto-de-modelos-de-design-de-pagina-de-destino-de-site-moderno-para-celular-ou-tablet-com-artigos-da-galeria-formulario-de-contato-ilustracao-plana-isolada_1284-60948.jpg?size=626&ext=jpg&ga=GA1.1.867424154.1697587200&semt=ais",
            littleDescription:
              "Precisa de uma página rápida e direta para receber seus leads? Nós temos!",
            price: 2000.00,
            largeDescription:
              "Garanta que os visitantes ajam de acordo com o objetivo da página. Através de um design claro e atraente, mensagens diretas e persuasivas.",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
        ],
      },
      {
        title: "Web Sistemas",
        description: "Precisa de um sistema para automatizar e agilizar o funcionamento da sua empresa?.",
        urlName: "web-sistemas",
        productList: [
          {
            name: "Sistema de Pedidos",
            img: "https://assets-global.website-files.com/60870fec5b198a263fa79bcb/64f1ef86a9500669ffd06ac2_delivery%20sistema%20Kyte.webp",
            littleDescription:
              "Criamos sistemas simples e intuitivos. Ganhe da concorrência na velocidade e automação!",
            price: 2500.00,
            largeDescription:
              "Sistemas de pedidos são essenciais para empresas por várias razões, dentre elas: facilidade, conveniência, precisão, redução de erros e prejuízo, eficiência operacional, rastreabilidade, automação, análise, insights e o mais importante, gestão de relacionamento com o cliente.",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Sistema de Comanda",
            img: "https://loyverse.com/sites/all/themes/loyversecom/images/industrie/br/bar/ipad-phone.webp",
            littleDescription:
              "Está com problemas de gerenciamento de estoque, administração de pagamentos e controle de pedidos? Podemos ajudar!",
            price: 2000.00,
            largeDescription:
              "Sistemas de comandas são úteis em ambientes como restaurantes, bares ou estabelecimentos similares. Eles oferecem benefícios significativos como precisão, organização, eficiência, personalização, detalhamento, integração com a cozinha/bar, controle, gerenciamento e o mais importante, experiênxia do cliente.",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Sistema de Agendamento",
            img: "https://images.ctfassets.net/63bmaubptoky/kg8ly2L7Jxv7eobKb4tQw4PdQMEbHyIKisdeaqNB5FA/f3cede141608984a1782796d133bfb4f/setmore-BR-Capterra-Image-2.png",
            littleDescription:
              "Precisa de ajuda para agilizar seus agendamentos? Podemos te ajudar!",
            price: 3000.0,
            largeDescription:
              "Sistemas de agendamento são valiosos em muitos setores, desde clínicas médicas até serviços de beleza e além. Algumas razões importantes para sua utilidade, facilidade de marcação, redução de espera, lembretes automatizados, gerenciamento eficiente, personalização e histórico, análise e insights e o mais importante, integração com pagamento.",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Outros Sistemas",
            img: "https://www.simplesagenda.com.br/site/images/agenda-online.webp",
            littleDescription:
              "Precisa de algum sistema personalizado? Entre em contato que com certeza podemos te ajudar!",
            price: 0.0,
            largeDescription:
              "Caso precise de qualquer outro tipo de sistema, com certeza estaremos aqui para lhe atender da melhor forma possível! Não perca tempo, entre em contato!",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
        ],
      },
      {
        title: "Atualizações Futuras",
        description: "Aqui divulgaremos todas as  atualizações dos serviços e produtos que futuramente teremos na empresa.",
        urlName: "atualizacoes",
        productList: [
          {
            name: "Sistemas de Aplicativos Android",
            img: "https://madeinweb.com.br/wp-content/uploads/2019/01/aplicativo-e-sistema-web-quais-sao-as-diferencas-1280x720.jpg",
            littleDescription:
              "",
            price: 50.0,
            largeDescription:
              "Aguardem por mais novidades!",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Sistemas de Aplicativos IOS",
            img: "https://www.madeinweb.com.br/wp-content/uploads/2019/01/aplicativo-e-sistema-web-quais-sao-as-diferencas-3.jpg",
            littleDescription:
              "",
            price: 100.0,
            largeDescription:
              "Aguardem por mais novidades!",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Sistemas de Cobrança Mensal",
            img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-lJahP412r2DqgaP_6TPB0QH6DwWyotOCaU2aL6cd-kg8O9c0oIRLRRdnYyl_Jk4yo8s&usqp=CAU",
            littleDescription:
              "",
            price: 123.0,
            largeDescription:
              "Aguardem por mais novidades!",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
        ],
      }
    ],
    colorImageEdit: {
      colors: {},
      images: [
        {
          title: "titulo da img",
          path: "path ou url da img",
        },
        {
          title: "titulo da img",
          path: "path ou url da img",
        },
      ],
    },
    contactEdit: {
      email: "digitalwhile@gmail.com",
      phone: 27992044443,
      instagram: "digitalwhile.ofc",
    },
    feedBack: [
      {
        title: "Alguma coisa",
        text: "algum feedback",
        user: {
          name: "nome do corno",
          idWebsite: "id do website do corno",
        },
      },
    ],
  },
};
