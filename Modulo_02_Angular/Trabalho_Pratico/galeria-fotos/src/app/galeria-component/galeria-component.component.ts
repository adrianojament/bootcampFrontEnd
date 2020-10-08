import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

declare const M: any;
@Component({
  selector: 'app-galeria-component',
  templateUrl: './galeria-component.component.html',
  styleUrls: ['./galeria-component.component.css'],
})
export class GaleriaComponentComponent implements OnInit, AfterViewInit {
  IndexPhoto: number = 0;
  AnyPhoto: string = 'Nenhuma Foto';
  isFirstPhoto: boolean = false;
  isLastPhoto: boolean = false;
  private styleButtonDefault = 'waves-effect waves-light btn';
  private styleButtonDisable = 'waves-effect waves-light btn disabled';
  styleButtonFirstPrevious = '';
  styleButtonNextLast = '';
  @Input() titleGaleria: string = '';
  @Input() photosGaleria: string[];

  ngOnInit() {
    this.setButtons();
  }

  ngAfterViewInit() {
    var elems = this.getItemHTML();
    M.Carousel.init(elems, {
      fullWidth: false,
      indicators: false,
      duration: 100,
    });
    this.InitializeCarousel();
  }

  private InitializeCarousel() {
    let element = document.getElementById('crphotos');
    let carouselInstance = this.getCarousel();
    // Remove event listeners added by Materialize for corousel
    element.removeEventListener(
      'mousedown',
      carouselInstance._handleCarouselTapBound
    );
    element.removeEventListener(
      'mousemove',
      carouselInstance._handleCarouselDragBound
    );
    element.removeEventListener(
      'mouseup',
      carouselInstance._handleCarouselReleaseBound
    );
    element.removeEventListener(
      'mouseleave',
      carouselInstance._handleCarouselReleaseBound
    );
    element.removeEventListener(
      'click',
      carouselInstance._handleCarouselClickBound
    );
    carouselInstance.set(0);
    carouselInstance.next(0);
  }

  private getCarousel() {
    var elems = this.getItemHTML();
    var carousel = M.Carousel.getInstance(elems);
    return carousel;
  }

  private getItemHTML() {
    return document.querySelector('.carousel.carousel-slider');
  }

  NextPhoto() {
    this.IndexPhoto++;
    this.setImage();
  }

  private setImage() {
    let carouselInstance = this.getCarousel();
    carouselInstance.set(this.IndexPhoto);
    this.isFirstPhoto = this.IndexPhoto === 0;
    this.isLastPhoto = this.IndexPhoto === this.photosGaleria.length - 1;
    this.setButtons();
  }

  private setButtons() {
    this.styleButtonFirstPrevious = this.isFirstPhoto
      ? this.styleButtonDisable
      : this.styleButtonDefault;
    this.styleButtonNextLast = this.isLastPhoto
      ? this.styleButtonDisable
      : this.styleButtonDefault;
  }

  LastPhoto() {
    this.IndexPhoto = this.photosGaleria.length - 1;
    this.setImage();
  }

  PreviousPhoto() {
    this.IndexPhoto--;
    this.setImage();
  }

  FirstPhoto() {
    this.IndexPhoto = 0;
    this.setImage();
  }
}
