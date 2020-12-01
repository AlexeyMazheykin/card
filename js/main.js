//HEADER;

const headerBottom = document.querySelector('.header__bottom');
const headerTop = document.querySelector('.header__top');
const main = document.getElementById('main');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > headerTop.scrollHeight) {
        headerBottom.classList.add('header__fixed');
        main.style.top = headerBottom.clientHeight + 'px';
    } else {
        headerBottom.classList.remove('header__fixed');
        main.style.top = 'auto'
    }
});

//TABS

const $tabs = function (target) {
    let _elemTabs = document.querySelector(target);
    /*_elemTabs = (typeof target === 'string' ? document.querySelector(target) : target)*/
    let _eventTabsShow;
    let _showTab = function (tabsLinkTarget) {
        let tabsPaneTarget, tabsLinkActive, tabsPaneShow;
        tabsPaneTarget = document.querySelector(tabsLinkTarget.getAttribute('href'));
        tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.tabs__link_active');
        tabsPaneShow = tabsPaneTarget.parentElement.querySelector('.tabs__pane_show');
        // если следующая вкладка равна активной, то завершаем работу
        if (tabsLinkTarget === tabsLinkActive) {
            return;
        }
        // удаляем классы у текущих активных элементов
        if (tabsLinkActive !== null) {
            tabsLinkActive.classList.remove('tabs__link_active');
        }
        if (tabsPaneShow !== null) {
            tabsPaneShow.classList.remove('tabs__pane_show');
        }
        // добавляем классы к элементам (в завимости от выбранной вкладки)
        tabsLinkTarget.classList.add('tabs__link_active');
        tabsPaneTarget.classList.add('tabs__pane_show');
        document.dispatchEvent(_eventTabsShow);
    };
    let _switchTabTo = function (tabsLinkIndex) {
        let tabsLinks = _elemTabs.querySelectorAll('.tabs__link');
        if (tabsLinks.length > 0) {
            if (tabsLinkIndex > tabsLinks.length) {
                tabsLinkIndex = tabsLinks.length;
            } else if (tabsLinkIndex < 1) {
                tabsLinkIndex = 1;
            }
            _showTab(tabsLinks[tabsLinkIndex - 1]);
        }
    };

    _eventTabsShow = new CustomEvent('tab.show', {detail: _elemTabs});

    _elemTabs.addEventListener('click', function (e) {
        let tabsLinkTarget = e.target;
        // завершаем выполнение функции, если кликнули не по ссылке
        if (!tabsLinkTarget.classList.contains('tabs__link')) {
            return;
        }
        // отменяем стандартное действие
        e.preventDefault();
        _showTab(tabsLinkTarget);
    });

    return {
        showTab: function (target) {
            _showTab(target);
        },
        switchTabTo: function (index) {
            _switchTabTo(index);
        }
    }

};
$tabs('.tabs');
//SLIDER RELATED
const bestBtn = document.querySelectorAll('.best__btn ');
const bestSlider = document.querySelector('.best__slider');
const bestBtnNext = document.querySelector('.best__btn-next');
const bestBtnPrev = document.querySelector('.best__btn-prev');
let bestCount = 0;
let sliderPosition = 0;
bestBtnPrev.style.display = 'none';

bestBtn.forEach(function (element) {
    element.addEventListener('click', function () {
        bestCount += +this.dataset.count;
        sliderPosition += +this.dataset.trans
        bestSlider.style.left = `${sliderPosition}%`;
        if (sliderPosition === 0) {
            bestBtnPrev.style.display = 'none';
        } else {
            bestBtnPrev.style.display = 'block';
        }
        if (bestCount >= bestSlider.childElementCount - 1) {
            bestBtnNext.style.display = 'none';
        } else {
            bestBtnNext.style.display = 'block';
        }
    });
});