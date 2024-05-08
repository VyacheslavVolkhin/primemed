//js tabs
const tabsNav = document.querySelectorAll('.js-tabs-nav')
const tabsBlocks = document.querySelectorAll('.js-tab-block')
const tabsButtonTitle = document.querySelectorAll('.js-tab-title')
const tabsButtonContent = document.querySelectorAll('.js-tab-content')
function tabsActiveStart() {
	for (iTab = 0; iTab < tabsBlocks.length; iTab++) {
		if (tabsBlocks[iTab].classList.contains('active')) {
			tabsBlocks[iTab].classList.remove('active')
		}
	}
	for (i = 0; i < tabsNav.length; i++) {
		let tabsNavElements = tabsNav[i].querySelectorAll('[data-tab]')
		for (iElements = 0; iElements < tabsNavElements.length; iElements++) {
			if (tabsNavElements[iElements].classList.contains('active')) {
				let tabsNavElementActive = tabsNavElements[iElements].dataset.tab
				for (j = 0; j < tabsBlocks.length; j++) {
					if (tabsBlocks[j].dataset.tab.toString().indexOf(tabsNavElementActive) > -1) {
						tabsBlocks[j].classList.add('active')
					}
				}
			}
		}
	}
	
}
for (i = 0; i < tabsButtonTitle.length; i++) {
	tabsButtonTitle[i].addEventListener('click', function (e) {
		this.classList.toggle('active')
		e.preventDefault()
		e.stopPropagation()
		return false
	})
}
for (i = 0; i < tabsNav.length; i++) {
	tabsNav[i].addEventListener('click', function (e) {
		if (e.target.closest('[data-tab]')) {
			let tabsNavElements = this.querySelector('[data-tab].active')
			tabsNavElements ? tabsNavElements.classList.remove('active') : false
			e.target.closest('[data-tab]').classList.add('active')
			tabsActiveStart()
			e.preventDefault()
			e.stopPropagation()
			return false
		}
	})
}
tabsActiveStart()



//js popup wrap
const togglePopupButtons = document.querySelectorAll('.js-btn-popup-toggle')
const closePopupButtons = document.querySelectorAll('.js-btn-popup-close')
const popupElements = document.querySelectorAll('.js-popup-wrap')
const bodyElem = document.querySelector('body')
function popupElementsClear() {
	document.body.classList.remove('menu-show')
	document.body.classList.remove('filter-show')
	document.body.classList.remove('search-show')
	popupElements.forEach(element => element.classList.remove('popup-right'))
}
function popupElementsClose() {
	togglePopupButtons.forEach(element => {
		if (!element.closest('.no-close')) {
			element.classList.remove('active')
		}
	})
}
function popupElementsContentPositionClass() {
	popupElements.forEach(element => {
		let pLeft = element.offsetLeft
		let pWidth = element.querySelector('.js-popup-block').offsetWidth
		let pMax = pLeft + pWidth;
	})
}
for (i = 0; i < togglePopupButtons.length; i++) {
	togglePopupButtons[i].addEventListener('click', function (e) {
		popupElementsClear()
		if (this.classList.contains('active')) {
			this.classList.remove('active')
		} else {
			popupElementsClose()
			this.classList.add('active')
			if (this.closest('.popup-menu-wrap')) {
				document.body.classList.add('menu-show')
			}
			if (this.closest('.popup-search-wrap')) {
				document.body.classList.add('search-show')
			}
			if (this.closest('.popup-filter-wrap')) {
				document.body.classList.add('filter-show')
			}
			popupElementsContentPositionClass()
		}
		e.preventDefault()
		e.stopPropagation()
		return false
	})
}
for (i = 0; i < closePopupButtons.length; i++) {
	closePopupButtons[i].addEventListener('click', function (e) {
		popupElementsClear()
		popupElementsClose()
		e.preventDefault()
		e.stopPropagation()
		return false;
	})
}
document.onclick = function (event) {
	if (!event.target.closest('.js-popup-block')) {
		popupElementsClear()
		popupElementsClose()
	}
}
popupElements.forEach(element => {
	if (element.classList.contains('js-popup-select')) {
		let popupElementSelectItem = element.querySelectorAll('.js-popup-block li a')
		if (element.querySelector('.js-popup-block .active')) {
			element.classList.add('select-active')
			let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
			let popupElementButton = element.querySelector('.js-btn-popup-toggle')
			popupElementButton.innerHTML = ''
			popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
		} else {
			element.classList.remove('select-active')
		}
		for (i = 0; i < popupElementSelectItem.length; i++) {
			popupElementSelectItem[i].addEventListener('click', function (e) {
				this.closest('.js-popup-wrap').classList.add('select-active')
				if (this.closest('.js-popup-wrap').querySelector('.js-popup-block .active')) {
					this.closest('.js-popup-wrap').querySelector('.js-popup-block .active').classList.remove('active')
				}
				this.classList.add('active')
				let popupElementActive = element.querySelector('.js-popup-block .active').innerHTML
				let popupElementButton = element.querySelector('.js-btn-popup-toggle')
				popupElementButton.innerHTML = ''
				popupElementButton.insertAdjacentHTML('beforeend', popupElementActive)
				popupElementsClear()
				popupElementsClose()
				if (!this.closest('.js-tabs-nav')) {
					e.preventDefault()
					e.stopPropagation()
					return false
				}
			})
		}
	}
})


