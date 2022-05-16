function happyHandler() {
  var target = document.querySelector('ul');
  if (this.value === 'Home') {
    target.style.backgroundColor = 'blue';
    target.style.color = 'red';
    this.value = 'home';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'powderblue';
      i = i + 1;
    }
  } else {
    target.style.backgroundColor = 'red';
    target.style.color = 'blue';
    this.value = 'Home';

    var alist = document.querySelectorAll('a');
    var i = 0;
    while (i < alist.length) {
      alist[i].style.color = 'white';
      i = i + 1;
    }
  }
}
