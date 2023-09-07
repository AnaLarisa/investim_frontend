import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GlobalVarsService} from "./global-vars.service";

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient,
    private globalVarsService: GlobalVarsService
  ) {}
  baseUrl = 'http://localhost:5074/';
  login(username: string, password: string) {
    return this.http.post(this.baseUrl + 'auth/login',
      {
        username,
        password
      });
  }

  askForAccount(singUpData: any) {
    const {firstName, lastName, email, username, manager} = singUpData;
    return this.http.post(this.baseUrl + 'auth/askForAccount',
      {
        firstName,
        lastName,
        email,
        username,
        managerUsername: manager
      });
  }

  deleteConsultant(username: string) {
    return this.http.delete(this.baseUrl + `user/delete/${username}`,
      this.globalVarsService.getOptions());
  }

  updatePassword(currentPassword: string, newPassword: string, newPasswordAgain: string) {
    return this.http.put(this.baseUrl + 'user/changePassword',
      {
        currentPassword,
        newPassword,
        newPasswordAgain
      },
      this.globalVarsService.getOptions());
  }

  getOwnStatistics(startDate: string, endDate: string) {
    return this.http.get(this.baseUrl + 'statistics/fullStatistics?startDate=' + startDate + '&endDate=' + endDate,
      this.globalVarsService.getOptions());
  }

  getConsultantStatistics(username: string, startDate: string, endDate: string) {
    return this.http.get(this.baseUrl + `statistics/fullStatistics/${username}?startDate=` + startDate + '&endDate=' + endDate,
      this.globalVarsService.getOptions());
  }

  getConsultants() {
    return this.http.get(this.baseUrl + "user/team",
      this.globalVarsService.getOptions());
  }

  getRegistrationRequests() {
    return this.http.get(this.baseUrl + "auth/registration-requests",
      this.globalVarsService.getOptions());
  }

  approveRegistrationRequests(request_id: any) {
    return this.http.post(this.baseUrl + `auth/registration-requests/${request_id}/approve`,{},
      this.globalVarsService.getOptions());
  }

  deleteRegistrationRequests(request_id: any) {
    return this.http.delete(this.baseUrl + `auth/registration-requests/${request_id}/delete`,
      this.globalVarsService.getOptions());
  }

  setTarget(target: number) {
    return this.http.post(this.baseUrl + `statistics/targetNrOfClientsPerYear?targetNrOfClientsPerYear=${target}`, {},
      this.globalVarsService.getOptions());
  }

  getNews() {
    return this.http.get(this.baseUrl + "news/business",
      this.globalVarsService.getOptions());
  }

  getManagers() {
    return this.http.get(this.baseUrl + "user/managers/all",
      this.globalVarsService.getOptions());
  }

  updateUser(user: any) {
    return this.http.put(this.baseUrl + "user/updateUser", user,
      this.globalVarsService.getOptions());
  }

  getMeetingsUpcoming3() {
    return this.http.get(this.baseUrl + "meeting/upcoming3",
      this.globalVarsService.getOptions());
  }

  getMeetings() {
    return this.http.get(this.baseUrl + "meeting",
      this.globalVarsService.getOptions());
  }

  addMeeting(meeting: any) {
    return this.http.post(this.baseUrl + "meeting", meeting,
      this.globalVarsService.getOptions());
  }

  deleteMeeting(meeting_id: string) {
    return this.http.delete(this.baseUrl + `meeting/${meeting_id}`,
      this.globalVarsService.getOptions());
  }

  updateMeeting(meeting_id: string, meeting: any) {
    return this.http.put(this.baseUrl + `meeting/${meeting_id}`, meeting,
      this.globalVarsService.getOptions());
  }

  getGoals() {
    return this.http.get(this.baseUrl + "statistics/goals/all",
      this.globalVarsService.getOptions());
  }

  addGoal(goal: any) {
    return this.http.post(this.baseUrl + `statistics/goals/add?goal=${goal}`, {},
      this.globalVarsService.getOptions());
  }

  deleteGoal(goal: any) {
    return this.http.delete(this.baseUrl + `statistics/goals/delete?goal=${goal}`,
      this.globalVarsService.getOptions());
  }

  getArticlesFromManager() {
    return this.http.get(this.baseUrl + "articlesFromManager",
      this.globalVarsService.getOptions());
  }

  addArticlesFromManager(article: any) {
    return this.http.post(this.baseUrl + "articlesFromManager", article,
      this.globalVarsService.getOptions());
  }

  deleteArticlesFromManager(article_id: string) {
    return this.http.delete(this.baseUrl + `articlesFromManager/${article_id}`,
      this.globalVarsService.getOptions());
  }

  updateArticlesFromManager(article_id: string, article: any) {
    return this.http.put(this.baseUrl + `articlesFromManager/${article_id}`, article,
      this.globalVarsService.getOptions());
  }

  getRandomNews() {
    return this.http.get(this.baseUrl + "news/business/one",
      this.globalVarsService.getOptions());
  }

  getRandomArticleFromManager() {
    return this.http.get(this.baseUrl + "articlesFromManager/last",
      this.globalVarsService.getOptions());
  }
}
