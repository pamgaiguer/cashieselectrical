import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [HomeComponent, NotfoundComponent],
  imports: [CommonModule],
})
export class PagesModule {}
