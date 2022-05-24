const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

// **************** Scroll Window ****************\\
var header = $('.header');

window.onscroll = function() {
    if(document.documentElement.scrollTop > 120) {
        header.classList.add('header-js');
    }
    else if(document.documentElement.scrollTop == 0) {
        header.classList.remove('header-js');
    }
}

// **************** BarMenu on mobile & tablet ****************\\
// //show and close bar menu
var barMenu = $('.bar__menu');
var barMenuBtn = $('.bar__menu-symbol');
var barMenuModal = $('.bar__menu-modal');
// console.log([barMenuBtn])

barMenuBtn.onclick = function() {
    barMenu.style.transform = 'translate3d(0, 0, 0)';
    barMenuModal.style.display = 'block'; //show modal layer
    // barMenuList.style.transform = 'translate3d(0, 0, 0)';
}

barMenuModal.onclick = function(e) {
    barMenu.style.transform = 'translate3d(-100%, 0, 0)'; 
    barMenuList.style.transform = 'translate3d(0, 0, 0)';
    barMenuProductList.style.transform = 'translate3d(100%, 0, 0)';
    barMenuModal.style.display = 'none'; //close modal layer

}

//show and hidden product list
var barMenuList = $('.bar__menu-list');
var barMenuProductList = $('.bar__menu-product-list');
var barMenuProductBtnShow = $('.bar__menu-product');
var barMenuProductBtnHidden = $('.bar__menu-product-left');
// console.log(barMenuProductBtn)
barMenuProductBtnShow.onclick = function() {
    barMenuList.style.transform = 'translate3d(-20%, 0, 0)';
    barMenuProductList.style.transform = 'translate3d(0, 0, 0)';
}

barMenuProductBtnHidden.onclick = function() {
    barMenuList.style.transform = 'translate3d(0, 0, 0)';
    barMenuProductList.style.transform = 'translate3d(100%, 0, 0)';
}

// **************** Register & Login on mobile & tablet ****************\\
var containerApp = $('.container');
var authForm = $('.auth__form');
var loginForm = $('.login-form');
var registerForm = $('.register-form');
var loginFormBtn = $('.login-btn-js');
var registerFormBtn = $('.register-btn-js');
var headerUser = $('.header__user');
var navIconUser = $('.user-nav-icon-js');

// console.log([loginForm])

navIconUser.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    headerUser.style.display = 'block';

    headerBagDescript.style.display = 'none';   //close BagDescript because it stopPropagation

    // listener event on window to close headerUser
    function closeHeaderUser() {
        headerUser.style.display = 'none';
    }
    window.addEventListener('click', closeHeaderUser);
}

loginFormBtn.onclick = function(e) {
    e.preventDefault();
    containerApp.style.display = 'none';
    headerUser.style.display = 'none';
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';

    loginFormBtn.classList.add('btn--primary');
    registerFormBtn.classList.remove('btn--primary');


    document.documentElement.scrollTop = 0;

}

registerFormBtn.onclick = function(e) {
    e.preventDefault();
    containerApp.style.display = 'none';
    headerUser.style.display = 'none';
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';

    loginFormBtn.classList.remove('btn--primary');
    registerFormBtn.classList.add('btn--primary');

    document.documentElement.scrollTop = 0;
}

// **************** Bag product on mobile & tablet ****************\\
var headerBag = $('.header__bag-js');
var headerBagDescript = $('.header__bag-description');


headerBag.onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    headerBagDescript.style.display = 'block';

    headerUser.style.display = 'none';  //close headerUser because it stopPropagation

    // listener event on window to close BagDescript
    function closeBagDescript() {
        headerBagDescript.style.display = 'none';
    }
    window.addEventListener('click', closeBagDescript);
}

// **************** Footer nav plus on mobile & tablet ****************\\
var headerBags = $$('.footer__sub-heading');

headerBags.forEach((headerBag) => {
    headerBag.onclick = function(e) {
        if(e.target.nextElementSibling.style.display === '') {
            e.target.nextElementSibling.style.display = 'block';
        }
        else if(e.target.nextElementSibling.style.display === 'block') {
            e.target.nextElementSibling.style.display = '';
        } 
    }
});

var plusIcons = $$('.footer__plus-icon');

plusIcons.forEach(plusIcon => {
    plusIcon.onclick = function(e) {
        navItemPlus = e.target.parentElement;
        navItemPlus.onclick = function() {
            if(navItemPlus.nextElementSibling.style.display === '') {
                navItemPlus.nextElementSibling.style.display = 'block';
            }
            else if(navItemPlus.nextElementSibling.style.display === 'block') {
                navItemPlus.nextElementSibling.style.display = '';
            }            
        }
    }
})

// **************** List product filter on mobile ****************\\
var productFilter = $('.list__product-on-mobile');
var listClasifymobile = $('.list__product-classify-on-mobile');

productFilter.onclick = function() {
    if(listClasifymobile.style.display === '') {
        listClasifymobile.style.display = 'block';
    }
    else {
        listClasifymobile.style.display = '';
    }
}