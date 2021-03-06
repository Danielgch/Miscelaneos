import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  template: `
    <p>
      usuario-detalle works!
    </p>
  `
})
export class UsuarioDetalleComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(parametros => {
      console.log("Ruta hija usuario detalle");
      console.log(parametros);
    })
  }

  ngOnInit() {
  }
}
