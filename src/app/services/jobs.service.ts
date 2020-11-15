import { JobResponse } from './../models/job-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private client: HttpClient) { }


  getJobs(job: Job){
    return this.client.post<JobResponse[]>("https://us-central1-better-roi.cloudfunctions.net/job-search", job);
  }
}
