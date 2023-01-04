import { Component, ElementRef, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css'],
})
export class HelloComponent {
  @HostBinding('class.home') hostClass = true;
  @ViewChild('robot') robot: ElementRef;
  @ViewChild('robotCircle') robotCircle: ElementRef;
  showLogo = true;
  logo =
    'https://bitbucket.org/hriinc/eval-fast-fr-1-mz3y/raw/6468351a5d48ea4219e1f2e06d469566a8a714ea/exercises/interview-exercise-4/assets/FORT%20-%20assessment%20-%20logo.svg';
  robotImage =
    'https://bitbucket.org/hriinc/eval-fast-fr-1-mz3y/raw/6468351a5d48ea4219e1f2e06d469566a8a714ea/exercises/interview-exercise-4/assets/FORT%20-%20assessment%20-%20robo.png';

  executeAnimation() {
    this.showLogo = false;
    setTimeout(() => {
      this.robotCircle.nativeElement.classList.add('visible');
      this.robot.nativeElement.classList.add('robot-rotation');
    }, 1000);
  }
}
