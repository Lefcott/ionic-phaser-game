export default class Separator extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene) {
    super(
      scene,
      +scene.game.config.width / 2,
      +scene.game.config.height / 2,
      'separator'
    );
    scene.add.existing(this);
  }
}
