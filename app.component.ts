import { NavComponent } from './nav/nav.component';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component, LOCALE_ID } from '@angular/core';
import { Roles2Component } from './components/roles2/roles2.component';
import { FormsModule, NgModel } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [Roles2Component, NavComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2.0';

  ngOnInit(): void {






  }




text:string='component1';
buttom:string='component2';



//   testTitle: string = "角色等級計算";

//   lev: number = 1;
//   boo: number = 10;
//   cmm: number = 10;




//   bbb() {
//     this.lev++;
//     this.boo += 3;
//     this.cmm += 2;
//   }

//   eee(lev: number) {
//     this.lev
//     this.boo = 7 + this.lev * 3
//     this.cmm = 8 + this.lev * 2
//     if (this.lev < 1) {
//       alert('無')
//       this.lev = 1;
//       this.boo = 10;
//       this.cmm = 10;

//     }


//   }

//   fff() {
//     this.lev = 1;
//     this.boo = 10;
//     this.cmm = 10;

//   }

//   ggg() {
//     if (this.lev > 1) {
//       this.lev--;
//       this.boo -= 3;
//       this.cmm -= 2;
//     }
//   }


// }







//   let arrayData: Array<string> = [];

//   arrayData.push("123");
//   arrayData.push("456");
//   arrayData.push("789");
//   let x = 0;
//   for (let i = 0; i < arrayData.length; i++) {

//     if (arrayData[i] == "456") {
//       x = i;
//     }
//   }
//   arrayData.slice(x, 1);
//   console.log(arrayData);




}

