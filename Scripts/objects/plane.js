var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Plane = /** @class */ (function (_super) {
        __extends(Plane, _super);
        // member variables
        // constructors
        function Plane() {
            var _this = _super.call(this, "plane") || this;
            _this.Start();
            return _this;
        }
        // private methods
        Plane.prototype._checkBounds = function () {
            // check the right boundary
            if (this.x > (config.Screen.WIDTH - this.halfWidth)) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }
            // check the left boundary
            if (this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        };
        // public methods
        Plane.prototype.Start = function () {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 255;
            this.x = 300;
        };
        Plane.prototype.Update = function () {
            managers.Game.Stage.on('stagemousedown', function () {
                console.log("jump");
                createjs.Tween.get(this).to({ y: 150 }, 1000, createjs.Ease.quadOut).call(this.gravity);
            }, this);
            // this.x = managers.Game.Stage.mouseX;
            this._checkBounds();
        };
        Plane.prototype.gravity = function () {
            console.log("in gravity");
            createjs.Tween.get(this).to({ y: 255 }, 500, createjs.Ease.quadOut);
        };
        Plane.prototype.Reset = function () {
        };
        return Plane;
    }(objects.GameObject));
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map