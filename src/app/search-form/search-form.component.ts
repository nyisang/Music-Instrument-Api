import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
@Output() emitSearch = new EventEmitter<any>()

student="";

searchTerm:string;

  constructor() { }
search(event:any){
  this.student = event.target.value
  this.emitSearch.emit(this.student)
  console.log(this.student)
}
  ngOnInit() {
  }

}