import './css/main.scss';
import { Application, Ticker } from 'pixi.js';
import { Game } from './ts/Game';

window.onload = () => {
  const app = new Application({
    width: 1280,
    height: 740,
    backgroundColor: 0xeeeeee,
    sharedTicker: true,
    sharedLoader: true,
  });

  document.body.appendChild(app.view);
  (<any>window).app = app;
  const game = new Game(app);
  const ticker = Ticker.shared;
  ticker.add(game.update.bind(game));
};
