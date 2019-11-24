$(document).ready( function() {
  
   
   //so when the page gets ready it immediately calls the function arrange board 
    arrangeboard();
    
    var scoreboard = document.getElementById("demo");
    //initializes the score to 0
    var score = 0;
    //changing the textcontent of scoreboard to score
    scoreboard.textContent = score;
    
    //box model starts
    var modal = document.getElementById('gameoverModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];


    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
        arrangeboard();
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            arrangeboard();
        }
    }
    
    //constructor function with a parameter(it will receive "score" as a parameter to display when the game is over)
    function Box(num) {
        this.num = num;
        //when ever the alertBox is called it will create the boxmodal
        this.alertBox = function()
        {
                gameoverMsg.textContent = 'Your Score: '+this.num;
                gameoverMsg.setAttribute('style', 'color: red;');
                gameoverModal.style.display = 'block';
        }
    }
    //box model completed
    
    //This is where arrangeboard function has been written
    function arrangeboard()
    { 
    //Initially it will remove the class name called "item" from a certain "tile" which has a common class name called "tile"
        $('.tile').removeClass('item');
    //Below returns an array which has classname called "tile" and it store those values in tiles
        var tiles = document.getElementsByClassName("tile");
    //Below code will tell how many tiles are there in the console
        console.log(tiles.length);
    //Declared an array called newRGB
         var newRGB = [];
    //function call is made to get 6 new RGB values its a multi-dimentional array
        //      [0][0] [0][1] [0][2] 63 tiles will be colored with these RGB values
        //      [1][0] [1][1] [1][2] and remaining 1 tile will be colored with this RGB value
         newRGB = randomcolor();  
        
        //this will assign the first row newRGB array values to the variable newRGB1 
        var newRGB1 = 'rgb(' + newRGB[0][0] + ',' + newRGB[0][1] + ',' + newRGB[0][2] + ')'; 
        //this will assign the second row newRGB array values to the variable newRGB2 
        var newRGB2 = 'rgb(' + newRGB[1][0] + ',' + newRGB[1][1] + ',' + newRGB[1][2] + ')';
        //This num(location of Odd colored tile) variable will store the random value which is generated in between the tiles 0 to 64
        var num = Math.floor(Math.random() * (64 - 0)) + 0;
        
        //change the background color of that particular tile(odd colored tile)
        tiles[num].style.background = newRGB2;
        //and add class to the odd colored tile
        tiles[num].classList.add("item");

        //now its time to change the background color remaining tiles
         for(var i=0; i<tiles.length;i++)
            {
                //if it finds the odd colored tile it will display the location of the odd colored tile in the console(cheat code)
                if(tiles[i].classList.contains("item"))
                {
                    console.log('found at: ' + i);
                }
                //this will change the background color of remaining 63 tiles
                else
                {    
                tiles[i].style.backgroundColor = newRGB1;
                }
            }
    }
    
    //this is a function which will identify on which tile the "click" has been done
     $('#wrapper').on('click', function (e) 
      {
         //First it will check for the odd colored tile with the help of class name go to line 69
         if($(e.target).hasClass("item"))
             {
                //if it finds the odd colored tile then it will increment the score by 1
                score += 1;
                //again after finding the odd colored tile it will again scramble the color and change the grid
                arrangeboard();
                //score will be updated dynamically at every step
                scoreboard.textContent = score; 
             }
         else{
                //if you click on a wrong tile, the scorebox object will call the constructor function along with score as a parameter
                var scorebox = new Box(score);
                //It will then call the method written inside the constructor function
                scorebox.alertBox();
                //to start the game from begining
                score = 0;
                scoreboard.textContent = score;
             }
         
      });
         
    
   

    //This function will generate random RGB values for 2 arrays
        function randomcolor() {
             //stores one RGB value
             var arr1 = [];
             //stores another RGB value
             var arr2 = [];
             //oddItem is the difference between arr1 RGB value and arr2 RGB value
             var oddItem;
             
            //it will set the color difference based on the score
            //the more you score, the differnce will be less so it will be difficult to identify the odd tile
             if(score <= 10)
                 {
                     oddItem = 50;
                 }
             else{
                 if(score <= 20)
                     {
                         oddItem = 40;
                     }
                 else{
                     if(score <= 30)
                         {
                             oddItem = 20
                         }
                     else{
                         if(score <= 50)
                             {
                                 oddItem = 10;
                             }
                         else{
                             if(score <= 100)
                                 {
                                     oddItem =5;
                                 }
                             else{
                                 oddItem = 50;
                             }
                         }
                     }
                 }
             }
            //the loop will run 3 times to generate 3 rgb values     
            for (var i=0; i<3; i++)
                {
                    //Below code will generate a random value in between 200 to 5 so it will not be complete black or white
                    var num = Math.floor(Math.random() * (200 - 5 + 1)) + 5;
                    //Once you get a value, it will be pushed to the array arr1(which is used as a background color for 63 tiles)
                    arr1.push(num);
                    //Based on the score it will add the "oddItem" to the "num"(which is used as a background color for 1 tile) 
                    arr2.push(num + oddItem);
                    //every time it will display the "oddItem" value in the console
                    console.log('OddItem Number :' +oddItem);
                }
            
          //returns multidimensional array
          // arr1 [0][0] [0][1] [0][2]
          // arr2 [1][0] [1][1] [1][2]
            return[
                arr1,arr2
            ];

        }

    
 });
    
    
    
    



