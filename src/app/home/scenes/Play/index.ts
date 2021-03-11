import Player from '../../objects/Player';

import constants from './constants';

export default class GameScene extends Phaser.Scene {
  player1: Phaser.GameObjects.Image;
  player2: Phaser.GameObjects.Image;
  ball: Phaser.Physics.Arcade.Image;

  constructor() {
    super({ key: 'Play' });
  }

  create() {
    this.add.image(
      +this.game.config.width / 2,
      +this.game.config.height / 2,
      'separator'
    );
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
    this.ball = this.physics.add.image(
      +this.game.config.width / 2,
      +this.game.config.height / 2,
      'ball'
    );
    this.ball.setVelocityX(-180);

    this.physics.add.collider(this.ball, this.player1, null, this.collide);
    this.physics.add.collider(this.ball, this.player2, null, this.collide);
  }

  update() {}

  collide() {
    console.log('collide');
  }
}
