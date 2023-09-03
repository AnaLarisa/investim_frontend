import { Injectable } from '@angular/core';

interface User {
  address: string;
  authorizationToken: string;
  city: string;
  email: string;
  emailConfirmed: boolean;
  firstName: string;
  id: string;
  isAdmin: boolean;
  lastName: string;
  managerUsername: string;
  meetingsNotificationsOff: boolean;
  phoneNumber: string;
  username: string;
}


@Injectable({
  providedIn: 'root'
})
export class GlobalVarsService {

  constructor() { }

  private meetings: any[] = [];

  private reloadedChat = false;

  setReloadedChat(reloadedChat: boolean) {
    this.reloadedChat = reloadedChat;
  }

  getReloadedChat() {
    return this.reloadedChat;
  }

  setMeetings(meetings: any[]) {
    this.meetings = meetings;
  }

  getMeetings() {
    return this.meetings;
  }

  private articles: any[] = [];

  setArticles(articles: any[]) {
    this.articles = articles;
  }

  getArticles() {
    return this.articles;
  }

  private news: any[] = [];

  setNews(news: any[]) {
    this.news = news;
  }
  getNews() {
    return this.news;
  }

  private options = {}

  setOptions(options: any) {
    this.options = options;
  }
  getOptions() {
    return this.options;
  }

  private user: User | null = null;
  setUser(user: User | null) {
    this.user = user;
    if(user)
      this.setOptions({
        headers: {
          Authorization: `Bearer ${user.authorizationToken}`
        }
      })
  }
  getUser() {
    return this.user;
  }
}
