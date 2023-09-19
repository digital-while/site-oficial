import { iUser } from "../interfaces/user";
import logo from "../assets/w.png";
import mandim from "../assets/dev-mandim.jpg";
import gabriel from "../assets/dev-gabriel.jpg";
import imgSf from "../assets/semimg.png"

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
        "https://blog.xpeducacao.com.br/wp-content/uploads/2022/12/desenvolvedor-de-software.jpg",
    },
    {
      name: "Nathalia K.",
      occupation: "Designer",
      photo:
        "https://blog.xpeducacao.com.br/wp-content/uploads/2022/12/desenvolvedor-de-software.jpg",
    },
  ],
  controlPanel: {
    productEdit: [
      {
        title: "Design",
        description: "Aproveite nossos serviços de design, crie logos (provisórias ou definitivas), destaques, artes para impressão e divulgação!",
        urlName: "design",
        productList: [
          {
            name: "Design para Sites",
            img: 'https://s.tmimgcdn.com/scr/400x250/248100/modelo-de-design-de-site-de-consultor-gratuito_248126-original.jpg',
            littleDescription:
              "descrição pequena do produto (até 150 caracteres)",
            price: 123.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Logo Provisória",
            img: 'https://img.freepik.com/vetores-gratis/conjunto-de-design-de-marca-do-logotipo-azul_53876-97528.jpg',
            littleDescription:
              "descrição pequena do produto (até 150 caracteres)",
            price: 123.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Logo Definitiva",
            img: 'https://1000marcas.net/wp-content/uploads/2022/07/Los-logotipos-mas-famosos-en-azul.png',
            littleDescription:
              "descrição pequena do produto (até 150 caracteres)",
            price: 123.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Publicações",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-w7oVvYRYrcCGE7Jq6T5kD7X8jJvHsPHw7LNy60z1oVUKVoUTpCgVGRP6EO2v-SJZUFw&usqp=CAU',
            littleDescription:
              "descrição pequena do produto (até 150 caracteres)",
            price: 123.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Destaques",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIPGO4Tay_O7W-IWIHrKSOMikZKfbkUWVsl71DWSfizKugXSKcQwckcwUooZpDBLXTjhE&usqp=CAU',
            littleDescription:
              "descrição pequena do produto (até 150 caracteres)",
            price: 123.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Stories",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVVxbOxxHU2QVs2Qxvwww52evBAv29fKXTj3adsOqBQa_R6aek8_0AOrQmnLiOplxncU&usqp=CAU',
            littleDescription:
              "descrição pequena do produto (até 150 caracteres)",
            price: 123.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Cardápio",
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2KCTgx2x4ob28EYajc1dXiAKYFyOzMisvNA&usqp=CAU',
            littleDescription:
              "descrição pequena do produto (até 150 caracteres)",
            price: 123.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
        ],
      },
      {
        title: "Websites",
        description: "Fazemos a criação de Sites e Web Sistemas com foco em facilitar, automatizar e melhorar sua empresa.",
        urlName: "websites",
        productList: [
          {
            name: "Pacote While Light",
            img: imgSf,
            littleDescription:
              "descrição pequena do produto (até 150 caracteres)",
            price: 123.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Pacote While Light",
            img: imgSf,
            littleDescription:
              "descrição pequena do produto (até 150 caracteres)",
            price: 123.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Pacote While Light",
            img: imgSf,
            littleDescription:
              "descrição pequena do produto (até 150 caracteres)",
            price: 123.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
        ],
      },
      {
        title: "Serviços Complementares",
        description: "Aqui teremos todos os serviços por fora dos nossos sistemas e designs.",
        urlName: "scomplementares",
        productList: [
          {
            name: "WhatsApp Business",
            img: imgSf,
            littleDescription:
              "Nesse serviço, criamos toda a estrutura básica e completa do que irá precisar no seu WhatsApp Business.",
            price: 100.0,
            largeDescription:
              "Para fazer esse serviço precisamos que peça o formulário com todos os dados que serão necessários para a criação do WhatsApp Business.",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Gerenciamento de Estoque",
            img: imgSf,
            littleDescription:
              "Está com problemas de gerenciamento de estoque e administração de pagamentos? Podemos ajudar!",
            price: 123.0,
            largeDescription:
              "Entre em contato para saber mais detalhes dos valores e o que os Apps podem oferecer!",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Atendimento Automatizado",
            img: imgSf,
            littleDescription:
              "Precisa de ajuda para agilizar seus atendimentos via WhatsApp? Aqui criamos robôs para agilizar seu atendimento!",
            price: 200.0,
            largeDescription:
              "grande descrição do produto (sem limitação de caracteres)",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
        ],
      },
      {
        title: "Atualizações",
        description: "Aqui divulgaremos todas as  atualizações dos produtos que futuramente teremos na empresa.",
        urlName: "atualizacoes",
        productList: [
          {
            name: "Serviços Complementares",
            img: imgSf,
            littleDescription:
              "Criação de um Canal completo de WhatsApp.",
            price: 50.0,
            largeDescription:
              "Fazemos a criação de tudo que é necessário para ter seu próprio canal no WhatsApp, desde descrição até as fotos de perfil e o link para a divulgação.",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Criação e junção de Domínio",
            img: imgSf,
            littleDescription:
              "Teremos o serviço de adicionar o domínio da sua empresa ao seu site.",
            price: 100.0,
            largeDescription:
              "Faremos todo o processo de acrescentar o domínio comprado ao seu site. Só pediremos os dados necessários caso a compra já tenha sido feita, caso não tenha domínio, fazemos a compra por mais 40 reais.",
            blocked: false,
            edited: "2222-22-22 : 22:22:22",
            deleted: "1111-11-11 11:11:11",
          },
          {
            name: "Sistema Classic",
            img: imgSf,
            littleDescription:
              "Com esse sistema, terá um sistema completo de pedidos ou agendamentos!",
            price: 123.0,
            largeDescription:
              "Com esse sistema terá tudo que precisa para aumentar a velocidade e administração da sua empresa, nosso sistema receberá os pedidos e o meio de pagamento e entregará para o seu WhatsApp da empresa.",
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
