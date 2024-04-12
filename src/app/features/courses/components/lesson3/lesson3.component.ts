import { AfterViewChecked, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { addClassToHtml } from 'src/app/services/html-utils';
import { PrismService } from 'src/app/services/prism.service';

export interface PeriodicElement {
  BINDINGS: string;
  DETAILS: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { DETAILS: '設定特定的元素屬性。', BINDINGS: '屬性綁定 Property binding' },
  { DETAILS: '監聽元素更改事件。', BINDINGS: '事件綁定 Event binding' },
];

@Component({
  selector: 'app-lesson3',
  templateUrl: './lesson3.component.html',
  styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit, AfterViewChecked {

  highlighted = false;

  code = `
  <h4>文本插值 text interpolations</h4> 
  <pre><code class="language-typescript">currentCustomer = 'Leo';</code></pre>
  <pre><code class="language-html">&lt;h3&gtCurrent customer: {{ currentCustomer }}&lt;/h3&gt</code></pre>
  <br>
  <h4>屬性綁定 Property binding</h4> 
  <p>屬性綁定將值從組件的屬性移動到目標元素的屬性。通常，你將要綁定的目標屬性放在方括號中，識別為目標屬性。例如，要將元素的 src 屬性綁定到組件的屬性，可以這樣做：</p>
  <pre><code class="language-html">&lt;img alt="item" [src]="itemImageUrl"&gt;</code></pre>
  <br>
  <h4>Attribute綁定 Attribute binding</h4>
  <p>在 Angular 中，屬性綁定幫助你直接設置屬性的值。通過屬性綁定，你可以提高可訪問性，動態樣式你的應用，以及同時管理多個 CSS 類或樣式。</p>
  <p>屬性綁定的語法類似於屬性綁定，但在方括號之間，你使用 <code>attr</code> 前綴並跟著一個<code>.</code>來指定屬性的名稱。然後，你使用解析為字符串的表達式來設置屬性值。</p>
  <pre><code class="language-html">&lt;p [attr.attribute-you-are-targeting]="expression"&gt&lt;/p&gt</code></pre>
  <p>當表達式解析為 null 或 undefined 時，Angular 會刪除該屬性。</p>
  <h5>綁定 ARIA 屬性</h5>
  <p>屬性綁定的一個主要用例是設置 ARIA 屬性。</p>
  <pre><code class="language-html">&lt;button type="button" [attr.aria-label]="actionName"&gt{{actionName}} with Aria&lt;/button&gt</code></pre>
  <br>
  <h4>事件綁定 Event binding</h4>
  <P>事件綁定讓你能夠監聽並響應使用者動作，例如按鍵、滑鼠移動、點擊和觸碰。<P>
  <h5>方法綁定：</h5>
  <pre><code class="language-html">&lt;button (click)="onSave()"&gtSave&lt;/button&gt</code></pre>
  <p>事件綁定會監聽按鈕的點擊事件，並在每次點擊時呼叫組件中的 onSave() 方法。<p>
  <h5>鍵盤事件綁定：</h5>
  <pre><code class="language-html">&lt;input (keydown.shift.t)="onKeydown($event)" /&gt</code></pre>
  <h4>雙向綁定 Two-way binding</h4>
  <p>雙向綁定為應用程式中的元件提供了一種共享資料的方式。使用雙向綁定來偵聽事件並在父元件和子元件之間同時更新值。</p>
  <p>雙向綁定將屬性綁定與事件綁定結合：</p>
  `;

  code2 = `
  <h5>新增雙向資料綁定</h5>
  <h3>子元件</h3>
  <p>Angular 的雙向綁定語法是方括號和括號的組合<code>[()]</code>。 <code>[()]</code> 語法將屬性綁定的方括號<code>[]</code> 和事件綁定的括號<code>()</code> 結合在一起，如下所示。</p>
  <pre><code class="language-html">&lt;app-sizer [(size)]="fontSizePx"&gt&lt;/app-sizer&gt</code></pre>
  <h5>雙向綁定的工作原理</h5>
  <p>要使雙向資料綁定運作，<code>@Output()</code> 屬性必須使用模式 <code>inputChange</code>，其中 <code>input</code> 是 <code>@Input()</code> 屬性的名稱。例如，如果 <code>@Input()</code> 屬性是 <code>size</code>，則 <code>@Output()</code> 屬性必須是 <code>sizeChange</code>。</p>
  <p>以下的 <code>sizerComponent</code> 具有 <code>size</code> 值屬性和 <code>sizeChange</code> 事件。 <code>size</code> 屬性是 <code>@Input()</code>，因此資料可以流入 <code>sizerComponent</code>。 <code>sizeChange</code> 事件是 <code>@Output()</code>，它允許資料從 <code>sizerComponent</code> 流出到父元件。</p>
  <p>接著，有兩個方法，<code>dec()</code> 用於減小字型大小，而 <code>inc()</code> 用於增加字型大小。這兩個方法使用 <code>resize()</code> 方法來在最小/最大值範圍內更改 <code>size</code> 屬性的值，並發出一個事件來傳遞新的 <code>size</code> 值。</p>
  <pre><code class="language-typescript">
  export class SizerComponent {
    @Input() size!: number | string;
    @Output() sizeChange = new EventEmitter<number>();
  
    dec() {
      this.resize(-1);
    }
    inc() {
      this.resize(+1);
    }
  
    resize(delta: number) {
      this.size = Math.min(40, Math.max(8, +this.size + delta));
      this.sizeChange.emit(this.size);
    }
  }
  </code></pre>
  <pre><code class="language-html">
  &lt;div&gt;
    &lt;button type="button" (click)="dec()" title="smaller"&gt;-&lt;/button&gt;
    &lt;button type="button" (click)="inc()" title="bigger"&gt;+&lt;/button&gt;
    &lt;span [style.font-size.px]="size"&gt;FontSize: {{size}}px&lt;/span&gt;
  &lt;/div&gt;
  </code></pre>
  `;

  code3 = `
  <hr>
  <h3>父元件</h3>
  <p>在<code>AppComponent</code>模板中，<code>fontSizePx</code>雙向綁定到<code>SizerComponent</code></p>
  <pre><code class="language-html">
  &lt;app-sizer [(size)]="fontSizePx"&gt;&lt;/app-sizer&gt;
  &lt;div [style.font-size.px]="fontSizePx"&gt;Resizable Text&lt;/div&gt;
  </code></pre>
  <p>在<code>AppComponent</code>中，將<code>fontSizePx</code>設初始值。</p>
  <pre><code class="language-typescript">fontSizePx = 16;</code></pre>
  <hr>
  <p>雙向綁定語法是屬性綁定和事件綁定組合的簡寫。作為單獨的屬性綁定和事件綁定，SizerComponent如下。<p>
  <pre><code class="language-html">&lt;app-sizer [size]="fontSizePx" (sizeChange)="fontSizePx=$event"&gt&lt;/app-sizer&gt</code></pre>
  <p><code>$event</code> 變數包含了 <code>SizerComponent.sizeChange</code> 事件的資料。當使用者點擊按鈕時，Angular 將 <code>$event</code> 的值指派給  <code>AppComponent.fontSizePx</code>。</p>
  `;

  codes = [this.code, this.code2, this.code3];

  displayedColumns: string[];
  dataSource;

  constructor(private readonly prismService: PrismService) {
    this.displayedColumns = ['BINDINGS', 'DETAILS'];
    this.dataSource = ELEMENT_DATA;
  }

  ngOnInit() {
    this.codes.forEach((code) => {
      addClassToHtml(code, 'line-numbers', 'pre');
    });
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.codes.forEach((code) => {
        if (code) {
          this.prismService.highlightAll();
          this.highlighted = true;
        }
      });
    }
  }

  @Input() size: number = 30;
  @Output() sizeChange = new EventEmitter();

  dec() {
    this.resize(-1);
  }
  inc() {
    this.resize(+1);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }
}
