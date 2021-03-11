import Player from '../../objects/Player';
import Ball from '../../objects/Ball';
import Separator from '../../objects/Separator';

import constants from './constants';

export default class GameScene extends Phaser.Scene {
  player1: Player;
  player2: Player;
  ball: Ball;

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

    this.physics.add.collider(
      this.ball,
      this.player1,
      this.collide,
      null,
      this
    );
    this.physics.add.collider(
      this.ball,
      this.player2,
      this.collide,
      null,
      this
    );

    this.physics.world.setBoundsCollision(false, false, true, true);
  }

  update() {
    if (this.ball.x < 0 || this.ball.x > this.game.config.width) {
      this.ball.setPosition(this.ball.initialX, this.ball.initialY);
      this.ball.setVelocityY(0);
    }

    if (this.input.activePointer.isDown) {
      const isLeft =
        this.input.activePointer.worldX < +this.game.config.width / 2;
      this.player1.setVelocityY(isLeft ? 300 : -300);
    } else {
      this.player1.setVelocityY(0);
    }
  }

  collide() {
    this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
  }
}
