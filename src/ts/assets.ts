export type Assets = {
  baseUrl: string;
  images:{ key:string, url:string }[];
};
export default {
  baseUrl: './assets/',
  images: [
    {
      key: 'wheel',
      url: 'img/w3.png',
    },
    {
      key: 'wheel1',
      url: 'img/w2.png',
    },
    {
      key: 'stopper',
      url: 'img/arrow1.png',
    },
    {
      key: 'bg',
      url: 'img/bg.jpg',
    },
    {
      key: 'FONT1',
      url: 'img/FONT1.png',
    },
    {
      key: 'FONT2',
      url: 'img/FONT2.png',
    },
    
  ],
};
