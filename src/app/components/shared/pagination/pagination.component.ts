import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() PaginaActual: number = 1;
  @Input() cantidadPaginas:number;
  Inicial: number = 1;
  radio: number = 2;
  cantidadMaximaDePaginas = this.radio * 2 + 1;
  @Input() RegistrosPorPagina:number=16;
  //@Input() TotalDeRegistros: number;
  Final:number;

  pages: number[] = [];

  @Input() page: Number;

  constructor() {
   
  }

  ngOnInit(): void {
    
    this.Final = (this.cantidadPaginas > this.cantidadMaximaDePaginas) ? this.cantidadMaximaDePaginas : this.cantidadPaginas; 
    this.pages = [];
    if (this.PaginaActual > (this.radio + 1)) {
      console.log('entrooo aquii');
      this.Inicial = this.PaginaActual - this.radio;
      if (this.cantidadPaginas > (Number(this.PaginaActual) + Number(this.radio))) {
        console.log('entrooo final');
        this.Final = Number(this.PaginaActual) + Number(this.radio);
      }
      else {
        this.Final = this.cantidadPaginas;
      }
    }

    // console.log(this.PaginaActual);
    // console.log(this.radio);
    // console.log(this.Inicial);
    // console.log(this.Final);
    // console.log(this.cantidadMaximaDePaginas);
    // console.log(this.cantidadPaginas);
    for (let index = this.Inicial ; index <= this.Final; index++) {
      this.pages.push(index);
    }
    console.log(this.pages);
    
    // this.pages.forEach(element => {
    //   console.log(element);
    // });
  }

}
