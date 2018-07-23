module objects {
    export class Plane extends objects.GameObject {
        // member variables

        // constructors
        constructor() {
            super("plane");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the right boundary
            if(this.x > (config.Screen.WIDTH - this.halfWidth)) {
                this.x = config.Screen.WIDTH - this.halfWidth;
            }

            // check the left boundary
            if(this.x < this.halfWidth) {
                this.x = this.halfWidth;
            }
        }

         // public methods
         public Start():void {
            this.regX = this.halfWidth;
            this.regY = this.halfHeight;
            this.y = 275;
        }

     
        public Update():void {

            managers.Game.Stage.on('stagemousedown',function()
                 {
                        console.log("jump");
                        createjs.Tween.get(objects.Plane).to({y:100}, 1000, createjs.Ease.quadOut);
                        console.log(this);

                });
            this.x = managers.Game.Stage.mouseX;
            this._checkBounds();
        }

        public Reset():void {

        }
    }
}