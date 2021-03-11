export default class Ball extends Phaser.Physics.Arcade.Sprite {
  initialX: number;
  initialY: number;

  constructor(scene: Phaser.Scene) {
    const initialX = +scene.game.config.width / 2;
    const initialY = +scene.game.config.height / 2;

    super(scene, initialX, initialY, 'ball');

    this.initialX = initialX;
    this.initialY = initialY;
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.setVelocityX(-180);
    this.setCollideWorldBounds(true);
    this.setBounce(1);
  }
}
