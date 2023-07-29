export interface iUser {
  name: string;
  logo: string;
  isAdmin: boolean;
  team: iEmployee[];
  controlPanel: iControlPanel;
}

export interface iEmployee {
  name: string;
  occupation: string;
  photo: string;
}

export interface iControlPanel {
  productEdit: iProductCategory[];
  colorImageEdit: iVisuals;
  contactEdit: iContacts;
  feedBack: iFeedback[];
}

export interface iProductCategory {
  title: string;
  description: string;
  urlName: string;
  productList: iProduct[];
}

export interface iProduct {
  name: string;
  img: string;
  littleDescription: string;
  price: number;
  largeDescription: string;
  blocked: boolean;
  edited: string;
  deleted: string;
}

export interface iVisuals {
  colors: {}; //Definir como irá ficar a quantidade e nome das cores
  images: iImage[];
}

export interface iImage {
  title: string;
  path: string;
}

export interface iContacts {
  email: string;
  phone: number | string;
  instagram: string; //Verificar sobre inserir mais redes sociais
}

export interface iFeedback {
  title: string;
  text: string;
  user: {
    name: string;
    idWebsite: string;
  };
}
