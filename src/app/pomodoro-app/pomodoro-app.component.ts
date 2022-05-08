import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pomodoro-app',
  templateUrl: './pomodoro-app.component.html',
  styleUrls: ['./pomodoro-app.component.css']
})
export class PomodoroAppComponent implements OnInit {


  constructor() {
  }

  ngOnInit(): void {
  }

  private timer: number | undefined;
  seconds: number = 0;
  minutes: number = 25;
  timeout: number | undefined;
  selectedPeriod: string = "pomodoro";
  selectedStatus: string = "notStarted";
  settedTimeout: number | undefined;

  onSelectedPeriod(selectedPeriod: string) {
    this.selectedPeriod = selectedPeriod;
    if (selectedPeriod == "pomodoro") {
      this.minutes = 25;
    } else if (selectedPeriod == "long") {
      this.minutes = 10;
    } else if (selectedPeriod == "short") {
      this.minutes = 1;
    }
  }

  onStart() {
    this.selectedStatus = "started"
    this.seconds = 59;
    this.minutes--;
    this.timeReduction()
  }

  onRestart() {
    this.timeReduction()
    this.selectedStatus = "started"
  }

  onReset() {
    this.onSelectedPeriod(this.selectedPeriod)
    this.seconds = 0;
    this.onStop();
    this.selectedStatus = "notStarted"
  }

  onStop() {
    this.selectedStatus = "paused"
    clearInterval(this.timer);
    clearTimeout(this.settedTimeout);
  }

  timeReduction() {
    this.timer = setInterval(() => {
      this.seconds--;
      if (this.seconds < 0) {
        this.minutes--;
        this.seconds = 59;
      }
    }, 1000);
    this.timeout = (this.minutes * 60 + this.seconds) * 1000;
    this.settedTimeout = setTimeout(() => {
      clearInterval(this.timer)
    }, this.timeout);
  }
}
