import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})



export class PetService {
 
  constructor(private _http: HttpClient) { 

  }

  addPet(form){
    console.log('Service > addPet(form)', form);
    return this._http.post('/api/create', form)
  }

  getOnePet(id){
    return this._http.get('/api/onePet/' + id)
  }

  getAllPets(){
    return this._http.get('/api/pets')
    
  }

  
  editPets(modifyPet) {
    console.log('ANGULAR > Service (http.service) > editPets(modifyPet), modifyPet:', modifyPet)
    return this._http.patch('/api/update/' + modifyPet._id, modifyPet)
  }

  deletePet(id) {
    return this._http.delete('/api/delete/' + id)
  }

}
