import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  // arrayText: number = 1
  msg: string = ''
  inpValue: string = ''

  arr: string[] = ['dasd', 'rter', '534f']



  ngOnInit(): void {
    this.sortArrayOfObject()
    // this.onSort()
    // 342-456-5
    // id 5, parent id 342-456 

    // 342-456-4234-56-77
    // id 77, parent id 342-456-4234-56 '

    // var inp = prompt('Enter', '') as string
    // this.numberCount(inp)
    // this.chkString(inp)
    // this.chkArray(inp)
    // if (inp.length != 0) {
    //   this.arr = inp.split(",")
    // }
    // this.inpValue = inp

    // this.substringTest(inp)
    // this.checkNumber(inp)
    // this.getName(inp)
    // var len = this.chkLength()
    // this.msg = String(len)

  }

  checkNumber(str: string) {
    var x = parseInt(str)
    if (isNaN(x)) {
      return false
    }
    else {
      return true
    }
  }

  substringTest(str: string) {
    var id = ''
    var parentId = ''
    var i = str.lastIndexOf("-")
    if (i == -1) {
      alert('give proper value')
    }
    else {
      id = str.substring(i + 1)
      parentId = str.substring(0, i)
      console.log(str)
      console.log(id)
      console.log(parentId)
    }
  }

  getName() {
    var str = this.inpValue
    var fn = ''
    var ln = ''
    var i = str.lastIndexOf(" ")
    var j = str.indexOf(" ")

    ln = str.substring(i + 1)
    fn = str.substring(0, j)

    this.msg = fn + ' ' + ln

    // console.log(str)
    // console.log(ln)
    // console.log(fn)

  }



  chkLength(): number {

    var txt = this.inpValue.split(",")
    return txt.length


  }
  onClick(value: string) {
    alert(value)
  }


  chkArray(str: string) {
    // var arr = str.split("")
    var c = 0
    for (var i = 0; i < str.length; i++) {
      console.log(i)
      if (this.checkNumber(str.charAt(i))) {
        c = c + 1
        console.log('number is exist')
      }
    }
    alert("total number = " + c)
  }

  numberCount(str: string) {
    var count = 0
    for (var i = 0; i < str.length; i++) {
      var charCode = str.charCodeAt(i)
      if (charCode >= 48 && charCode <= 57) {
        count = count + 1
      }
    }
    alert("total number = " + count)
  }



  chkString(str: string) {
    var strReverse = ""
    for (var i = str.length - 1; i >= 0; i--) {
      strReverse += str[i]
    }
    console.log(strReverse)
    this.msg = strReverse

  }

  chkNumber(str: string) {
    var strNumber = str.split("")
    for (var i = 0; i < str.length; i++) {
      this.checkNumber
      console.log(str[i])
    }
  }


  onClicker() {
    var number = ''
    for (var i = 0; i <= number.length; i++) {
      number = number + 1
      console.log(number)
    }
  }

  // add() {
  //   this.value = this.value + 1
  // }

  // sub() {
  //   this.value = this.value - 1
  // }

  onSort() {
    // var arrayText = [true, false, false, true]
    // var arrayText = ["orange", "tapas", "santosh", "raja", "kumar"]
    var arrayText = [56, 66, 23, 8, 35]
    console.log(arrayText)
    arrayText = arrayText.sort(function (a, b) { return a - b })
    console.log(arrayText.sort(function (a, b) { return a - b }))
    // console.log(arrayText.reverse())
    // console.log(arrayText.shift())
    // console.log(arrayText.unshift('khjh'))



  }

  sortArrayOfObject() {
    var arrObj = [
      {
        name: "Tapas",
        id: "101",
        salary: "45453"
      },
      {
        name: "raja",
        id: "107",
        salary: "200"
      },
      {
        name: "santosh",
        id: "103",
        salary: "656533"
      },
      {
        name: "ramesh",
        id: "122",
        salary: "545454"
      },
      {
        name: "swadin",
        id: "105",
        salary: "565633"
      }
    ]

    console.log(arrObj)

    arrObj = arrObj.sort((p1, p2) => (p1.name < p2.name) ? 1 : (p1.name > p2.name) ? -1 : 0)
    console.log(arrObj)

    // console.log(obj.sort(function (a, b) { return a - b }))
  }

  // objArray() {
  //   var objData = [

  //   ]
  // }

  skills = ['angular', '.Net', 'Java', 'Python']

  designations = ['Sr Software Engineer', 'Jr Software Engineer']

  employee = {
    name: "",
    designation: "",
    skill: [],
    salary: 0,
    gender: ''
  }

  arrEmployee: any[] = [
    // {
    //   name: "Tapas",
    //   designation: "101",
    //   salary: "45453"
    // },
    // {
    //   name: "raja",
    //   designation: "107",
    //   salary: "200"
    // },
    // {
    //   name: "santosh",
    //   designation: "103",
    //   salary: "656533"
    // },
    // {
    //   name: "ramesh",
    //   designation: "122",
    //   salary: "545454"
    // },
    // {
    //   name: "swadin",
    //   designation: "105",
    //   salary: "565633"
    // }
  ]

  isAdd = false

  addEmp() {

    this.isAdd = true

    if (this.employee.name == '') {
      return
    }

    if (this.employee.gender == '') {
      return
    }

    if (this.employee.designation == '') {
      return
    }
    if (this.employee.designation == '') {
      return
    }

    if (this.employee.salary <= 0) {
      return
    }


    var emp = {
      name: this.employee.name,
      designation: this.employee.designation,
      skill: this.employee.skill,
      salary: this.employee.salary,
      gender: this.employee.gender
    }
    // var emp = JSON.parse(JSON.stringify(this.employee))
    this.arrEmployee.push(emp)
  }

  deleteEmp() {
    this.arrEmployee.pop()
  }

  editEmp(emp: any) {
    this.employee = emp
  }

  restEmp() {
    this.employee.name = ''
    this.employee.designation = ''
    this.employee.gender = ''
    this.employee.salary = 0
  }

  addSkills(e: any, skill: string, i: number) {
    if (e.target.checked) {
      //@ts-ignore
      this.employee.skill[i] = skill
    }
    else {
      //@ts-ignore
      this.employee.skill[i] = null
    }
    // var skills = this.employee.skill
    // if (skills.includes(skill)) {

    // }
    // this.employee.skill = 
  }

}




