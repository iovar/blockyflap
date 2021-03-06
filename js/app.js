//App is a singleton
var App = (function() {
  var _app = function() {
    this.config = new Config();
    this.screen = new Screen(this.config);
    this.game = new Game(this.screen, this.config);
    this._setupEventListeners();
    this.screen.clear();
    audio.play('die');
  };

  _app.prototype._setupEventListeners = function() {
    var self = this,
        resizeTimer = -1;
    addEventListener('keydown', function(e) {
      if(e.which === 32 || e.keycode === 32) {
        self._handleEvent();
      }
    });
    addEventListener('touchstart', function(e) {
      self._handleEvent();
    });
  };

  _app.prototype._handleEvent = function() {
    if(this.game.state === 0) {
      this.game.start();
      audio.play('move');
    }
    else if(this.game.state === 1){
      this.game.jump();
      audio.play('move');
    }
  };

  return new _app();
})({});
