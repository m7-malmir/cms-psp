const navItem=document.querySelector('#nav__items');
const openNavBtn=document.querySelector('#open__nav-btn');
const closeNavBtn=document.querySelector('#close__nav-btn');


    
        // if ((screen.width<1024)) {
        //     openNavBtn.style.display ='inline-block';
        //     closeNavBtn.style.display =''; 
        // }
        // else{

 
   
            openNavBtn.addEventListener('click',()=>{
                navItem.style.display='flex';
                openNavBtn.style.display='none';
                closeNavBtn.style.display='inline-block';
                
                
            });
    
    
            closeNavBtn.addEventListener('click',()=>{
                navItem.style.display='none';
                openNavBtn.style.display='inline-block';
                closeNavBtn.style.display='none';
               
            });
        


//CLOSE NAV MENU 
//Attach listener function on state changes
