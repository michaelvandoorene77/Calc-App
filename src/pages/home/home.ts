import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  firstNum: any;
  secondNum: any;
  ans: any;
  constructor(public navCtrl: NavController) {
}

  add(){
    this.ans = parseFloat(this.firstNum) + parseFloat(this.secondNum)
  }

  minus(){
    this.ans = parseFloat(this.firstNum) - parseFloat(this.secondNum)
  }
  times(){
    this.ans = parseFloat(this.firstNum) * parseFloat(this.secondNum)
  }
  divide(){
    this.ans = parseFloat(this.firstNum) / parseFloat(this.secondNum)
  }
  clear(){
    this.ans = null;
    this.firstNum = null;
    this.secondNum = null;
  }


}

