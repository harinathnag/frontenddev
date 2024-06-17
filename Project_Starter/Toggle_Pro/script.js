const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')

toggles.forEach(toggle => toggle.addEventListener('change',
 (e) => doTheTrick(e.target)))

 function doTheTrick(theClickedOne) {

   

    if(good.checked && cheap.checked && fast.checked) {
    
        if(good === theClickedOne) {
            fast.checked = false
        }
        if(cheap === theClickedOne) { 
            good.checked = false
        }
        if(fast === theClickedOne) {
            cheap.checked = false
        }
    }
 }



//   // console.log(1 + good.checked);

//   count = good.checked + cheap.checked + fast.checked;
//   console.log(count);
//   if(count == 2){
//       toggles.forEach(toggle => {
//           if(!toggle.checked){
//               toggle.disabled = true;
//           }
//       })
//   }
//   else{
//       toggles.forEach(toggle => {
//           toggle.disabled = false;
//       })
//   }