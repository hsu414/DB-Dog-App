import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table'
import { HttpService } from '../../service/http.service';
import { BreedDetailComponent } from '../breed-detail/breed-detail.component';

//const ELEMENT_DATA=  ["affenpinscher","african","airedale","akita","appenzeller","australian","basenji","beagle","bluetick","borzoi","bouvier","boxer","brabancon","briard","buhund","bulldog","bullterrier","cattledog","chihuahua","chow","clumber","cockapoo","collie","coonhound","corgi","cotondetulear","dachshund","dalmatian","dane","deerhound","dhole","dingo","doberman","elkhound","entlebucher","eskimo","finnish","frise","germanshepherd","greyhound","groenendael","havanese","hound","husky","keeshond","kelpie","komondor","kuvasz","labradoodle","labrador","leonberg","lhasa","malamute","malinois","maltese","mastiff","mexicanhairless","mix","mountain","newfoundland","otterhound","ovcharka","papillon","pekinese","pembroke","pinscher","pitbull","pointer","pomeranian","poodle","pug","puggle","pyrenees","redbone","retriever","ridgeback","rottweiler","saluki","samoyed","schipperke","schnauzer","segugio","setter","sharpei","sheepdog","shiba","shihtzu","spaniel","spitz","springer","stbernard","terrier","tervuren","vizsla","waterdog","weimaraner","whippet","wolfhound"];

@Component({
  selector: 'app-breed-list',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, BreedDetailComponent],
  templateUrl: './breed-list.component.html',
  styleUrl: './breed-list.component.scss'
})
export class BreedListComponent {

  constructor(private httpService: HttpService) {}

  displayedColumns: string[] = [ 'name']
  dataSource!: MatTableDataSource<string>;

  // breedList=new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort = new MatSort();
  @ViewChild(MatPaginator) paginator: MatPaginator = new MatPaginator(new MatPaginatorIntl(), ChangeDetectorRef.prototype);

  ngOnInit(): void {
    this.getBreedsList();
   
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }

  getBreedsList() {
    // getBreedsList
    this.httpService.getBreedsList().subscribe((res: any)=>{
      this.dataSource = new MatTableDataSource(res.results);
      this.dataSource.paginator = this.paginator;
    });;
  }
 

}
