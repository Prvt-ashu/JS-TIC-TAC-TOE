let boxes = document.querySelectorAll(".box")
let resetbtn = document.querySelector("#reset-btn")

let turnO = true //playerX ,playerO

//USING 2D  Array For Storing Winning Patters.

const Winnpatterns = [
    [0,1,2] , [3,4,5] , [6,7,8] , [0,3, 6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]
]

// Adding Event listener for clicking boxes

boxes.forEach((box) => {
    box.addEventListener("click" , ()=> {
        console.log("box was clicked");
       if (turnO === true ){
        box.innerText = "O"
        turnO = false
       }
       else {
        box.innerText = "X"
        turnO = true
       }

       box.disabled = true

       checkWinn();
    });
});

const checkWinn = () => {
    for(let pattern of Winnpatterns){
      let posval1 = boxes[pattern[0]].innerText;
      let posval2 = boxes[pattern[1]].innerText;
      let posval3 = boxes[pattern[2]].innerText;
    
    if(posval1 != "" &&  posval2 != ""  && posval3 != ""){
       if (posval1 === posval2 && posval2 === posval3){
        console.log("winner");
       }
        
    }
  }
};