module objects {
    export class Island extends objects.GameObject {
        // member variables
        private _verticalSpeed:number;

        // constructors
        constructor() {
            super("island");

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
             this._verticalSpeed = 5; // the island will move down 5ppf

            this.Reset();
        }

        public Update():void {
            this.y += this._verticalSpeed;
            
            this._checkBounds();
        }

        public Reset():void {
            this.x = Math.floor(Math.random() * (config.Screen.WIDTH - this.width)) + this.halfWidth;
            this.y = -this.height;
        }
    }
}