//slider 4 col
const swiper4 = new Swiper('.swiper.slider-4', {
	loop: false,
  
	// If we need pagination
	// pagination: {
	//   el: '.swiper-pagination',
	// },
	slidesPerView: 1,
	spaceBetween: 0,
  
	// Navigation arrows
	navigation: {
	  nextEl: '.btn-action-ico ico-arrow ico-arrow-next swiper-button-next',
	  prevEl: '.btn-action-ico ico-arrow ico-arrow-prev swiper-button-prev',
	},
	breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },

  });


//slider 3 col
const swiper3 = new Swiper('.swiper.slider-3', {
	loop: false,
  
	// If we need pagination
	// pagination: {
	//   el: '.swiper-pagination',
	// },
	slidesPerView: 1,
	spaceBetween: 0,
  
	// Navigation arrows
	navigation: {
	  nextEl: '.btn-action-ico ico-arrow ico-arrow-next swiper-button-next',
	  prevEl: '.btn-action-ico ico-arrow ico-arrow-prev swiper-button-prev',
	},
	breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
      },

  });


//slider actions
const swiperActions = new Swiper('.swiper.slider-actions', {
	loop: false,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	slidesPerView: 1,
	spaceBetween: 0,
  
	// Navigation arrows
	navigation: {
	  nextEl: '.btn-action-ico ico-arrow ico-arrow-next swiper-button-next',
	  prevEl: '.btn-action-ico ico-arrow ico-arrow-prev swiper-button-prev',
	},

  });


//slider tabs
const swiperTabs = new Swiper('.swiper.slider-tabs', {
	loop: false,
  
	slidesPerView: "auto",
	spaceBetween: 0,
  
	navigation: {
	  nextEl: '.btn-action-ico ico-arrow ico-arrow-next swiper-button-next',
	  prevEl: '.btn-action-ico ico-arrow ico-arrow-prev swiper-button-prev',
	},

  });

//slider media
const swiperMedia = new Swiper('.swiper.slider-media', {
	loop: false,
	slidesPerView: "auto",
	spaceBetween: 0,
});
//slider media thumbs
const swiperMediaPreview = new Swiper('.swiper.slider-media-thumbs', {
	loop: false,
	slidesPerView: 2,
	spaceBetween: 0,
	navigation: {
	  nextEl: '.btn-action-ico ico-arrow ico-arrow-next swiper-button-next',
	  prevEl: '.btn-action-ico ico-arrow ico-arrow-prev swiper-button-prev',
	},
	thumbs: {
		swiper: swiperMedia,
	},
	breakpoints: {
        640: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
      },
});


$(document).ready(function(){
	//item-tile-video
	$('.js-btn-video').on('click', function () {
		let videoURL = $(this).parent('.item-tile-video').attr('data-video');
		$(this).parents('.item-tile-video').addClass('active');
		$(this).parents('.item-tile-video').append('<iframe width="100%" height="100%" src="'+videoURL+'" frameborder="0" allowfullscreen></iframe>')
		return false;
	})
});