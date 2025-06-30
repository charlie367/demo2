import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular2.0';
  ngOnInit(): void {





    // // 練習一
    //   for (let i = 1; i < 51; i++) {
    //     console.log(i);


    //   }
    // 練習二

  //   for (let i = 1; i <= 50; i++)
  //     if (i % 2 != 0) {
  //       console.log(i);

  //     }
  // }

  //     // 練習三
  // for (let i = 1; i <= 51; i++) {
  //   if (i % 3 == 2) {
  //     console.log(i);
  //   }
  // }
  //     // 練習四
  // let data = [
  //   { name: '小明', age: 10 },
  //   { name: '小陳', age: 24 },
  //   { name: '小王', age: 16 }
  // ];

  // data.forEach((itrm, index, array) => {
  //   if (data[index].name == '小王') {
  //     data[index].age = 18;
  //   }
  // }
  // )
  // console.log(data);


  //     // 練習五
  // let arrayData: Array<number> = [4, 6, 1, 2, 7, 9, 12, 15, 13];
  // let i = arrayData[0];
  // for(let data of arrayData){

  //   if(data <i){
  //     i = data;
  //   }
  // }
  // console.log(i);


  //     // 練習六
  //   let stringData: string ='你好我是Allen';
  // let ans : string = '';
  // for(let i = stringData.length -1 ; i >= 0; i--){
  //   ans = ans + stringData[i];
  // }
  // console.log(ans);
  


  //   
  // //   // 練習七
        let stringData:string ='我是Allen,你好' ;
        
        let ans = stringData.slice(stringData.indexOf('我是Allen,你好'),stringData.indexOf('我是Allen,你好')+10);
        console.log(ans);



}


}



