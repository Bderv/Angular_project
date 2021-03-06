import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LOCAL_STORAGE, WebStorageService } from 'angular-webstorage-service';

@Component({
  selector: 'app-char-page',
  templateUrl: './char-page.component.html',
  styleUrls: ['./char-page.component.scss']
})
export class CharPageComponent implements OnInit {

  logged_in_user: string;
  character_id: any;


  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.logged_in_user = this.storage.get('Current User ID')
    if (!this.logged_in_user){
      this.router.navigate(['/'])
    }
    this.route.params.subscribe((params: Params)=>{
      this.character_id = params["id"]
      console.log(this.character_id)
    }) 
  }

}