export interface ImageAttributes {
  url: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: {
      url: string;
      width: number;
      height: number;
    };
    medium: {
      url: string;
      width: number;
      height: number;
    };
    small: {
      url: string;
      width: number;
      height: number;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  provider: string;
  createdAt: string;
  updatedAt: string;
}

export interface ImageData {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageComponent {
  id: number;
  position: string;
  image: {
    data: ImageData;
  };
}

export interface Taskcomponent {
  id: number;
  title: string;
  titleTextColor: string;
  description: string;
  buttonLabel: string;
  buttonColor: string;
  buttonRedirectUrl: string;
  leftImage: {
    data: ImageData;
  };
  rightImage: {
    data: ImageData;
  };
  ImageComponent: ImageComponent;
}

export interface Attributes {
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  taskcomponent: Taskcomponent[];
}

export interface Productss {
  id: number;
  attributes: Attributes;
}

export interface Pagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface Meta {
  pagination: Pagination;
}

export interface Root {
  data: Productss[];
  meta: Meta;
}





// export interface ImageAttributes {
  //   url: string;
  // }

  // export interface ImageData {
  //   attributes: ImageAttributes;
  // }

  // export interface Root {
  //   data: Productss[]
  //   meta: Meta
  // }
  
  // export interface Productss {
  //   id: number
  //   attributes: Attributes
  // }
  
  // export interface Attributes {
  //   createdAt: string
  //   updatedAt: string
  //   publishedAt: string
  //   taskcomponent: Taskcomponent[]
  // }
  
  // export interface Taskcomponent {
  //   id: number
  //   title: string
  //   titleTextColor: string
  //   description: string
  //   buttonLabel: string
  //   buttonColor: string
  //   buttonRedirectUrl: string,
  //   leftImage: {
  //     data: ImageData;
  //   };
  //   rightImage: {
  //     data: ImageData;
  //   };
  // }
  
  // export interface Meta {
  //   pagination: Pagination
  // }
  
  // export interface Pagination {
  //   page: number
  //   pageSize: number
  //   pageCount: number
  //   total: number
  // }
  




