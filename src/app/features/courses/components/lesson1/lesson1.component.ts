import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { addClassToHtml } from 'src/app/services/html-utils';
import { PrismService } from 'src/app/services/prism.service';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.scss']
})
export class Lesson1Component implements OnInit, AfterViewChecked {
  
  highlighted = false;

  code = `
  <h5>建立 新的 Angular 專案</h5>
<pre><code class="language-bash">ng new &lt;project-name&gt;</code></pre>

<h5>啟動 serve 本地開發伺服器，用於測試和開發</h5>
<pre><code class="language-bash">ng serve</code></pre>

<h5>建立 component 元件</h5>
<pre><code class="language-bash">ng generate component &lt;component-name&gt;</code></pre>

<h5>建立 service 服務</h5>
<pre><code class="language-bash">ng generate service &lt;service-name&gt;</code></pre>

<h5>建立 module 模組</h5>
<pre><code class="language-bash">ng generate module &lt;module-name&gt;</code></pre>

<h5>建立 directive 指令</h5>
<pre><code class="language-bash">ng generate directive &lt;directive-name&gt;</code></pre>

<h5>建立 pipe 管道</h5>
<pre><code class="language-bash">ng generate pipe &lt;pipe-name&gt;</code></pre>

<h5>建立 class 類別</h5>
<pre><code class="language-bash">ng generate class &lt;class-name&gt;</code></pre>

<h5>建置 Angular 專案，產生用於部署的應用程式程式碼</h5>
<pre><code class="language-bash">ng build</code></pre>

<h5>執行 test 測試</h5>
<pre><code class="language-bash">ng test</code></pre>

<h5>執行 lint 程式碼檢查</h5>
<pre><code class="language-bash">ng lint</code></pre>

`;

  constructor(private readonly prismService: PrismService) { }

  ngOnInit() {
    this.code = addClassToHtml(this.code, 'line-numbers', 'pre');
  }

  ngAfterViewChecked() {
    if (!this.highlighted && this.code) {
      this.prismService.highlightAll();
      this.highlighted = true;
    }
  }
}
