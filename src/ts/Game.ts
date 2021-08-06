import {
    Application, Container,
  } from 'pixi.js';
  import { preLoader } from './PreLoader';
  import assets from './assets';
  import { Emitter } from './Emitter';
  import * as PIXI from 'pixi.js';

  export class Game {
      private stage: Container;
  
      private readonly app: Application;
  
      private isInitialized = false;
      //public coin :Sprite|undefined;

      private emitter: Emitter | undefined;
  
      constructor(app:Application) {
        this.app = app;
        this.stage = app.stage;
  
        preLoader(assets, () => {
          this.isInitialized = true;
          this.emitter = new Emitter(1000, { scale: true });
          this.stage.addChild(this.emitter);
          this.emitter.start();
          this.emitter.x = (this.app.view.width / 2)-100;
          this.emitter.y = (this.app.view.height)-20;
          let textStyle = new PIXI.TextStyle({
            fill: '#eee011',
            "fontFamily": "\"Times New Roman\", Times, serif",
            "fontStyle": "italic",
            "fontVariant": "small-caps",
            "fontWeight": "bolder",
            fontSize: 50
          });
          
           let myText = new PIXI.Text("COIN   FOUNTAIN",textStyle);
           myText.anchor.set(0.5);
            myText.x = 400;
            myText.y = 100;
           this.app.stage.addChild(myText);
           
        });
        console.warn(this.app);
      }
  
     
      public update(delta:number):void {
        if (this.isInitialized && this.emitter) {
          this.emitter.update(delta);
        }
      }
      
    }