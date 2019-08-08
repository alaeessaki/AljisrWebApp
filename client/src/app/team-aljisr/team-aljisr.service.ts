import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamAljisrService {
  members:Array<any>;
  constructor() { 
    this.members = [
      {img:"../../assets/team/Untitled-1.png",desc:"lorem test idst"},
      {img:"../../assets/team/Untitled-2.png",desc:"lorem test idst"},
      {img:"../../assets/team/Untitled-3.png",desc:"lorem test idst"},
      {img:"../../assets/team/Untitled-1.png",desc:"lorem test idst"},
      {img:"../../assets/team/Untitled-2.png",desc:"lorem test idst"},
      {img:"../../assets/team/Untitled-1.png",desc:"lorem test idst"},
    ];
  }
  getTeamMembers(){
    return this.members;
  }
  
}
