import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { routes } from 'src/app/features/courses/courses-routing.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  routeList = routes[0].children

  constructor(private observer: BreakpointObserver, private cdRef: ChangeDetectorRef) { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = "over";
          this.sidenav.close();
        } else {
          this.sidenav.mode = "side";
          this.sidenav.open();
        }
        this.cdRef.detectChanges(); // 手動觸發變更偵測
      });
    });
  }
}
