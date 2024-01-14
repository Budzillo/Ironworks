import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dialog-information',
  templateUrl: './dialog-information.component.html',
  styleUrl: './dialog-information.component.scss'
})
export class DialogInformationComponent {
  @Input() public title : string = "";
  @Input() public text : string = "";
  @Input() public okText : string = "";
}
