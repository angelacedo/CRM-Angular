import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftbar',
  templateUrl: './leftbar.component.html',
  styleUrls: ['./leftbar.component.css']
})
export class LeftbarComponent implements OnInit
{

  constructor() { }

  ngOnInit(): void
  {
     const btn_display_menu = document.getElementById("btn-display-menu");
    const leftmenu = document.getElementById("left-menu");
    const topbar = document.getElementById('topbar');
    const dashboard = document.getElementById('dashboard');
    const user_manage = document.getElementById('user-manage');

    btn_display_menu!.addEventListener('click', function ()
    {
      topbar?.classList.toggle('element-movement');

      leftmenu?.classList.toggle('active');
      dashboard?.classList.toggle('element-movement');
      dashboard?.classList.toggle('dashboard-expanded');
      user_manage?.classList.toggle('element-movement');
      user_manage?.classList.toggle('dashboard-expanded');

    });
  }

}
