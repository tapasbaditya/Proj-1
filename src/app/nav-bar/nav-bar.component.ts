import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  // onClkHome() {
  //   var x = document.getElementsByClassName('menu') as HTMLCollection
  //   for (var i = 0; i < x.length; i++) {
  //     x[i].classList.remove('menu-highlight');
  //   }
  //   var ele1 = document.getElementById('home') as HTMLElement
  //   ele1.classList.add('menu-highlight')
  // }

  // onClkOrders() {
  //   var x = document.getElementsByClassName('menu') as HTMLCollection
  //   for (var i = 0; i < x.length; i++) {
  //     x[i].classList.remove('menu-highlight');
  //   }
  //   var ele2 = document.getElementById('orders') as HTMLElement
  //   ele2.classList.add('menu-highlight')
  // }

  // onClkProducts() {
  //   var x = document.getElementsByClassName('menu') as HTMLCollection
  //   for (var i = 0; i < x.length; i++) {
  //     x[i].classList.remove('menu-highlight');
  //   }
  //   var ele3 = document.getElementById('product') as HTMLElement
  //   ele3.classList.add('menu-highlight')
  // }


  // onClkManage() {
  //   var x = document.getElementsByClassName('menu') as HTMLCollection
  //   for (var i = 0; i < x.length; i++) {
  //     x[i].classList.remove('menu-highlight');
  //   }
  //   var ele4 = document.getElementById('manage') as HTMLElement
  //   ele4.classList.add('menu-highlight')
  // }

  // onClkAccount() {
  //   var x = document.getElementsByClassName('menu') as HTMLCollection
  //   for (var i = 0; i < x.length; i++) {
  //     x[i].classList.remove('menu-highlight');
  //   }
  //   var ele5 = document.getElementById('account') as HTMLElement
  //   ele5.classList.add('menu-highlight')
  // }

  onClkMenubar(menuid: string){
    var x = document.getElementsByClassName('menu') as HTMLCollection
    for(var i = 0; i < x.length; i++){
      x[i].classList.remove('menu-highlight');
    }
    var ele = document.getElementById(menuid) as HTMLElement
    ele.classList.add('menu-highlight')
  }

}
