﻿define([], function () {

    function Parallax(imageName, value) {
        this.pos = { x: 0 };

        this.speedy = value;

        this.image = new Image();
        this.image.src = "../../client/img/background/parallax/" + imageName + ".png";
    }

    Parallax.prototype.draw = function (context) {
        context.drawImage(this.image, this.pos.x, 0);
        context.drawImage(this.image, this.pos.x + this.image.width, 0);
    };

    Parallax.prototype.updates = function () {
        this.pos.x = (Math.abs(this.pos.x) >= this.image.width) ? 0 : this.pos.x - this.speedy;
    };

    return Parallax;

});