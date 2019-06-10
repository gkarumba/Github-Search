import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {

    // let currentTime: any  = new Date();
    // let postedNoTime: any = new Date(value.getFullYear(), value.getMonth(), value.getDate());
    // var dateDiff = Math.abs(currentTime - postedNoTime);
    // const secInADay = 86400;
    // var dateDiffInSec = dateDiff * 0.001;
    // var dateCounter = dateDiffInSec / secInADay;

    // if (dateCounter >= 1 && currentTime > value) {
    //   return Math.floor(dateCounter);
    // } else {
    //   return 0;
    // }
    let convertTime = value.replace(/(\d{4})-(\d{2})-(\d{2}).*/ig, ' $1 $2 $3').split(' ');
    let createdOn = new Date(convertTime[0], convertTime[1] - 1, convertTime[2]);
    let currentTime = new Date() ;
    let timeDiff = Math.abs(currentTime.getTime() - createdOn.getTime());
    timeDiff = timeDiff / (1000 * 1000 * 60 * 60 * 24);
    return Math.floor(timeDiff);
  }
}
