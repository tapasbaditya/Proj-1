import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  name: string = 'Ram'
  // myclass: string = 'inp'
  // ok: string = 'kumar'

  // names: string[] = ['Ram', 'Shyam', 'Mohan']

  constructor(private http: HttpClient) {

  }


  // arrUser = [
  //   {
  //     name: "Ram",
  //     age: 24,
  //     gender: 'Male',
  //     address: {
  //       pincode: 761010,
  //       state: 'Odisha',
  //       area: 'Chikiti'
  //     },
  //     bikes: [
  //       {
  //         name: 'Unicorn',
  //         cc: 162.2,
  //         brand: 'Honda'
  //       }
  //     ]
  //   },
  //   {
  //     name: "Shyam",
  //     age: 24,
  //     gender: 'Male',
  //     address: {
  //       pincode: 761010,
  //       state: 'Odisha',
  //       area: 'Chikiti'
  //     },
  //     bikes: [
  //       {
  //         name: 'RE Himalayan',
  //         cc: 167.2,
  //         brand: 'Honda'
  //       },
  //       {
  //         name: 'Yezdi Roadster',
  //         cc: 349.3,
  //         brand: 'Yezdi/Jawa'
  //       }
  //     ]
  //   }
  // ]

  arrUserInfo: any
  arrAddress: any

  ngOnInit(): void {
    // this.http.get("http://jsonplaceholder.typicode.com/users").subscribe((res) => {
    //   this.arrUserInfo = res
    //   console.log(this.arrUserInfo)
    // })
  }

  // arrPincodes = [761010, 500060, 500085, 500054]
  pincode: any

  msg: string = ''  

  getAddressByPincode() {
    
    this.pincode = String(this.pincode)

    if (this.pincode.length == 6) {
      this.http.get("https://api.postalpincode.in/pincode/" + this.pincode).subscribe((res: any) => {
        this.arrAddress = res[0].PostOffice
        this.msg = res[0].Message
        console.log(this.arrAddress)
        console.log(res)
      })
    }
    else {
      alert('Please enter 6 digit')
    }

  }

  str: string = ''

  getValue() {
    this.str = this.str.trim()
  }

} 
