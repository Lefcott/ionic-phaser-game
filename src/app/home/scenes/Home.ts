export default class GameScene extends Phaser.Scene {
  player: Phaser.Types.Physics.Arcade.ImageWithDynamicBody;
  right: Phaser.Input.Keyboard.Key;
  left: Phaser.Input.Keyboard.Key;

  constructor() {
    super({ key: 'main' });
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
    // this.player.setVelocity(10, 0);
    // this.input.keyboard.on('keydown-RIGHT', (event) => {
    //   this.player.setVelocityX(200);
    // });
    // this.input.keyboard.on('keyup-RIGHT', (event) => {
    //   this.player.setVelocityX(0);
    // });
    // this.cursor = this.input.keyboard.createCursorKeys();
    this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
  }

  update() {
    if (this.right.isDown) {
      this.player.x += 5;
    } else if (this.left.isDown) {
      this.player.x -= 5;
    }
  }
}
