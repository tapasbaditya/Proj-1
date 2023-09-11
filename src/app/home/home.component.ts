import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onClkChange() {
    var ele = document.getElementById('change') as HTMLElement
    ele.classList.add('menu-highlight')
  }
  onClkChange2() {
    var ele = document.getElementById('change') as HTMLElement
    ele.classList.remove('menu-highlight')

  }

  addAll() {
    var x = document.getElementsByClassName('menu') as HTMLCollection
    for (var i = 0; i < x.length; i++) {
      x[i].classList.add('menu-highlight');
    }

  }

  removeAll() {
    var x = document.getElementsByClassName('menu') as HTMLCollection
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove('menu-highlight');
    }
  }

}
