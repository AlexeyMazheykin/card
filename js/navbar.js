let dropDown = document.querySelectorAll('.dropdown__item-btn');
console.log(dropDown);
dropDown.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('active');
        let dropDownContent = item.nextElementSibling;
        if (dropDownContent.style.maxHeight) {
            dropDownContent.style.maxHeight = null;
        } else {
            dropDownContent.style.maxHeight = dropDownContent.scrollHeight + 'px';
        }
    });
});

