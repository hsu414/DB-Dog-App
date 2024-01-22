import { Component, Input } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { HttpService } from '../../service/http.service';

@Component({
  selector: 'app-breed-detail',
  standalone: true,
  imports: [CdkAccordionModule],
  templateUrl: './breed-detail.component.html',
  styleUrl: './breed-detail.component.scss'
})
export class BreedDetailComponent {
  @Input() name: string | undefined;
  imageSource: string | undefined;
  constructor(private httpService: HttpService) {}
  

  onViewMore(id: any, accordionItem:any)  {
    if(!accordionItem.expanded){
      this.httpService.getBreedImage(id).subscribe((res: any)=>{
        this.imageSource = res.message;
      });
      console.log("send event")
      this.httpService.sendClickEvent(id).subscribe();
    }
   
    accordionItem.toggle();

  

   
  
  }



}
