import { Component, Input } from '@angular/core';
import { LoggingService } from '../../../services/logging.service';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-logging',
  templateUrl: './logging.component.html',
  styleUrl: './logging.component.scss'
})
export class LoggingComponent {
  @Input() login:string="";
  @Input() password:string="";
  constructor(private router:Router,public loggingService:LoggingService){

  }
  public async tryLogin() : Promise<void>{
    if(this.login != undefined && this.login != "" && this.password != undefined && this.password != "")
    {
      this.loggingService.login(this.login,this.password).subscribe(result=>{
        this.loggingService.loggingModel = result;
        if(this.loggingService.loggingModel.isLogged)
        this.router.navigate(['home']);
    }); 
    }      
  }
  public changeLoginValues() : void{
    this.loggingService.loggingModel.isLoggingError = false;
  }  
}
