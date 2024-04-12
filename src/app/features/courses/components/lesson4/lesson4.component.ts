import { Component } from '@angular/core';

interface Pipes {
  pipesName: string
  describe: string
  link: string
}
const builtInPipes: Pipes[] = [
  { pipesName: 'DatePipe', describe: '根據區域規則格式化日期值。', link: 'https://angular.io/api/common/DatePipe' },
  { pipesName: 'UpperCasePipe', describe: '將文本轉換為全部大寫。', link: 'https://angular.io/api/common/UpperCasePipe' },
  { pipesName: 'LowerCasePipe', describe: '將文本轉換為全部小寫。', link: 'https://angular.io/api/common/LowerCasePipe' },
  { pipesName: 'CurrencyPipe', describe: '將數字轉換為貨幣字符串，按照區域規則進行格式化。', link: 'https://angular.io/api/common/CurrencyPipe' },
  { pipesName: 'DecimalPipe', describe: '將數字轉換為帶有小數點的字符串，按照區域規則進行格式化。', link: 'https://angular.io/api/common/DecimalPipe' },
  { pipesName: 'PercentPipe', describe: '將數字轉換為百分比字符串，按照區域規則進行格式化。', link: 'https://angular.io/api/common/PercentPipe' },
  { pipesName: 'AsyncPipe', describe: '訂閱和取消訂閱異步來源，例如 Observable。', link: 'https://angular.io/api/common/AsyncPipe' },
  { pipesName: 'JsonPipe', describe: '將組件物件屬性顯示為 JSON 以進行調試。', link: 'https://angular.io/api/common/JsonPipe' },
]

@Component({
  selector: 'app-lesson4',
  templateUrl: './lesson4.component.html',
  styleUrls: ['./lesson4.component.scss']
})
export class Lesson4Component {
  dataSource = builtInPipes;
}
