import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { PetService } from  '../pet.service'



@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errorMsg: any;
  petobj = {name: ''}
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _PetService: PetService
  ) { }

  ngOnInit() {
    this.errorMsg = false;
  }

  tasksFromService() {
    console.log("component > taskFromService");
    // this.button = true;
    var tempObservable = this._PetService.getAllPets();
    tempObservable.subscribe(response => {
      console.log("Got our pets!", response['pets']);
    })
  }

  newPet(myform: NgForm) {
    console.log('component > newPet(myForm) ', myform)
    let observable = this._PetService.addPet(myform.value)
    observable.subscribe(data => {
      console.log('add new pet', data)
      this.tasksFromService()
      if(data['message'] == "success"){
        this.errorMsg = null;
        this._router.navigate(['/'])
      } else { 
          this.errorMsg = data['error']['errors'];
      }
      
      
    })
  }
}


// (data['error']['error']['name']) {
//   this.errorMsg = data['error']['errors']['name']['message'];
// } else if (data['error']['error']['type']) {