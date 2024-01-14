import { CommonModule, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { LoggingService } from './services/logging.service';
import { LoggingModel } from './models/logging.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'System zarządzania hutą';
  constructor(private router:Router,public loggingService:LoggingService){
    router.navigate(['logging']);
  }
  public logout() : void{
    this.loggingService.loggingModel = new LoggingModel();
    this.router.navigate(['logging']);
  }
}
