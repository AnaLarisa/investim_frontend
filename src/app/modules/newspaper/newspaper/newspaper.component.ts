import { Component } from '@angular/core';
import {AppComponent} from "../../../app.component";

@Component({
  selector: 'app-newspaper',
  templateUrl: './newspaper.component.html',
  styleUrls: ['./newspaper.component.css']
})
export class NewspaperComponent {
  constructor(private appComponent: AppComponent) {
    this.appComponent.selectedOption = 'newspaper';
  }

  articles = [
    {
      title:"'It's Tedding time', as the author suggest, is a huge instigation to teddy bears around the world! Find out more 'It's Tedding time', as the author suggest, is a huge instigation to teddy bears around the world! Find out more 'It's Tedding time', as the author suggest, is a huge instigation to teddy bears around the world! Find out more",
      author:"TedHater",
      url:"https://www.example.com",
      imageUrl:"https://th.bing.com/th/id/OIP.JZU7GD8fPNsGHnzx2Gd1JQHaHa?pid=ImgDet&rs=1",
    },
    {
      title:"Lorem ipsum? Find out what the internet says",
      author:"The Internet",
      url:"https://www.example.com",
      imageUrl:"https://th.bing.com/th/id/OIP.hqkM1yENKy39OMUaMVgmDwHaHa?pid=ImgDet&rs=1",
    },
    {
      title:"Bugs in your news list? Just act as if it was intended!",
      author:"Small time developer",
      url:"https://www.example.com",
      imageUrl:"https://th.bing.com/th/id/OIP.AoQNiyEzBE1NYIcJIPgVqAHaGT?pid=ImgDet&rs=1",
    },
    {
      title:"Is she into you?",
      author:"C. Can't tell",
      url:"https://www.example.com",
      imageUrl:"https://i.ytimg.com/vi/-b__KyXwrK0/maxresdefault.jpg",
    },
    {
      title:"'It's Tedding time', as the author suggest, is a huge instigation to teddy bears around the world! Find out more",
      author:"TedHater",
      url:"https://www.example.com",
      imageUrl:"https://th.bing.com/th/id/OIP.JZU7GD8fPNsGHnzx2Gd1JQHaHa?pid=ImgDet&rs=1",
    },
    {
      title:"Lorem ipsum? Find out what the internet says",
      author:"The Internet",
      url:"https://www.example.com",
      imageUrl:"https://th.bing.com/th/id/OIP.hqkM1yENKy39OMUaMVgmDwHaHa?pid=ImgDet&rs=1",
    },
    {
      title:"Bugs in your news list? Just act as if it was intended!",
      author:"Small time developer",
      url:"https://www.example.com",
      imageUrl:"https://th.bing.com/th/id/OIP.AoQNiyEzBE1NYIcJIPgVqAHaGT?pid=ImgDet&rs=1",
    },
    {
      title:"Is she into you?",
      author:"C. Can't tell",
      url:"https://www.example.com",
      imageUrl:"https://i.ytimg.com/vi/-b__KyXwrK0/maxresdefault.jpg",
    },
  ]

}
