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

  onClkHome() {
    var ele = document.getElementById('home') as HTMLElement
    ele.classList.add('menu-highlight')
  }

  onClkProducts() {
    var ele = document.getElementById('product') as HTMLElement
    ele.classList.add('menu-highlight')

  }

  onClkOrders() {
    var ele = document.getElementById('orders') as HTMLElement
    ele.classList.add('menu-highlight')
  }

  onClkManage() {
    var ele = document.getElementById('manage') as HTMLElement
    ele.classList.add('menu-highlight')

  }

  onClkAccount() {
    var ele = document.getElementById('account') as HTMLElement
    ele.classList.add('menu-highlight')

  }

}
