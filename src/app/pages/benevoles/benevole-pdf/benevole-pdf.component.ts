import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BenevolesService } from '../benevoles.service';
import { Observable } from 'rxjs';
import * as jsPdf from 'jspdf';
import * as html2canva from 'html2canvas';
import { PdfFontsService } from './pdf-fonts.service'

@Component({
  selector: 'app-benevole-pdf',
  templateUrl: './benevole-pdf.component.html',
  styleUrls: ['./benevole-pdf.component.scss']
})
export class BenevolePdfComponent implements OnInit {
  id;
  benevole$: Observable<any>;
  constructor(private route: ActivatedRoute, private _bs: BenevolesService, private jsPDFFontService: PdfFontsService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.id = id
    this.benevole$ = this._bs.getBenevole(id)
  }
  @ViewChild('content', { static: false }) content: ElementRef

  downloadPDF() {
    html2canva(this.content.nativeElement, {

    }).then((canvas) => {
      var getImage = canvas.toDataURL("image/png");
      var doc = new jsPdf({
        unit: 'pt',
        format: [442 , 355 ]
      });
      doc.addImage(getImage, 'JPEG',30, 40, 300, 280),
        doc.save('contrat.pdf')
      // console.log(getImage);
    })
    // const doc = new jsPdf();
    // doc.setFontSize(10);
    // doc.setTextColor(0, 0, 0); //black


    // Use constum font 
    // use this url https://www.base64encode.org/ and encode the font to Base64 and past the code inside font variable

    // var font =''; //put here the base64 Value of your font
    // var doc = new jsPdf();
    // doc.addFileToVFS("font.ttf", font);
    // doc.addFont('font.ttf', 'font ', 'normal');
    // doc.setFont('font '); // set font
    // doc.setFontSize(45);
    // doc.text("ééééçàèè test", 100, 100, {
    //   lang: 'ar'})
    // doc.save("test.pdf");
    }


  // let doc = new jsPdf();
  // var img = new Image();
  // var src = "https://www.jeffld.com/img/so/testimage001.png";
  // img.src = src;
  // let specialElementHandlers = {
  //   '#editor': function(element, renderer){
  //     return true;
  //   }
  // };

  // let content = this.content.nativeElement;

  // doc.addImage(img, "png", 80, 10, 50, 50);
  // doc.fromHTML(content.innerHTML, 15, 15,{
  //   'width':190,
  //   'elementHandler': specialElementHandlers
  // })

  // doc.save('test.pdf');


}
