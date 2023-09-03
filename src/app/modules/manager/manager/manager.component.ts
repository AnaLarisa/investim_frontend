import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";
import {GlobalVarsService} from "../../../services/global-vars.service";
import {RequestsService} from "../../../services/requests.service";

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent {

  constructor(
    private appComponent: AppComponent,
    private globalVarsService: GlobalVarsService,
    private requestsService: RequestsService,
  ) {
    this.appComponent.selectedOption = 'manager';
  }

  manager = {
    name: '',
  }
  role= ''

  searchInput: any = '';
  fullList: any = [];
  matchingSearch: any = [];
  selectedNote: any = null;

  ngOnInit(): void {
    const user = this.globalVarsService.getUser();
    this.role = user?.isAdmin ? 'manager' : 'consultant'
    this.manager.name = user?.managerUsername as string
    this.fullList = this.globalVarsService.getArticles();
    this.matchingSearch = this.fullList;
  }

  ngOnChanges() {
    console.log(this.selectedNote)
  }




  onChange(newValue: any) {
    this.searchInput = newValue;
    this.matchingSearch = [];
    if(newValue === '') {
      this.matchingSearch = this.fullList;
    } else {
      this.fullList.forEach((item: any) => {
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
    event.stopPropagation();
    this.requestsService.deleteArticlesFromManager(note.id).subscribe({
      next: (data: any) => {
        this.matchingSearch = this.matchingSearch.filter((item: any) => item.id !== note.id)
        this.fullList = this.fullList.filter((item: any) => item.id !== note.id)
        this.globalVarsService.setArticles(this.fullList);
      },
      error: (err: any) => {
        if(err.status === 200) {
          this.matchingSearch = this.matchingSearch.filter((item: any) => item.id !== note.id)
          this.fullList = this.fullList.filter((item: any) => item.id !== note.id)
          this.globalVarsService.setArticles(this.fullList)
        }
        else
          console.log(err);
      }
    })
  }
}
