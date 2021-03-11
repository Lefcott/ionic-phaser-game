export default class Ball extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene) {
    super(
      scene,
      +scene.game.config.width / 2,
      +scene.game.config.height / 2,
      'ball'
    );
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.setVelocityX(-180);
    this.setCollideWorldBounds(true);
    this.setBounce(1);
  }
}
