import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // userId: string = ''
  // password: string = ''
  errorMsg: string = ''
  userid: string = ''
  userIdMsg: string = ''
  passwordMsg: string = ''

  user: any = {
    userId: '',
    password: ''
  }

  isSubmit = false

  constructor(private router: Router) {

  }

  login() {
    this.isSubmit = true
    this.user.userId = this.user.userId.trim()

    // if (this.userId == '') {
    //   this.userIdMsg = 'User ID is required'
    // }
    // else {
    //   this.userIdMsg = ''
    // }

    // if (this.password == '') {
    //   this.passwordMsg = 'Password is required'
    // }
    // else {
    //   this.passwordMsg = ''
    // }

    if (this.user.password.length < 6) {
      this.passwordMsg = 'Minimum 6 letter is required'
      return
    }

    // var x = this.user.userId.indexOf("@")
    // if (x == -1) {
    //   this.userIdMsg = 'Invalid email ID'
    //   return
    // }

    // var z = this.user.userId.startsWith("@")
    // if (z) {
    //   this.userIdMsg = 'Invalid email ID'
    //   return
    // }

    // var y = this.user.userId.endsWith(".com")
    // if (y == false) {
    //   this.userIdMsg = 'Invaild email'
    //   return
    // }

    var x = this.isValidEmail(this.user.userId)
    if (x == false) {
      this.userIdMsg = 'Invalid Email'
      return
    }


    this.userIdMsg = ''
    this.passwordMsg = ''

    if (this.user.userId == 'admin@gmail.com' && this.user.password == '123456') {
      this.router.navigateByUrl('/')
    }
    else {
      this.errorMsg = 'Wrong credential'
    }

  }

  isValidEmail(email: string) {
    var x = email.indexOf("@")
    if (x == -1) {
      return false
    }

    var z = email.startsWith("@")
    if (z) {
      return false
    }

    var y = email.endsWith(".com")
    if (y == false) {
      return false
    }

    return true

  }

}
