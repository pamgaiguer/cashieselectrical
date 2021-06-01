import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() showBackButton: boolean | undefined;
  @Input() currentTitle: string | undefined;
  @Input() showHistoryNav: boolean | undefined;

  constructor() {}

  ngOnInit(): void {}
}
