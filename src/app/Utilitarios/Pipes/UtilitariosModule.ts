import { NgModule } from "@angular/core";
import { AEspacioPipe} from "./Aespacio.pipe";
import { CalificacionComponent } from "../Componentes/Calificacion/Calificacion.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations:[
        AEspacioPipe,
        CalificacionComponent],

    imports:[
        CommonModule
    ],
    exports:[
        AEspacioPipe,
        CalificacionComponent
    ]
})

export class UtilitariosModule{

}