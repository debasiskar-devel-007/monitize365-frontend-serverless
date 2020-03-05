import { Component, OnInit, HostListener, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,} from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface DialogData {}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  windowScrolled: boolean;

  constructor(public router: Router,public dialog: MatDialog ) { }


  ngOnInit() {
  }

  @HostListener("window:scroll", [])

  onWindowScroll() {
      if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100) {
          this.windowScrolled = true;
      }
      else if (this.windowScrolled && window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop < 10) {
          this.windowScrolled = false;
      }
  }

  scrollToTop() {
    (function smoothscroll() {

        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

        if (currentScroll > 0) {
            window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 8));
        }

    })();
  }

  
  // Commingsoondialog(): void {
  //   const dialogRef = this.dialog.open(comingSoonDialogfooter, {
     
  //     // data: {name: this.name}
  //   });

  //   setTimeout(() => {
  //     this.dialog.closeAll();
  //   }, 4000);
  // }

}



// @Component({
//   selector: 'coming',
//   templateUrl: '../coming-soon.html'
// })
// export class comingSoonDialogfooter {

//   constructor(
//     public dialogRef: MatDialogRef<comingSoonDialogfooter>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }

// }