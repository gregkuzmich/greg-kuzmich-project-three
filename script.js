const myApp = {};

myApp.pitchInventory = {
   fastPitch: [
      {
         title: `fourSeamFastball`,
         movement: `littleToNone`,
         weird: `weirdNo`
      },
      {
         title: `twoSeamFastball`,
         movement: `topBottomMovement`,
         weird: `weirdNo`
      },
      {
         title: `changeUp`,
         movement: `topBottomMovement`,
         weird: `weirdNo`
      },
      {
         title: `splitter`,
         movement: `topBottomMovement`,
         weird: `weirdNo`
      },
      {
         title: `cutter`,
         movement: `sideToSideMovement`,
         weird: `weirdNo`
      },
      {
         title: `forkball`,
         movement: `topBottomMovement`,
         weird: `weirdYes`
      }
   ],

   slowPitch:[
      {
         title: `curveball`,
         movement: `topBottomMovement`,
         weird: `weirdNo`
      },
      {
         title: `slider`,
         movement: `sideToSideMovement`,
         weird: `weirdNo`
      },
      {
         title: `knuckleball`,
         movement: `topBottomMovement`,
         weird: `weirdYes`
      },
      {
         title: `palmball`,
         movement: `topBottomMovement`,
         weird: `weirdYes`
      },
      {
         title: `screwball`,
         movement: `sideToSideMovement`,
         weird: `weirdYes`
      },
      {
         title: `slurve`,
         movement: `sideToSideMovement`,
         weird: `weirdYes`
      }
   ]
}

myApp.getRandomItemFromArray = function(passedArray){
   const randomNum = Math.floor(Math.random() * passedArray.length);
   return passedArray[randomNum];
}

myApp.submitForm = function(){
   $(`form`).on(`submit`, function(e){
      e.preventDefault();
      
      const userSpeed = $(`input[name=selectSpeed]:checked`).val();
      const userMovement = $(`input[name=selectMovement]:checked`).val();
      const userWeird = $(`input[name=weirdPitch]:checked`).val();
   
      if(userSpeed, userMovement, userWeird === undefined){
      $(`.noSelection`).html(`Please choose from the options above.<a href='#'><i class="fas fa-trash"></i></a>`);

         $(`.noSelection`).on(`click`, function(){
            let closeError = $(this);
            closeError.hide();
         })
      }
      
      let pitchSpeedArray = myApp.pitchInventory[userSpeed];
      
      const filteredPitch = [];
      for(i=0; i<pitchSpeedArray.length; i++){
      
      if(userMovement === pitchSpeedArray[i].movement && userWeird === pitchSpeedArray[i].weird){
         filteredPitch.push(pitchSpeedArray[i].title);
         }
      }
      
      const userSelection = myApp.getRandomItemFromArray(filteredPitch);
      
      $(`#${userSelection}`).css(`display`, `block`); 
      
      if(userSelection === undefined){
         $(`.error`).html(`Your selections did not produce a pitch. Please try a different combination of selections.<a href='#'><i class="fas fa-trash"></i></a>`);

            $(`.error`).on(`click`, function(){
               let closeError = $(this);
               closeError.hide();
            })
         }
      });

         const closeDivFunction = $(`.closeDiv`).on(`click`,  function() {
            let closeDivItem = $(this).parent().parent()
            closeDivItem.hide();
         });

         $(`#reset`).on(`click`, function(){
            $(`form`).trigger(`reset`);
            window.location.reload();
         });
}

$(function(){
   console.log(`ready`);
   myApp.submitForm();
});





