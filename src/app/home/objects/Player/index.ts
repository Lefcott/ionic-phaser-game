export default class Player extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, x, y, type) {
    super(scene, x, y, type);
    scene.add.existing(this);
    // scene.physics.world.enable(this);
  }
}
