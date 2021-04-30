import { AfterContentChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  FormGroup, NgForm } from '@angular/forms';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @ViewChild('mForm', { static: true }) movieForm: FormGroup;
  movie: Movie = new Movie();
  selectedCategory: boolean = false;

  constructor() {

  }

  ngOnInit(): void {
  }

  saveMovie(form: NgForm): any {
    console.log(form.value);
    return {};
  }

  selectedCat(event: Event) {
    if ((event.target as HTMLInputElement).value !== '') {
      this.selectedCategory = true;
    } else {
      this.selectedCategory = false;
    }
  }

}
