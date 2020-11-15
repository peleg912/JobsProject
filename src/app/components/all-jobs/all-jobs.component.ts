import { JobResponse } from './../../models/job-response';
import { JobsService } from './../../services/jobs.service';
import { Component, OnInit } from '@angular/core';
import { Job } from 'src/app/models/job';

@Component({
  selector: 'app-all-jobs',
  templateUrl: './all-jobs.component.html',
  styleUrls: ['./all-jobs.component.css']
})
export class AllJobsComponent implements OnInit {

  jobs: JobResponse[];

  constructor(private service: JobsService) { }

  ngOnInit(): void {

    this.service.getJobs(new Job("cashier", 20, 35, "us", "33.9526", "33.9526", "33.9526", "33.9526", 1)).subscribe(
      (jobsRes)=>{this.jobs = jobsRes},
      (error)=>{console.log(error.error)}
    );
  }


}
