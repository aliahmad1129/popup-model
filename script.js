 const openbuttonElement = document.getElementById('open-btn');
    const closebuttonElement = document.getElementById('close-btn');
    const popupElement = document.getElementById('popup');

    openbuttonElement.addEventListener('click', ()=> {
      popupElement.classList.add('active');
    });

    closebuttonElement.addEventListener('click', ()=> {
      popupElement.classList.remove('active');
    });

    document.addEventListener('click', ((e)=>{
      if(popupElement.classList.contains('active') && !popupElement.contains(e.target) && e.target !== openbuttonElement) {
        popupElement.classList.remove('active');
      }
    }));