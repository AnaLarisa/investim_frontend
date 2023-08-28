import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  constructor(private appComponent: AppComponent) {
    this.appComponent.selectedOption = 'manager';
  }

  manager = {
    name: 'Luca',
  }
  role= 'dmanager'

  searchInput = '';
  fullList = [
    {
      title:'title',
      content:'https://www.example.com',
      observations:'This is an observation',
    },
    {
      title:'title2',
      content:'https://www.example.com',
      observations:'This is an observation',
    },
    {
      title:'title3',
      content:'https://www.example.com',
      observations:'This is an observation',
    },
    {
      title:'title4',
      content:'https://www.example.com',
      observations:'This is an observation',
    },
  ];
  matchingSearch: any = this.fullList;
  selectedNote: any = null;

  onChange(newValue: any) {
    this.searchInput = newValue;
    this.matchingSearch = [];
    if(newValue === '') {
      this.matchingSearch = this.fullList;
    } else {
      this.fullList.forEach((item) => {
        if (item.title.includes(newValue)) {
          this.matchingSearch.push(item);
        }
      });
    }
  }

  selectNote(index: number){
    if(this.selectedNote === index){
      window.location.href = this.matchingSearch[index].content;
    } else {
      this.selectedNote = index
    }
  }

  deleteNote(event: any, note: any) {
    event.stopPropagation()
    console.log(note)
  }
}
