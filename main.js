var canvas = new fabric.Canvas('myCanvas');

blockImage_width = 30;
blockImage_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

var blockImage_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    })
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        blockImage_object = Img;
        blockImage_object.scaleToWidth(blockImage_width);
        blockImage_object.scaleToHeight(blockImage_height);
        blockImage_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(blockImage_object);
    })
}

window.addEventListener("keydown", my_keydown);
function  my_keydown(e) {
    keyPressed  =e.keyCode;
    if (e.shiftKey == true && keyPressed == '80') {
        blockImage_height = blockImage_height + 10;
        blockImage_width = blockImage_width + 10;
        document.getElementById("current_width").innerHTML = blockImage_width;
        document.getElementById("current_height").innerHTML = blockImage_height;
        console.log("Shift + p is pressed.");
    }

    if (e.shiftKey == true && keyPressed == '77') {
        blockImage_height = blockImage_height - 10;
        blockImage_width = blockImage_width - 10;
        document.getElementById("current_width").innerHTML = blockImage_width;
        document.getElementById("current_height").innerHTML = blockImage_height;
        console.log("Shift + m is pressed.");
    }

    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if(keyPressed == '87') {
        new_image("wall.jpg");
        console.log("w");
    }

    if(keyPressed == '71') {
        new_image("ground.png");
        console.log("g");
    }

    if(keyPressed == '76') {
        new_image("light_green.png");
        console.log("l");
    }

    if(keyPressed == '84') {
        new_image("trunk.jpg");
        console.log("t");
    }

    if(keyPressed == '82') {
        new_image("roof.jpg");
        console.log("r");
    }

    if(keyPressed == '89') {
        new_image("yellow_wall.png");
        console.log("y");
    }

    if(keyPressed == '68') {
        new_image("dark_green.png");
        console.log("d");
    }

    if(keyPressed == '85') {
        new_image("unique.png");
        console.log("u");
    }

    if(keyPressed == '67') {
        new_image("cloud.jpg");
        console.log("c");
    }
}

function up() {
    if(player_y>=0) {
        player_y = player_y - blockImage_height;
        console.log("Block Height = " + blockImage_height);
        console.log("X = " + player_x + "Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if(player_y<=500) {
        player_y = player_y + blockImage_height;
        console.log("Block Height = " + blockImage_height);
        console.log("X = " + player_x + "Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if(player_x>=0) {
        player_x = player_x - blockImage_width;
        console.log("Block Width = " + blockImage_width);
        console.log("X = " + player_x + "Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if(player_x<=850) {
        player_x = player_x + blockImage_width;
        console.log("Block Width = " + blockImage_width);
        console.log("X = " + player_x + "Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}