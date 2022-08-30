import { Component } from "@angular/core";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html'
})

export class LayoutComponent {
    currentPage = 'recipes';
    onPageEvent(eventData: string) {
        switch(eventData){
            case 'recipes':
                this.currentPage = 'recipes';
                break;
            case 'shopping':
                this.currentPage = 'shopping';
                break;
            default:
                throw new Error('Navigation Error.');
        }
       console.log(this.currentPage);
    }
    
}