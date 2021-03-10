import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

import HomeScene from './scenes/Home';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      width: window.innerWidth,
      height: window.innerHeight,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: {
            y: 500,
          },
        },
      },
      render: {
        pixelArt: true,
      },
      parent: 'game',
      scene: HomeScene,
    };
  }

  ngOnInit(): void {
    this.phaserGame = new Phaser.Game(this.config);
  }
}