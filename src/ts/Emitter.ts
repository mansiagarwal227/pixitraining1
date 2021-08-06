import { ParticleContainer } from 'pixi.js';
import particles = require('pixi-particles');
//import { getSmily } from './Textures';

export class Emitter extends ParticleContainer {
  private pEmitter: particles.Emitter;

  constructor(maxCount: number, props?:any) {
    super(maxCount, props);
    this.pEmitter = new particles.Emitter(this,
      "../assets/img/coin2.jpg",
      {
        "alpha": {
          "start": 1,
          "end": 0.8
        },
        "scale": {
          "start": 0.2,
          "end": 0.5,
          "minimumScaleMultiplier": 1
        },
        "color": {
          "start": "#ffffff",
          "end": "#ecff9e"
        },
        "speed": {
          "start": 2000,
          "end": 500,
          "minimumSpeedMultiplier": 1
        },
        "acceleration": {
          "x": 0,
          "y": 0
        },
        "maxSpeed": 0,
        "startRotation": {
          "min": 230,
          "max": 320 
        },
        "noRotation": false,
        "rotationSpeed": {
          "min": 0,
          "max": 20
        },
        "lifetime": {
          "min": 0.25,
          "max": 0.5
        },
        "blendMode": "normal",
        "frequency": 0.001,
        "emitterLifetime": -1,
        "maxParticles": 500,
        "pos": {
          "x": 0,
          "y": 0
        },
        "addAtBack": false,
        "spawnType": "point"
       }
    );
  }

  public start(): void {
    this.pEmitter.emit = true;
  }
  public update(delta: number): void {
    this.pEmitter.update(delta * 0.001);
  }
}
