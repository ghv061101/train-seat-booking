
import { Component } from '@angular/core';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.css'],
})
export class SeatBookingComponent {
  seats: number[][] = [
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(7).fill(0),
    Array(3).fill(0),
  ];

  numberOfSeats: number = 1;
  bookedSeats: string[] = [];

  // Book seats based on the number requested
  bookSeats(requestedSeats: number): void {
    if (requestedSeats < 1 || requestedSeats > 7) return;
    let booked = false;

    // Try booking in one row
    for (let row = 0; row < this.seats.length && !booked; row++) {
      const availableSeats = this.seats[row]
        .map((seat, index) => (seat === 0 ? index : -1))
        .filter((index) => index !== -1);

      if (availableSeats.length >= requestedSeats) {
        for (let i = 0; i < requestedSeats; i++) {
          this.seats[row][availableSeats[i]] = 1;
          this.bookedSeats.push(this.getSeatLabel(row, availableSeats[i]));
        }
        booked = true;
      }
    }

    if (!booked) this.bookNearbySeats(requestedSeats);
  }

  
  private bookNearbySeats(requestedSeats: number): void {
    let seatsLeft = requestedSeats;
    for (let row = 0; row < this.seats.length && seatsLeft > 0; row++) {
      for (
        let seat = 0;
        seat < this.seats[row].length && seatsLeft > 0;
        seat++
      ) {
        if (this.seats[row][seat] === 0) {
          this.seats[row][seat] = 1;
          this.bookedSeats.push(this.getSeatLabel(row, seat));
          seatsLeft--;
        }
      }
    }
  }

 
  getSeatLabel(row: number, seat: number): string {
    return `R${row + 1}S${seat + 1}`;
  }
}
