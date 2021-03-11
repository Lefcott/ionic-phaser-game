export default class GameScene extends Phaser.Scene {
  player: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  right: Phaser.Input.Keyboard.Key;
  left: Phaser.Input.Keyboard.Key;

  constructor() {
    super({ key: 'SceneB', active: true });
  }

  preload() {
    this.load.image('sky', 'assets/images/sky.jpeg');
    this.load.image('ground', 'assets/images/ground.jpg');
    this.load.image('player', 'assets/images/player.png');
  }

  create() {
    this.player = this.physics.add.image(60, 60, 'player');
    this.player.setOrigin(0.5);
    this.player.setCollideWorldBounds(true);
    this.player.setBounce(0.4);
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    const graphics = this.add.graphics();

    graphics.fillStyle(0xff3300, 1);
    graphics.fillRect(100, 200, 600, 300);
    graphics.fillRect(200, 100, 100, 100);
    this.add.text(220, 100, 'B', { font: '96px Courier', color: '#ffffff' });
  }

  update() {
    if (this.right.isDown) {
      this.player.x += 5;
    } else if (this.left.isDown) {
      this.player.x -= 5;
    }
  }
}
