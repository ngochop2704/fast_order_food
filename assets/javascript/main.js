// const $ = document.querySelector.bind(document);
// const $$ = document.querySelectorAll.bind(document);

// **************** Scroll Window ****************\\
var header = document.querySelector('.header');

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
var barMenu = document.querySelector('.bar__menu');
var barMenuBtn = document.querySelector('.bar__menu-symbol');
var barMenuModal = document.querySelector('.bar__menu-modal');

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
var barMenuList = document.querySelector('.bar__menu-list');
var barMenuProductList = document.querySelector('.bar__menu-product-list');
var barMenuProductBtnShow = document.querySelector('.bar__menu-product');
var barMenuProductBtnHidden = document.querySelector('.bar__menu-product-left');

barMenuProductBtnShow.onclick = function() {
    barMenuList.style.transform = 'translate3d(-20%, 0, 0)';
    barMenuProductList.style.transform = 'translate3d(0, 0, 0)';
}

barMenuProductBtnHidden.onclick = function() {
    barMenuList.style.transform = 'translate3d(0, 0, 0)';
    barMenuProductList.style.transform = 'translate3d(100%, 0, 0)';
}

// **************** Register & Login on mobile & tablet ****************\\
var containerApp = document.querySelector('.container');
var authForm = document.querySelector('.auth__form');
var loginForm = document.querySelector('.login-form');
var registerForm = document.querySelector('.register-form');
var loginFormBtn = document.querySelector('.login-btn-js');
var registerFormBtn = document.querySelector('.register-btn-js');
var headerUser = document.querySelector('.header__user');
var navIconUser = document.querySelector('.user-nav-icon-js');

// // console.log([loginForm])

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

// loginFormBtn.onclick = function(e) {
//     // e.preventDefault();
//     containerApp.style.display = 'none';
//     headerUser.style.display = 'none';
//     loginForm.style.display = 'block';
//     registerForm.style.display = 'none';

//     loginFormBtn.classList.add('btn--primary');
//     registerFormBtn.classList.remove('btn--primary');


//     document.documentElement.scrollTop = 0;

// }

// registerFormBtn.onclick = function(e) {
//     // e.preventDefault();
//     containerApp.style.display = 'none';
//     headerUser.style.display = 'none';
//     loginForm.style.display = 'none';
//     registerForm.style.display = 'block';

//     loginFormBtn.classList.remove('btn--primary');
//     registerFormBtn.classList.add('btn--primary');

//     document.documentElement.scrollTop = 0;
// }

// **************** Bag product on mobile & tablet ****************\\
var headerBag = document.querySelector('.header__bag-js');
var headerBagDescript = document.querySelector('.header__bag-description');


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
var headerBags = document.querySelectorAll('.footer__sub-heading');

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

var plusIcons = document.querySelectorAll('.footer__plus-icon');

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

///////////////////////////////****************************************\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// **************** List product filter on mobile ****************\\
var productFilter = document.querySelector('.list__product-on-mobile');

if(productFilter) {
    var listClasifymobile = document.querySelector('.list__product-classify-on-mobile');
    
    productFilter.onclick = function() {
        if(listClasifymobile.style.display === '') {
            listClasifymobile.style.display = 'block';
        }
        else {
            listClasifymobile.style.display = '';
        }
    }
}

///////////////////////////////****************************************\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// **************** Transition slider banner ****************\\

const sliderMain = document.querySelector('.slider-main');

if(sliderMain) {
    const sliderItems = document.querySelectorAll('.slider-item');

    const sliderItemWidth = sliderItems[0].offsetWidth;
    const sliderLength = sliderItems.length;
    var count = 0;
    var alternate_flag = true;
    
    const handlePrevBtnClick = () => {
        count = count - 1;
    
        if(count >= 0) {
            sliderMain.style.left = `${count*(-1) * sliderItemWidth}px`;
        }else{
            count = 0;
        }
    }
    
    const handleNextBtnClick = () => {
        count = count + 1;
        if(count <= sliderLength - 1) {
            sliderMain.style.left = `${count*(-1) * sliderItemWidth}px`;
        }
        else{
            count = sliderLength - 1;
        }
    }
    
    setInterval(() => {
        if(alternate_flag) {
            handleNextBtnClick();
            if(count >= sliderLength - 1) {
                alternate_flag = false;
            }
        }
        else {
            handlePrevBtnClick();
            if(count <= 0) alternate_flag = true;
        }
    }, 5000);
}


