const navItem=document.querySelector('#nav__items');
const openNavBtn=document.querySelector('#open__nav-btn');
const closeNavBtn=document.querySelector('#close__nav-btn');


 
   
        openNavBtn.addEventListener('click',()=>{
            navItem.style.display='flex';
            openNavBtn.style.display='none';
            closeNavBtn.style.display='inline-block';
            if ((screen.width>1024)) {
                //openNavBtn.style.display ='';
                closeNavBtn.style.display ='';
            }
        });


        closeNavBtn.addEventListener('click',()=>{
            navItem.style.display='none';
            openNavBtn.style.display='inline-block';
            closeNavBtn.style.display='none';
            if ((screen.width>1024)) {
                openNavBtn.style.display ='';
                //closeNavBtn.style.display ='';
            }
        });
    
      


//CLOSE NAV MENU 
//Attach listener function on state changes
