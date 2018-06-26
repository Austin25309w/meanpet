import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  petId: any;
  pet: object = {
    name: "",
    type: "",
    description: "",
    skills_1 : "",
    skills_2 : "",
    skills_3 : ""
  }
  type: any;
  constructor(
    private _petService: PetService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe(data => {
      console.log('route params ', data)
      this.petId = data.id;
      this.getOnepet();
    })
  }

  getOnepet(){
    let ob = this._petService.getOnePet(this.petId);
    ob.subscribe(data => {
      
      if(data['message'] == "success"){
        console.log("got data from get one", data)
        this.pet = data['pet'];
        this.type = data['pet']['type'];
      }
    })
  } 
  remove(id) {
    let ob = this._petService.deletePet(id)
    ob.subscribe(data => {
      console.log(data)
      this._router.navigate(['/pets'])
    })
  }

}
