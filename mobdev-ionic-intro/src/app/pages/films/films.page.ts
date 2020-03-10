import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
=======
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
>>>>>>> 9067d93a05c2efe0a0bb20407c726dfdf204a206

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

<<<<<<< HEAD
  films: Observable<any>;

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.films = this.http.get('https://swapi.co/api/films');
  }

  openDetails(film) {
    let split = film.url.split('/');
    let filmId = split[split.length-2];
    this.router.navigateByUrl(`/tabs/films/${filmId}`);
  }
=======
  constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {
  }

  openDetails() {
    // Both of these would work!
    // But the standard Router is recommended.
    // this.navController.navigateForward(`/tabs/films/42`);
    this.router.navigateByUrl(`/tabs/films/42`);
  }

  goToPlanets() {
    this.navController.navigateRoot(`/tabs/planets`)
  }

>>>>>>> 9067d93a05c2efe0a0bb20407c726dfdf204a206
}