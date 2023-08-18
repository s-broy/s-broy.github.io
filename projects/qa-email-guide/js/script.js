(function(window, document){
    //track if there's an open infobox at any time
    let activeInfoBox = null
    
    document.body.addEventListener('click', ({ target }) => {
      
      //check if there is an open infobox
      if(activeInfoBox){
        //if so, check if click is outside (false) or inside (true) then open infobox
        if(!findIfIsChild(target, activeInfoBox)) {
          const lastActiveBox = activeInfoBox
          // if click is outside the opened infobox, close it
          activeInfoBox.classList.replace('content-js', 'content-switch')
          activeInfoBox = null
          // this next if is only possible if the target has overlay-js
          // and if it's the overlay corresponding to the opened infobox.
          // this way, it stops all the following behaviour so it doesn't open again
          if(target.nextElementSibling === lastActiveBox){
            return
          }
        }
      }
      
      if (
        target.nodeName.toLowerCase() !== 'div' ||
        !target.classList.contains('overlay-js')
      ) { return }
  
      const nextSibling = target.nextElementSibling
      if(nextSibling.classList.contains('content-js')){
        nextSibling.classList.replace('content-js', 'content-switch')
        return
      }
         
      nextSibling.classList.replace('content-switch', 'content-js')
      activeInfoBox = nextSibling
    });
    
    //instructions overlay
    const sticky = document.querySelector('.sticky')
    const closeX = document.getElementById('sticky-id');
    const minSticky = document.querySelector('.min-sticky')
    const maxSticky = document.querySelector('.max-sticky')
  
    closeX.onclick = function close(){
      if (sticky.classList.contains('sticky-hidden')) {
        sticky.classList.remove('sticky-hidden')
        sticky.classList.add('sticky')
        minSticky.classList.remove('max-sticky');
        minSticky.classList.add('min-sticky');
        closeX.innerHTML = "<span class=\"span-min\">&#8211;</span>";
      } else {
        sticky.classList.add('sticky-hidden');
        
        minSticky.classList.remove('min-sticky');
        minSticky.classList.add('max-sticky');
        closeX.innerHTML = "<span class=\"span-max\">+</span>";
      }
    }
   
    // same as findIfIsChild but without recursion
    /**const findIsChild = function(element, targetParent) {
      while(element !== document.body){
        if(element === targetParent){
          return true
        }
        element = element.parentNode
      }
    }**/
    
    // recursive function to find out if an element is inside (true) or not (false) the other element
    const findIfIsChild = function(element, targetParent){
      if(element === targetParent){
        return true
      }
      if(element === document.body){
        return false
      }
      return findIfIsChild(element.parentNode, targetParent)
    }
    
    })(window, document)