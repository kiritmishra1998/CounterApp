import { Component, WritableSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet,FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
counter:WritableSignal<number>=signal<number>(0)
increment(){
  this.counter.update((val)=>val+1)
}
decrement(){
  this.counter.update((val)=>val-1)
}
reset(){
  this.counter.set(0)
}
}
