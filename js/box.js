class Box {
    constructor(game, power, color, rowNumber, columnNumber) {
        this.game = game;
        this.color = color;
        this.power = power;
        
        this.width = (this.game.canvas.width)/(this.game.levels[0].length);
        this.height = this.width;
        this.position = {};
        this.position.x = this.width * columnNumber;
        this.position.y = this.height * rowNumber;
        
        console.log(this.game.boxes);
    }
    draw() {
        if(this.power <= 0) {
            this.game.boxes = this.game.boxes.filter((elm) => elm.power > 0);
            console.log(this.game.boxes);
            return;
        }
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);

        this.game.ctx.font = `${this.width/2}px Arial`;
        this.game.ctx.textBaseline = "middle";
        this.game.ctx.fillStyle = "skyblue";
        this.game.ctx.textAlign = "center";
        this.game.ctx.fillText(this.power, this.position.x + this.width/2, this.position.y + this.height/2);
    }
    update() {
        //
    }
}