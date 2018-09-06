import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
getCategory(){
  return [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Languages' },
  ];
}

getContact(){
  return  [
    {id:1, name:"email"},
    {id:2, name:"phone"},
    {id:3, name:"skype"}
  ];
}
getPromo(){
  return [
    {id:1, name:"FIRSTPAY"},
    {id:2,name:"DOUBLEBOOK"},
    {id:3,name:"REINVEST"},
    {id:4,name:"TRIAL"}
  ];
}

 
}
