import { DOCUMENT } from '@angular/common';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { environment } from '@environment/environment';
import { Friend } from '@features/friends/models/friend';
import { Loader } from '@googlemaps/js-api-loader';
import { MarkerClusterer } from '@googlemaps/markerclusterer';

@Component({
  selector: 'app-friend-map',
  templateUrl: './friend-map.component.html',
  styleUrls: ['./friend-map.component.scss'],
})
export class FriendMapComponent implements OnInit {
  private _friends: Friend[] = [];
  private mapDivElement: HTMLElement | null = null;
  private mapLoader: Loader;
  private map: google.maps.Map | null = null;
  private markers: google.maps.Marker[] = [];
  private markerCluster: MarkerClusterer | null = null

  @Input() set friends(value: Friend[]) {
    this._friends = value;
    this.resetMap()
    this.loadMap();
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.mapLoader = new Loader({
      apiKey: environment.googleApiKey,
    });
  }

  async ngOnInit() {
    await this.mapLoader.load();

    this.mapDivElement = this.document.getElementById('googlemap');
    if (this.mapDivElement) {
      this.map = new google.maps.Map(this.mapDivElement, {
        center: { lat: 48.13743, lng: 11.57549 },
        zoom: 2,
      });
    }

    this.loadMap();
  }

  private loadMap() {
    if (!this.map) return;

    const infoWindow = new google.maps.InfoWindow({
      content: '',
      disableAutoPan: true,
    });

    this.markers = []

    this.markers = this._friends.map((friend) => {
      return this.getFriendMarker(infoWindow, friend);
    });

    this.setMapOnAllMarkers(this.map)
    if (this.markers) {
      this.markerCluster = new MarkerClusterer({ markers: this.markers, map: this.map });
    }
  }

  private resetMap() {
    this.setMapOnAllMarkers(null) // reset markers
    this.markerCluster?.clearMarkers()
  }

  private setMapOnAllMarkers(map: google.maps.Map | null) {
    this.markers.forEach((marker) => {
      marker.setMap(map);
    });
  }

  private getFriendMarker(
    infoWindow: google.maps.InfoWindow,
    friend: Friend
  ): google.maps.Marker {
    const content = `
    ${friend.firstName} ${friend.lastName}<br>
    ${friend.jobTitle} at ${friend.company}<br>
    Phone: ${friend.phone}
    `
    const marker = new google.maps.Marker({
      position: friend.location,
      label: (friend.firstName[0] + friend.lastName[0]).toUpperCase(),
    });

    marker.addListener('click', () => {
      infoWindow.setContent(content);
      infoWindow.open(this.map, marker);
    });

    return marker;
  }

}
