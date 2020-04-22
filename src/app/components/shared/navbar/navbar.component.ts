import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit(): void {
  }

  searchMovie = (termino: string) => {
    console.log(termino);
    this.router.navigate(['/search', termino]);
  }

  logout = () =>{
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
