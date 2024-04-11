import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export interface PeriodicElement {
  hook_method: string;
  purpose: string;
  timing: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    hook_method: '<code>ngOnChanges()</code>',
    purpose: `在Angular設定或重置數據綁定的輸入屬性時作出響應。
  該方法接收一個 <a href="https://angular.io/api/core/SimpleChanges" target="_blank">SimpleChanges<a/> 對象，其中包含當前和先前的屬性值。<br>
  <div class="alert alert-primary" role="alert">
  <i class="fa-solid fa-triangle-exclamation"></i> 注意：
  <div>這種情況經常發生，因此您在這裡執行的任何操作都會顯著影響性能。
  </div>
</div>`,
    timing: '<code>在ngOnInit()</code>之前被調用（如果組件具有綁定的輸入），以及一個或多個數據綁定的輸入屬性發生更改時。<br><div class="alert alert-primary" role="alert"><i class="fa-solid fa-triangle-exclamation"></i> 注意：<div>如果您的組件沒有輸入，或者您在不提供任何輸入的情況下使用它，則框架不會調用ngOnChanges()。</div></div>'
  },
  {
    hook_method: '<code>ngOnInit()<code/>',
    purpose: `
  初始化指令或顯示組件後，Angular 首先資料綁定屬性並設定指令或組件的輸入屬性。`,
    timing: `第一次 ngOnChanges() 之後調用一次。即使沒有呼叫 ngOnChanges()（當沒有模板綁定的輸入時就是這種情況），也仍然會呼叫ngOnInit()。`
  },
  {
    hook_method: '<code>ngDoCheck()<code/>',
    purpose: `
  在 Angular 無法或不會自行檢測到的變化時進行檢測並採取行動。`,
    timing: `在每次變更偵測運行時立即呼叫 ngOnChanges()，並在第一次執行時立即呼叫 ngOnInit() 後呼叫。`
  },
  {
    hook_method: '<code>ngAfterContentInit()<code/>',
    purpose: '在 Angular 把外部內容投影到元件的視圖中，或是投影到指令所在的視圖後做出回應。',
    timing: `在第一次 ngDoCheck() 後呼叫一次。`
  },
  {
    hook_method: '<code>ngAfterContentChecked()<code/>',
    purpose: '在 Angular 檢查投影到指令或元件中的內容後做出回應。',
    timing: `在 ngAfterContentInit() 之後和每次 ngDoCheck() 之後呼叫。`
  },
  {
    hook_method: '<code>ngAfterViewInit()<code/>',
    purpose: '在 Angular 初始化元件的視圖和子視圖，或包含指令的視圖後做出回應。',
    timing: `在第一次 ngAfterContentChecked() 後呼叫一次。`
  },
  {
    hook_method: '<code>ngAfterViewChecked()<code/>',
    purpose: '在 Angular 檢查元件的視圖和子視圖，或包含指令的視圖後做出回應。',
    timing: `在 ngAfterViewInit() 之後和每次 ngAfterContentChecked() 後呼叫。`
  },
  {
    hook_method: '<code>ngOnDestroy()<code/>',
    purpose: '在 Angular 指令或元件之前進行清理。取消訂閱 Observables 並解除事件處理程序浪費記憶體。',
    timing: `在 Angular 指令或元件之前立即呼叫。`
  }
];

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.scss']
})

export class Lesson2Component {
  displayedColumns: string[] = ['hook_method', 'purpose', 'timing'];
  dataSource = ELEMENT_DATA;

  constructor(private sanitizer: DomSanitizer) { }

  sanitizeHtml(html: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
