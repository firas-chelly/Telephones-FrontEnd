import { Component, OnInit } from '@angular/core';
import { Telephone } from '../Model/telephone.model';
import { TelephoneService } from '../services/telephone.service'
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-add-telephone',
  templateUrl: './add-telephone.component.html'
})
export class AddTelephoneComponent implements OnInit {
  newTelephone = new Telephone();

  message : string;
  
  constructor(private telephoneService : TelephoneService,
              private router :Router) { }

  ngOnInit(): void {
  }

  addTelephone(){
   /*console.log(this.newTelephone);
    this.telephoneService.ajouterTelephone(this.newTelephone);
    this.message = "Telephone "+ this.newTelephone.marqueTel + " est ajouté avec succés !"*/

    this.telephoneService.ajouterTelephone(this.newTelephone).subscribe(tels => {
        console.log(tels);
              });
          this.router.navigate(['telephones']).then(() => {
            window.location.reload();
          });
    }
    

}
