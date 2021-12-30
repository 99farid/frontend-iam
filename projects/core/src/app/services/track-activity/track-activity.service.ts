import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FindAllResTrackActivityDto } from '../../dto/track-activity/find-all-res-track-activity-dto';
import { FindByIdResTrackActivityDto } from '../../dto/track-activity/find-by-id-res-track-activity-dto';

@Injectable({
  providedIn: 'root'
})
export class TrackActivityService {

  constructor(private http: HttpClient) { }

  findAllTrack(): Observable<FindAllResTrackActivityDto> {
    return this.http.get<FindAllResTrackActivityDto>('http://localhost:8080/track-activities')
  }

  findByIdTrack(id: string | null): Observable<FindByIdResTrackActivityDto> {
    return this.http.get<FindByIdResTrackActivityDto>(`http://localhost:8080/track-activities/${id}`)
  }
}
