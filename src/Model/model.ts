import { iUser } from "../interfaces/user";
import logo from "../assets/w.png"

// const client = [
//   {
//     name: "Digital While",
//     logo: "" /* aqui nesta parte, a logo pode ser tanto um link (endereço) ou pode ser um arquivo importado; */,
//     isAdmin: true,
//     team: [
//       {
//         name: "Gabriel W.",
//         occupation: "Developer Full Stack",
//         photo:
//           "https://blog.xpeducacao.com.br/wp-content/uploads/2022/12/desenvolvedor-de-software.jpg",
//       },
//       {
//         name: "Beatriz M.",
//         occupation: "Developer Full Stack",
//         photo:
//           "https://blog.xpeducacao.com.br/wp-content/uploads/2022/12/desenvolvedor-de-software.jpg",
//       },
//       {
//         name: "Amanda C.",
//         occupation: "Developer Full Stack",
//         photo:
//           "https://blog.xpeducacao.com.br/wp-content/uploads/2022/12/desenvolvedor-de-software.jpg",
//       },
//       {
//         name: "Nathalia K.",
//         occupation: "Designer",
//         photo:
//           "https://blog.xpeducacao.com.br/wp-content/uploads/2022/12/desenvolvedor-de-software.jpg",
//       },
//     ],
//     controlPanel: {
//       productEdit: {
//         socialMedia: [
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//         ],
//         design: [
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//         ],
//         websites: [
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//         ],
//         paidTraffic: [
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//         ],
//         videoEditing: [
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//         ],
//         updates: [
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//           {
//             name: "Pacote While Light",
//             img: "",
//             littleDescription:
//               "descrição pequena do produto (até 150 caracteres)",
//             price: 123.0,
//             largeDescription:
//               "grande descrição do produto (sem limitação de caracteres)",
//             blocked: false,
//             edited: "2222-22-22 : 22:22:22",
//             deleted: "1111-11-11 11:11:11",
//           },
//         ],
//       },
//       colorAndImageEdit: {
//         colors: {},
//         images: {},
//       },
//       contactEdit: {
//         email: "digitalwhile@gmail.com",
//         whatsapp: 27992044443,
//         instagram: "digitalwhile.ofc",
//       },
//       spaceFeedback: [
//         {
//           title: "Alguma coisa",
//           text: "algum feedback",
//           user: {
//             name: "nome do corno",
//             idWebsite: "id do website do corno",
//           },
//         },
//       ],
//     },
//   },
// ];

export const client: iUser = {
  name: "Digital While",
  logo: logo /* aqui nesta parte, a logo pode ser tanto um link (endereço) ou pode ser um arquivo importado; */,
  isAdmin: true,
  team: [
    {
      name: "Gabriel W.",
      occupation: "Developer Full Stack",
      photo:
        "https://blog.xpeducacao.com.br/wp-content/uploads/2022/12/desenvolvedor-de-software.jpg",
    },
    {
      name: "Beatriz M.",
      occupation: "Developer Full Stack",
      photo:
        "https://blog.xpeducacao.com.br/wp-content/uploads/2022/12/desenvolvedor-de-software.jpg",
    },
    {
      name: "Amanda C.",
      occupation: "Developer Full Stack",
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
        title: "Social Media",
        description: "descrição",
        productList: [
          {
            name: "Pacote While Light",
            img: "",
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
            img: "",
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
            img: "",
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
        title: "Design",
        description: "descrição",
        productList: [
          {
            name: "Pacote While Light",
            img: "",
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
            img: "",
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
            img: "",
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
        description: "descrição",
        productList: [
          {
            name: "Pacote While Light",
            img: "",
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
            img: "",
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
            img: "",
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
        title: "Paid Traffic",
        description: "descrição",
        productList: [
          {
            name: "Pacote While Light",
            img: "",
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
            img: "",
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
            img: "",
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
        title: "Video Editing",
        description: "descrição",
        productList: [
          {
            name: "Pacote While Light",
            img: "",
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
            img: "",
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
            img: "",
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
