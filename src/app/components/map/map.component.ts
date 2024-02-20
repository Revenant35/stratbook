import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  maps = [
    { name: 'Dust II', image: 'assets/de_dust2_radar.jpg', playableAreas: [] },
    { name: 'Mirage', image: 'assets/de_mirage_radar.jpg', playableAreas: [] },
    {
      name: 'Inferno',
      image: 'assets/de_inferno_radar.jpg',
      playableAreas: [],
    },
    { name: 'Nuke', image: 'assets/de_nuke_radar.jpg', playableAreas: [] },
    {
      name: 'Overpass',
      image: 'assets/de_overpass_radar.jpg',
      playableAreas: [],
    },
    { name: 'Train', image: 'assets/de_train_radar.jpg', playableAreas: [] },
    // { name: 'Vertigo', image: 'assets/de_vertigo_radar.jpg', playableAreas: []},
    { name: 'Cache', image: 'assets/de_cache_radar.jpg', playableAreas: [] },
  ];

  selectedMap: any = this.maps[0]; // Default selection

  // Function to change selected map
  selectMap(mapName: EventTarget | null) {
    if (mapName && 'value' in mapName) {
      this.selectedMap = this.maps.find((map) => map.name === mapName.value);
    }
  }
}
