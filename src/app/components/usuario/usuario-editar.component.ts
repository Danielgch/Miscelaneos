import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-editar',
  template: `
    <p>
      usuario-editar works!
    </p>
  `,
  styles: []
})
export class UsuarioEditarComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.params.subscribe(parametros => {
      console.log("Ruta hija usuario editar");
      console.log(parametros);
    })
  }
  ngOnInit() {
  }

}
