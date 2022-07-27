

let currentHeading = [4, 2] 
let heading = "EAST";
let commands = ["F", "B" ,"L", "R"]
let directions = ["NORTH", "EAST", "SOUTH", "WEST"]

// obstacles array
let arr = [
  [5, 3],
  [3, 5],
  [7, 4],
]
 // Part i 

function roverMove(command) 
{
  if (directions.indexOf(command) < -1) 
  {
    return false;
  }
     // Rotate Right 
   if (command === "R") 
   {
      let dir = directions.findIndex((element) => element === heading);
      if (dir === directions.length - 1) 
      {
        dir = 0;
      } 
      else 
      {
        dir++;
      }
      heading = directions[dir];
  }
    //Rotate Left 
  else if (command === "L") 
  {
      let dir = directions.findIndex((element) => element === heading);
      if (dir === 0) 
      {
        dir = directions.length - 1;
      } 
      else 
      {
        dir--;
      }
      heading = directions[dir];
  }

  let x_axis_cordinate = currentHeading[0]
  let y_axis_cordinate = currentHeading[1]

     // Move Forward 
   if (command === "F") 
   {
      if (heading === "NORTH") 
      {
        currentHeading = [ x_axis_cordinate , y_axis_cordinate + 1 ]
      } 
      else if (heading === "SOUTH") 
      {
        currentHeading = [ x_axis_cordinate , y_axis_cordinate - 1 ]
      }
      else if (heading === "EAST") 
      {
        currentHeading = [ x_axis_cordinate + 1 , y_axis_cordinate ]
      } 
      else if (heading === "WEST") 
      {
        currentHeading = [ x_axis_cordinate - 1 , y_axis_cordinate ]
      } 
    
  } 
    // Move Backword 
  else if (command === "B") 
  {
      if (heading === "NORTH") 
      {
        currentHeading = [ x_axis_cordinate , y_axis_cordinate - 1 ]
      } 
      else if (heading === "SOUTH") 
      {
        currentHeading = [ x_axis_cordinate , y_axis_cordinate + 1 ]
      }
      else if (heading === "EAST") 
      {
        currentHeading = [ x_axis_cordinate - 1 , y_axis_cordinate ]
      } 
      else if (heading === "WEST") 
      {
        currentHeading = [ x_axis_cordinate + 1 , y_axis_cordinate ]
      } 
  
  }
  obastacles(currentHeading , arr , heading)
  console.log( `( ${currentHeading} ) ` , ` ${heading}`)
  

  
}

// Part ii
function obastacles(point, obastPoint ,d) {
  
  obastPoint.map(function(element){
    if (point[0] == element[0] && point[1] == element[1] ) 
    {
      console.log(`(${point })`, d ," STOPPED ");
    };
  });
}


roverMove("F");
roverMove("L");
roverMove("F");
roverMove("F");
roverMove("F");
roverMove("R");
roverMove("F");
roverMove("L");
roverMove("B");

