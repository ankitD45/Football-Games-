/**
 * main.js
 * ------------------------------------------------------------
 * Boots the Phaser game. We use a fixed portrait base resolution
 * (480x854 — a common 9:16 ratio) and Phaser's Scale.FIT mode so
 * the game letterboxes cleanly on any phone, tablet, or desktop
 * browser window without distortion.
 */
const config = {
  type: Phaser.AUTO,
  parent: 'game-root',
  backgroundColor: '#0b1626',
  width: 480,
  height: 854,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  render: {
    antialias: true,
    pixelArt: false,
    roundPixels: true
  },
  input: {
    activePointers: 2
  },
  scene: [
    BootScene,
    MenuScene,
    SettingsScene,
    ShopScene,
    AchievementsScene,
    ShooterScene,
    GoalkeeperScene,
    GameOverScene
  ]
};

window.addEventListener('load', () => {
  new Phaser.Game(config);
});
