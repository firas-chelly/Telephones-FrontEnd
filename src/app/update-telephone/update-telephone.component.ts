import { Component, OnInit } from '@angular/core';
import { Telephone } from '../Model/telephone.model';
import { TelephoneService } from '../services/telephone.service'
import { ActivatedRoute,Router } from '@angular/router';




@Component({
  selector: 'app-update-telephone',
  templateUrl: './update-telephone.component.html',
  styles: [
  ]
})
export class UpdateTelephoneComponent implements OnInit {
  currentTelephone = new Telephone();

  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private telephoneService : TelephoneService) { }

  ngOnInit() {
      this.telephoneService.consulterTelephone(this.activatedRoute.snapshot.params.id).subscribe( tel =>{ this.currentTelephone = tel; } ) ;
        }

  updateTelephone()
  { 
    this.telephoneService.updateTelephone(this.currentTelephone).subscribe(tel => {
      this.router.navigate(['telephones']);
      },(error) => { alert("Problème lors de la modification !"); }
      );
      
  }


}
