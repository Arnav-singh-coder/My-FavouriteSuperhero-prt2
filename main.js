var canvas=new fabric.Canvas('myCanvas');
var block_image_width=30;
var block_image_height=30;
var player_x=10;
var player_y=10;
var player_object="";


function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);


    
    });


}

function new_img(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_player_object=Img;
        block_player_object.scaleToWidth(block_image_width);
        block_player_object.scaleToHeight(block_image_height);
        block_player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_player_object);
        

    
    });


}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypressed=e.keyCode;
    console.log (keypressed);
    if(e.shiftKey ==true && keypressed=='80'){
        console.log("p&shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;

    
 

    }
    if(e.shiftKey ==true && keypressed=='77'){
        console.log("m&shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
        
 

    }
    if(keypressed == '38'){
       up();
       console.log("up");
    }  
    if(keypressed == '40'){
        down();
        console.log("down");
     }   
     if(keypressed == '37'){
        left();
        console.log("left");
     }   
     if(keypressed == '39'){
        right();
        console.log("right");
     }   
      
     if(keypressed == '70'){
        new_img('ironman_face.png')
        console.log("F");
     }   
     if(keypressed == '66'){
        new_img('ironman_body.png')
        console.log("B");
     } 
       if(keypressed == '76'){
        new_img('ironman_legs.png')
        console.log("L");
     }   
     if(keypressed == '82'){
        new_img('ironman_right_hand.png')
        console.log("R");
     }   
     if(keypressed == '72'){
        new_img('ironman_left_hand.png')
        console.log("H");
     }   

     }  
       
    



