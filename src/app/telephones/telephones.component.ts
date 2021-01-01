import { Component, OnInit } from '@angular/core';
import { Telephone } from '../Model/telephone.model';
import { TelephoneService } from '../services/telephone.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-telephones',
  templateUrl: './telephones.component.html'
})
export class TelephonesComponent implements OnInit {
  telephones : Telephone[];

  constructor(private telephoneService : TelephoneService,
              private router :Router){
    //this.telephones = telephoneService.listeTelephones();
  }

  ngOnInit(): void {
    this.telephoneService.listeTelephones().subscribe(tels => {
      console.log(tels);
      this.telephones = tels;
      });
  }

  supprimerTelephone(tel: Telephone)
    /*console.log(tel);
      let conf = confirm("Etes-vous sûr ?");
        if (conf)
      this.telephoneService.supprimerTelephone(tel);*/

      {
        let conf = confirm("Etes-vous sûr ?");
        if (conf)
        this.telephoneService.supprimerTelephone(tel.idTel).subscribe(() => {
        console.log("Telephone supprimé");
        this.SupprimerTelephoneDuTableau(tel);
      });
      }


      SupprimerTelephoneDuTableau(prod : Telephone) {
        this.telephones.forEach((cur, index) => {
        if(prod.idTel=== cur.idTel) {
        this.telephones.splice(index, 1);
        }
        });
        }



}
