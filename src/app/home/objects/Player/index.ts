export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x, y, key) {
    super(scene, x, y, key);
    scene.add.existing(this);
    scene.physics.world.enable(this);
    this.body.immovable = true;
  }
}
