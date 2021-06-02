import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  data = [
    {
      title: 'Recently Played',
      albums: recentlyPlayed
    },
    {
      title: 'Heavy Rotation',
      albums: heavyRotation
    },
    {
      title: 'Jump Back In',
      albums: jumpBackIn
    },
  ];

  opts = {
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    spaceBetween: 20,
    freeMode: true
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAlbum(album) {
    const titleEscaped = encodeURI(album.title);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }

  dasherize(string) {
    return string.replace(/[A-Z]/g, function(char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  };

}
