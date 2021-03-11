export default class Bootloader extends Phaser.Scene {
  constructor() {
    super({ key: 'Bootloader' });
  }

  preload() {
    this.load.on('complete', () => {
      this.scene.start('Play');
    });
    this.load.image('ball', 'assets/images/ball.png');
    this.load.image('player1', 'assets/images/left_pallete.png');
    this.load.image('player2', 'assets/images/right_pallete.png');
    this.load.image('separator', 'assets/images/separator.png');
  }
}
