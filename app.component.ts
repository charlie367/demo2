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



    //   let arraytest: Array<number> = [4, 6, 1, 2, 7, 9, 12, 15, 13];


    //   let i = arraytest[0];
    //   for (let data of arraytest) {
    //     if (data < i){
    //       i = data;
    //     }

    //   }
    //   console.log(i);

    //     let stringData: string= '你好我是Allen';
    //     let ans: string='';
    //     for(let i =stringData.length-1;i>=0;i--){
    //         ans= ans+stringData[i];

    //     }
    //       console.log(ans);

    // }

    // let stringtest: string='我是Allen，你好';
    // let ans= stringtest.slice(stringtest.indexOf('我是Allen，你好'),stringtest.indexOf('我是Allen，你好')+10)
    // console.log(ans);

    let wallet:number=5000;
    let burger:number=50;
    let frice:number=40;
    let discount:number=0.9;

    let total1=wallet-(burger*10+frice*10)*discount;
    console.log("他還剩下:"+total1+"元");


    let totaltest = burger + frice*3
    let cost = wallet-totaltest

    console.log(cost);


    
  function testData() {
    let arrayData = [
      {
        userName: 'Allen',
        payMoney: 500,
      },
      {
        userName: 'Ben',
        payMoney: 20,
      },
      {
        userName: 'Eric',
        payMoney: 120,
      }]
    let vipUsers = [];
    for (let data of arrayData) {
      if (data.payMoney >= 200){
        vipUsers.push(data.userName)
      }
        
    }
    console.log(vipUsers);
  }
  
testData()

let height:number=169;
let weight:number=63;

let total:number=Number(((weight/((height/100) ** 2.))).toFixed(2));

if(total<18.5){
      console.log(total+'可悲骨頭');}
      else if(18.5<total&&total<24){
            console.log(total+'健狀美男子');}
            else if(24<total){
                  console.log(total+'可悲胖子');

            }



//   }


  //   testTitle: string ="角色等級計算";

  //   lev :number =1;
  //   boo: number=10;
  //   cmm: number=10;




  //   bbb(){    
  //     this.lev++;
  //     this.boo+=3;
  //     this.cmm+=2;
  //   }

  //   eee(lev:number){
  //     this.lev
  //     this.boo=7+this.lev*3
  //     this.cmm=8+this.lev*2
  //     if(this.lev<1) {
  //       alert('無')
  //         this.lev=1;
  //         this.boo=10;
  //         this.cmm=10;

  //     }


  //   }

  //   fff(){
  //     this.lev = 1;
  //     this.boo = 10;
  //     this.cmm = 10;

  //   }

  //   ggg(){
  //     if(this.lev>1){
  //       this.lev--;
  //     this.boo-=3;
  //     this.cmm-=2;
  //   }
  //     }


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


  //     let wallet1: number = 200;
  // let burgerPrice: number = 50;
  // let friesPrice: number = 40;

  // let totalCost1 = burgerPrice * 1 + friesPrice * 3;
  // let cost = wallet1 - totalCost1;

  // console.log("Allen 還剩下：", cost, "元"); 

  // let wallet2: number = 5000;
  // let burgerCount: number = 10;
  // let friesCount: number = 10;
  // let discountRate: number = 0.9;

  // let totalCost2 = (burgerPrice * burgerCount + friesPrice * friesCount) * discountRate;
  // let remaining2 = wallet2 - totalCost2;

  // console.log("打九折後 Allen 還剩下：", remaining2, "元");

  // type Customer = {
  //   name: string;
  //   Paymoney: number;
  // };

  // let customers: Customer[] = [
  //   { name: "Allen", Paymoney: 500 },
  //   { name: "Ben", Paymoney: 20 },
  //   { name: "Eric", Paymoney: 120 },

  // ];


  // let vipCustomers = customers.filter(customer=>customer.Paymoney >= 200);

  // console.log("達成 VIP 資格的人：");
  // vipCustomers.forEach(customer => {
  //   console.log(customer.name);
  // });

  //   let vipUsers = [];

  // for(list data of arrayData){
  //   if(DataTransfer.payMoney>200){
  //     vipUsers.push()
  //   }
  // }


  //   let h: number = 169;

  //   let w: number = 63;



  //   let BMI: number =Number((w / ((h / 100) ** 2)).toFixed(2)) 




  //   if(BMI < 18.5) {
  //     console.log('體重過輕' + BMI)
  //   }else if(18.5 <= BMI && BMI < 24) {
  //     console.log('正常範圍' + BMI)
  //   }else if (BMI < 35){
  //     console.log('異常範圍' + BMI);
  //   }


  }
}