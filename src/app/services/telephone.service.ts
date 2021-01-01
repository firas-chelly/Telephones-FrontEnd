import { Injectable } from '@angular/core';
import { Telephone } from '../Model/telephone.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };

@Injectable({
  providedIn: 'root'
})
export class TelephoneService {
  telephones : Telephone[];
  telephone : Telephone ;


  apiURL: string = 'http://localhost:8083/telephones/api';

  constructor(private http : HttpClient) { 
   /* this.telephones = [
      {idTel : 1, marqueTel : "Samsung Galaxy S10 Ultra", prixTel : 3000.600, dateCreation : new Date("10/15/2019")},
      {idTel : 2, marqueTel : "IPhone 12 Pro", prixTel : 4500, dateCreation : new Date("09/12/2020")},
      {idTel : 3, marqueTel :"Xiaomi Redmi Note 9", prixTel : 900.452, dateCreation : new Date("02/10/2019")}
    ];*/
}

listeTelephones(): Observable<Telephone[]>{
  return this.http.get<Telephone[]>(this.apiURL);
  }

  ajouterTelephone( tel: Telephone):Observable<Telephone>{
    return this.http.post<Telephone>(this.apiURL, tel, httpOptions);
    }
    

/*supprimerTelephone(tel : Telephone){
  //supprimer le telephone prod du tableau telephones
    const index = this.telephones.indexOf(tel, 0);
      if (index > -1) {
        this.telephones.splice(index, 1);
    }
//ou Bien
/* this.telephones.forEach((cur, index) => {
if(tel.idTel === cur.idTel) {
this.telephones.splice(index, 1);
}
}); 
}*/

supprimerTelephone(id : number) {
  const url = `${this.apiURL}/${id}`;
  return this.http.delete(url, httpOptions);
  }

  consulterTelephone(id: number): Observable<Telephone> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Telephone>(url);
    }

  /*updateTelephone(tel:Telephone)
  {
    // console.log(tel);
    this.supprimerTelephone(tel);
    this.ajouterTelephone(tel);
    this.trierTelephones();
  }*/

  updateTelephone(tel :Telephone) : Observable<Telephone>
    {
      return this.http.put<Telephone>(this.apiURL, tel, httpOptions);
    }   

 /* trierTelephones(){
    this.telephones = this.telephones.sort((n1,n2) => {
    if (n1.idTel > n2.idTel) {
    return 1;
    }
    if (n1.idTel < n2.idTel) {
    return -1;
    }
    return 0;
    });
    }
    */
  

}
