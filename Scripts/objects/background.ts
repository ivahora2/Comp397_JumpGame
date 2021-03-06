module objects {
    export class Background extends createjs.Bitmap {
        // member variables
        private _horizontalSpeed:number;

        // constructors
        constructor() {
            super(managers.Game.AssetManager.getResult("background"));

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the top boundary
            if(this.x >= 0) {
                this.Reset();
            }

        }

         // public methods
         public Start():void {
             this._horizontalSpeed = 5; // the ocean will move down 5ppf

            this.Reset();
        }

        public Update():void {
            this.x += this._horizontalSpeed;
            
            this._checkBounds();
        }

        public Reset():void {
            this.x = -350;
        }
    }
}