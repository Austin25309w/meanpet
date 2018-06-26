import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router'


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  id: any;
  pet: any;
  // pet = {
  //   name: "",
  //   type: "",
  //   description: "",
  //   skills_1 : "",
  //   skills_2 : "",
  //   skills_3 : ""
  // }

  constructor(
    private _petService : PetService,
    private _route : ActivatedRoute,
    private _router : Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      console.log("PARAMS id is here", params["id"])
      this.id=params["id"]
    })
    this.getPet()
  }

  // tasksFromService() {
  //   console.log("component > taskFromService");
  //   // this.button = true;
  //   var tempObservable = this._petService.getAllPets();
  //   tempObservable.subscribe(response => {
  //     console.log("Got our pets!", response['pets']);
  //   })
  // }

  getPet(){
    let ob = this._petService.getOnePet(this.id);
    ob.subscribe(data => {
      console.log('logging this pet', data)
      this.pet = data['pet']
      console.log(this.pet)
    })
  }
  // let ob = this._petService.getOnePet(params['id'])
  // ob.subscribe(data => {

  //   this.pet = data['pets']
    
  // })
  


  editThis(id) {
    console.log('component > editthis ');
    var editObservable = this._petService.editPets(this.pet);
    editObservable.subscribe(response => {
      // this.tasksFromService()
      this._router.navigate(['/pets/'])
    })
  }
  


}
