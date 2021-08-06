import {
  Application, Container, Sprite, Texture, DEG_TO_RAD,
} from 'pixi.js';
import * as PIXI from 'pixi.js';
import { gsap } from 'gsap';
import { preLoader } from './PreLoader';
import assets from './assets';
import { getTexture } from './Textures';

export class Game {
    private stage: Container;

    private readonly app: Application;

    private isInitialized = false;
    public font1:Sprite|undefined;
    public font2:Sprite|undefined;
    private wheel: Sprite|undefined;
    
    public stopper: Sprite|undefined;
      
   public prizes = ["1","2","3","4","5","6","7","8","9","10","11","12"
   ]; 
    private prizeNum!: number;
    private segAngle = 360 / this.prizes.length;
    private readonly background : Container;
    constructor(app:Application) {
      this.app = app;
      this.stage = app.stage;
      const centerX = app.view.width / 2;
      const centerY = app.view.height / 2;
      this.background = new Container();
      this.stage.addChild(this.background);
      preLoader(assets, () => {
         const img =new Sprite(getTexture('bg') as Texture);
        img.position.set(0, 0);
        img.width = this.app.view.width;
        img.height = this.app.view.height;
        this.background.addChild(img);
        this.isInitialized = true;
        const wheel = new Sprite(getTexture('wheel') as Texture);
        wheel.anchor.set(0.5);
        wheel.position.set(centerX, centerY);
        this.stage.addChild(wheel);
        this.wheel = wheel;
        const stopper=new Sprite(getTexture('stopper') as Texture);
        stopper.anchor.set(0.5);
        stopper.position.set(centerX,(centerY/2)-100);
        this.stage.addChild(stopper);


        const font1 = new Sprite(getTexture('FONT1') as Texture);
        font1.anchor.set(0.5);
        font1.position.set(centerX-140,centerY-160);
        this.stage.addChild(font1);


        const font2 = new Sprite(getTexture('FONT2') as Texture);
        font2.anchor.set(0.5);
        font2.position.set(centerX+250,centerY-200);
        this.stage.addChild(font2);

        wheel.interactive = true;
        wheel.buttonMode=true;
        wheel.on('click', () => {
          this.prizeNum = Math.floor(Math.random() * this.prizes.length);
          const stopAngle = this.segAngle * this.prizeNum;
          gsap.to(wheel, { rotation: - DEG_TO_RAD * (3600 + stopAngle+10), duration: 2 });
          
         setInterval(this.textdisplay,2500);
        }); 
      });

      console.warn(this.app);
    }

    public update():void {
      // eslint-disable-next-line no-empty
      if (this.isInitialized && this.wheel) {
        
      }
    }
    textdisplay=()=>{
      let textStyle = new PIXI.TextStyle({
        fill: '#DD3366',
        fontFamily: 'Open Sans',
        //fontWeight: 300,
        fontSize: 50
      });
       var prize = this.prizes[this.prizeNum]; 
       let myText = new PIXI.Text( "! You won "+prize+" Points! ",textStyle);
       myText.anchor.set(0.5);
        myText.x = 500;
        myText.y = 650;
       this.app.stage.addChild(myText);
    }
}
