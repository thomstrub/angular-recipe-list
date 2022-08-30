import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    collapsed = true;
    @Output() currentPage = new EventEmitter<string>();

    onClick = (page:string) => {
        
    }

}