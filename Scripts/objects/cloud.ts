module objects {
    export class Cloud extends objects.GameObject {
        // member variables
        private _verticalSpeed:number;
        private _horizontalSpeed:number;

        // constructors
        constructor() {
            super("platform");

            this.Start();
        }

        // private methods
        private _checkBounds():void {
            // check the bottom boundary
            if(this.y >= (config.Screen.HEIGHT + this.height)) {
                this.Reset();
            }

        }

         // public methods
         public Start():void {
            

            this.Reset();
        }

        public Update():void {
            var nextXX = this.x + 4;
            if (this.x > config.Screen.WIDTH - this.width) {
                nextXX = -20;
        
            }
            else if (nextXX < this.width) {
                nextXX = this.width;
            }
        
            this.x = nextXX;
          //  this.x += this._horizontalSpeed;
            //this.y += this._verticalSpeed;
            this.y=290;
            this._checkBounds();
        }

        public Reset():void {
            this._verticalSpeed =1;
            this._horizontalSpeed = Math.floor(Math.random() * 4) - 2;
            this.x = Math.floor(Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth;
            this.y = 290;
        }
    }
}