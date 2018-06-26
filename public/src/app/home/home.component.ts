import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  descs = [];
  newPet: any;
  editPet: any;
  Pets: any;
  
  selectedPet = null;
  modifyPet = {
    name: '',
    description: ''
  };
  constructor(private _PetService: PetService) { }
  
  
  ngOnInit() {
  this.getPets()
  console.log('component > ngOnInit');  
  this.tasksFromService();
  this.editPet = { name: "", description: "" }
  }

  getPets(){
    let ob = this._PetService.getAllPets()
    ob.subscribe(data => {
      console.log(data);
      this.Pets = data['pets']
    })
  }

// show 
tasksFromService() {
  console.log("component > taskFromService");
  // this.button = true;
  var tempObservable = this._PetService.getAllPets();
  tempObservable.subscribe(response => {
    console.log("Got our pets!", response['pets']);
    
  })
}


// onButtonClick(id, pet) {
//   console.log('component > onButtonClick')
//   var tempObservable = this._PetService.showDetails(id);
//   tempObservable.subscribe(response => {
//     this.selectedPet = response['pet'];
//   })
// }



// // this is to edit the form
// editThis(editedPet) {
//   console.log('component > editthis ', this.modifyPet);
//   var editObservable = this._PetService.editPets(this.modifyPet);
//   editObservable.subscribe(response => {
//     this.tasksFromService()
//     this.editPet = false;
//   })
// }

// deleteClick(id) {
//   console.log("component > deletePets(id)", id)
//   let deleteObservable = this._PetService.deletePet(id);
//   deleteObservable.subscribe((data) => {
//     this.tasksFromService()
//   })

//   // this.deleteTask = response['task']
// }

toModify(pet) {
  console.log("component > tomodify")
  this.modifyPet = pet;
}


selectPet(pet) {
  console.log("component > selectpet")
  this.selectedPet = pet;

}


}
