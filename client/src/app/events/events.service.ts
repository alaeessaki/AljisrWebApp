import { Injectable } from '@angular/core';
// import { events } from '../declarations';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  // event: events[]
  constructor(private http: HttpClient) { 
    // this.event = [
    //   {id:1,title: "Atelier codage scratch", date: "08 JUL", description: "Event 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam."},
    //   {id:2,title: "Formation en communication", date: "03 SEP", description: "Event 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam."},
    //   {id:3,title: "Céremonie des bénévolats", date: "13 JUI", description: "Event 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam."},
    //   {id:4,title: "conférence sur l'éducation", date: "10 MAI", description: "Event 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia iusto dolor cumque consectetur expedita, repellat commodi molestias velit ipsam ex quisquam dicta necessitatibus incidunt optio laborum possimus. Animi, eos quisquam."}
    // ]
  }
  getEvents(){
    return this.http.get('api/events');;
  }

  addParticipant(id, participant){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(id)
    // return this.http.post(window.location.origin+'/api/addParticipant/'+id, participant, httpOptions);
    return this.http.post('api/addParticipant/'+id, participant, httpOptions);
  }

  // send participationMail
  sendMail(participant, event, date){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const newParticipant={
      email:participant.email,
      event:event,
      date:date
    }
    // return this.http.post(window.location.origin+'/api/addParticipant/'+id, participant, httpOptions);
    return this.http.post('api/sendParticipationMail', newParticipant, httpOptions);
  }




}
