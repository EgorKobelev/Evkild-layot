document.querySelectorAll('.work__item').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
        const path = e.currentTarget.dataset.path;
        document.querySelectorAll('.work__item').forEach(function(btn){
            btn.classList.remove('work__item--active')
        });
        document.querySelector(`[data-path="${path}"]`).classList.add('work__item--active');
        document.querySelectorAll('.work__article').forEach(function(tabsBtn){
            tabsBtn.classList.remove('work__article--active')
        });
        document.querySelector(`[data-target="${path}"]`).classList.add('work__article--active');
    });
});