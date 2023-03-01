let body = document.querySelector('body');

let programItem = document.querySelectorAll('.program-item');
let programMenu = document.querySelectorAll('.program-menu-item');
let menu = document.querySelector('.program-menu');
let active = document.querySelector('.program-menu-item_active');

let sizeMenu = menu.clientWidth;

/*Начальное положение карусели */
let sizeActive = active.clientWidth;
let current = active.dataset.item;
let size = 30;
getShift(current);

function getShift(cur) {
  for (let i = 0; i < cur; i++) {
    programMenu[i].style.left = size * i + 'px';
  }

  for (let i = cur; i < programItem.length; i++) {
    programMenu[i].style.left = sizeActive + size * (i - 1) + 'px';

  }
  programMenu[cur].style.left = size * cur + 'px';
}


for (let el of programMenu) {
  el.addEventListener('click', function () {

    /*Офер, соответствующий активному пп меню*/
    for (let item of programItem) {
      item.classList.remove('program-item_active');
    }
    let num = this.dataset.item;
    programItem[num].classList.add('program-item_active');

    /*Выделен выбранный пп меню*/
    for (let item of programMenu) {
      item.classList.remove('program-menu-item_active');
    }
    programMenu[num].classList.add('program-menu-item_active');
    console.log(num);
    /* */
    let leftList = +getComputedStyle(menu).marginLeft.slice(0, -2);
    getShift(num);


  });

}
/*Проверка правильости ввода номера телефона*/

let reTel = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
let myPhone = document.querySelectorAll('.input-tel');

for (let elem of myPhone) {
  elem.addEventListener('input', function () {
    elem.classList.remove('invalid');
    elem.classList.remove('valid');
    if (reTel.test(elem.value)) {
      elem.classList.add('valid');
    } else
      elem.classList.add('invalid');
  });
}


/*Проверка правильости ввода имени*/
let reName = /^[а-яА-ЯёЁa-zA-Z]\d$/;
let myName = document.querySelectorAll('.input-name');
for (let elem of myName) {
  elem.addEventListener('input', function () {
    elem.classList.remove('invalid');
    elem.classList.remove('valid');
    if (reName.test(elem.value)) {
      elem.classList.add('valid');
    } else
      elem.classList.add('invalid');
  });
}

/*stay-tab*/
let stayTab = document.querySelectorAll('.stay-tab-item');
let stayText = document.querySelectorAll('.stay-image-block');
let stayImage = document.querySelector('.stay-images');

let stepleft = +getComputedStyle(stayImage).width.slice(0, -2) / (stayTab.length - 1);

for (let elem of stayTab) {
  elem.addEventListener('click', function () {
    for (let el of stayTab) {
      el.classList.remove('stay-tab-item__activ');
    }
    stayImage.style.left = -elem.dataset.tab * stepleft + 'px';
    elem.classList.add('stay-tab-item__activ');
  });
}

/*Аккордион в разделе  вопросы-ответы*/
let tabs = document.querySelectorAll('.questions-item');
let parentTab = document.querySelector('.questions-list');

for (let tab of tabs) {
  tab.addEventListener('click', function () {
    if (this.classList.contains('active')) {
      this.classList.remove('active');
    } else {
      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove('active');
      }
      this.classList.toggle('active');
    }
  });
}

/*Слайдер в разделе отзывов*/
let revItems = document.querySelectorAll('.reviews-item');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let number = document.querySelector('.reviews-number');
let numberAll = document.querySelector('.reviews-all');

numberAll.innerHTML = revItems.length;
let curent = 0;
number.innerHTML = +curent + 1;

revItems[curent].classList.add('active');
next.addEventListener('click', function () {
  revItems[curent].classList.remove('active');
  curent = curent + 1;
  if (curent >= revItems.length) {
    curent = 0;
  }
  revItems[curent].classList.add('active');
  number.innerHTML = +curent + 1;
});


prev.addEventListener('click', function () {
  revItems[curent].classList.remove('active');
  curent = curent - 1;
  if (curent < 0) {
    curent = revItems.length - 1;
  }
  revItems[curent].classList.add('active');
  number.innerHTML = +curent + 1;

});

/*Заказ звонка и подтверждение*/

//заказ звонка
let mbtns = document.querySelectorAll('.mbtn');
let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.modal-btn');
let close = document.querySelector('.modal-close');
let checkInput = document.querySelector('.check-input');
let check = document.querySelector('.check');
let checkbox = document.querySelector('.checkbox');

//звонок направлен
let modal2 = document.querySelector('.clearly-modal');
let close2 = document.querySelector('.clearly-close');
let clearlyBtn = document.querySelector('.clearly-btn');

for (let btn of mbtns) {
  btn.addEventListener('click', () => {
    body.classList.add('scroll');
    modal.showModal();
  });


  //закрытие формы при нажатии на крестик
  close.addEventListener('click', () => {
    body.classList.remove('scroll');
    modal.close();
  });

  close2.addEventListener('click', () => {
    body.classList.remove('scroll');
    modal2.close();
  });

  //закрытие формы при нажатии вне формы
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      body.classList.remove('scroll');
      modal.close();
    }
  });

  modal2.addEventListener('click', (e) => {
    if (e.target === modal2) {
      body.classList.remove('scroll');
      modal2.close();
    }
  });

  //переход на форму с уведомлением о принятии заявки
  modalBtn.addEventListener('click', () => {
    if (checkInput.checked) {
      modal.close();
      body.classList.add('scroll');
      modal2.showModal();
    } else
    check.classList.add('red');
  });
 checkbox.addEventListener('click', () => {
    check.classList.remove('red');
  });

  //закрыть форму с уведомлением о принятии заявки
  clearlyBtn.addEventListener('click', () => {
    body.classList.remove('scroll');
    modal2.close();
  });
}