// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Required for ngModel
import { AppComponent } from './app.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';

@NgModule({
  declarations: [
    AppComponent,
    SeatBookingComponent, // Declare the component here
  ],
  imports: [
    BrowserModule,
    FormsModule, // Import FormsModule to use [(ngModel)]
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
