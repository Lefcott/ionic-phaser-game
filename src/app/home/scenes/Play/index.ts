import Player from '../../objects/Player';
import Ball from '../../objects/Ball';
import Separator from '../../objects/Separator';

import constants from './constants';

export default class GameScene extends Phaser.Scene {
  player1: Phaser.GameObjects.Image;
  player2: Phaser.GameObjects.Image;
  ball: Phaser.Physics.Arcade.Image;

  constructor() {
    super({ key: 'Play' });
  }

  create() {
    new Separator(this);
    this.player1 = new Player(
      this,
      constants.playerMargin,
      +this.game.config.height / 2,
      'player1'
    );
    this.player2 = new Player(
      this,
      +this.game.config.width - constants.playerMargin,
      +this.game.config.height / 2,
      'player2'
    );
    this.ball = new Ball(this);

    this.physics.add.collider(this.ball, this.player1, this.collide);
    this.physics.add.collider(this.ball, this.player2, this.collide);

    this.physics.world.setBoundsCollision(false, false, true, true);
  }

  update() {}

  collide() {
    console.log('collide');
  }
}