// **************** Brand slick slider with frame work slick and jquery slider ****************\\
$(document).ready(function(){
    $('.about__us-slick-slider').slick({
        slidesToShow: 4,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
        dots: false,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: true
              },
            },
            {
              breakpoint: 739,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              },
            },
          ],
    });

    $('.hot__new-slick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
              },
            },
            {
              breakpoint: 739,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
          ],
    });

    $('.brand__slick-slider').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
        arrows: false,
        // prevArrow: `<button type='button' class='slick-prev slick-arrow'>Prev</button>`,
        // nextArrow: `<button type='button' class='slick-next slick-arrow'>Next</button>`,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
              },
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 2,
              },
            },
          ],
    });

    $('.product-suggestion__slick-slider').slick({
        slidesToShow: 4,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              },
            },
            {
              breakpoint: 739,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
            },
          ],
    });

}); 

// **************** Handle all manipulate in Product Detail page ****************\\
var productDetailsLinks = document.querySelectorAll('.product__detail-tab-link');
var productOverview = document.getElementById('product-overview');
var productDetail = document.getElementById('product-detail');
var productComment = document.getElementById('product-comment');
var tabContentPanes = document.querySelectorAll('.tab-content-pane');

productDetailsLinks.forEach((productDetailsLink) => {
    productDetailsLink.onclick = (e) => {
        e.preventDefault(); 
        // xóa các element đang active
        document.querySelector('.product__detail-tab-item--active span').innerHTML = "&#xf077;";
        document.querySelector('.product__detail-tab-item--active').classList.remove('product__detail-tab-item--active');
        document.querySelector('.tab-content-pane--active').classList.remove('tab-content-pane--active');

        // update lại trạng thái active của elment được click
        e.target.parentElement.classList.add('product__detail-tab-item--active');
        e.target.querySelector('span').innerHTML = "&#xf078;";  

        tabContentPanes.forEach((tabContentPane) => {
            if(e.target.href.includes(tabContentPane.id)) {
                tabContentPane.classList.add('tab-content-pane--active');
            }
        })
    }
})

// ///////////////
var increaseBtn = document.querySelector('.product__detail-btn-increase');
var decreaseBtn = document.querySelector('.product__detail-btn-decrease');
var quantityInput = document.querySelector('.product__detail-number');
var quantityOrder = 1;

increaseBtn.onclick = () => {
    quantityOrder++;
    quantityInput.value = quantityOrder;
}

decreaseBtn.onclick = () => {
    quantityOrder > 0 ? quantityOrder-- : quantityOrder = 0;
    quantityInput.value = quantityOrder;
}

quantityInput.onchange = () => {
    quantityOrder = quantityInput.value;
    console.log(quantityOrder)
}

// ///////////////
var classifyBtns = document.querySelectorAll('.product__detail-btn-classify');
var isClassify = false;

classifyBtns.forEach((classifyBtn) => {
    classifyBtn.onclick = (e) => {
        if(e.target.classList.contains('product__detail-btn-classify--chosen')) {
            document.querySelector('.product__detail-btn-classify--chosen').classList.remove('product__detail-btn-classify--chosen');
        }
        else {
            if(document.querySelector('.product__detail-btn-classify--chosen')) {
                document.querySelector('.product__detail-btn-classify--chosen').classList.remove('product__detail-btn-classify--chosen');
            }
            e.target.classList.add('product__detail-btn-classify--chosen');
        }
    }
})




