var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var play = (function (_super) {
        __extends(play, _super);
        function play() {
            _super.apply(this, arguments);
        }
        play.prototype.Start = function () {
            this._collision = new managers.Collision();
            this._player = new objects.Player("player");
            this.Player = this._player;
            this.addChild(this._player);
            // Add Menu Labels
            // add this scene to the global scene container
            core.stage.addChild(this);
            //place player appropriately
            this._player.placeship(200, 300);
        };
        play.prototype.Update = function () {
            // scene updates happen here...
            this._player.update();
        };
        return play;
    }(objects.Scene));
    scenes.play = play;
})(scenes || (scenes = {}));
//# sourceMappingURL=playgame.js.map