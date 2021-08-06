export type Assets = {
    baseUrl: string;
    images:{ key:string, url:string }[];
  };
  export default {
    baseUrl: './assets/',
    images: [
      
      {
        key: 'coin11',
        url: 'img/coin11.jpg',
      },
      
      {
        key: 'coin',
        url: 'img/coin.jpg',
      },
      {
        key: 'coin1',
        url: 'img/coin1.jpg',
      },
      {
        key: 'coin2',
        url: 'img/coin2.jpg',
      },
    ],
  };