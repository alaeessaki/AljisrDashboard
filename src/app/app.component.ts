import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'aljisr-dashboard';
  trigger = false
  isCollapsed = true;
  menuToggle() {
    var sidenav: HTMLElement = document.querySelector('.sidenav');
    var items = document.querySelectorAll('.item a .linkItem');
    var content_wrapper = document.querySelector('.containt-wrapper')

    if (this.trigger==false) {
      (<any>sidenav).style = "width: 60px";
      (<any>content_wrapper).style = "margin-left:75px";
      items.forEach(element => {
        (<any>element).style = "display:none !important";
      });
      this.trigger = true;
    }
    else {
      (<any>sidenav).style = "width: 200px";
      (<any>content_wrapper).style = "margin-left:220px";
      setTimeout(() => {
        items.forEach(element => {
          (<any>element).style = "display:unset"
        })
        console.log('im working !')
      }, 500);
      this.trigger = false;
    }
  }
}
