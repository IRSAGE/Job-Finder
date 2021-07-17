document.querySelector(".button-container").addEventListener("click", () => {
  let text = document.getElementById("filter-jobs").value;

  getJobs().then((jobs) => {
    let filteredJobs = filterJobs(jobs, text);
    showJobs(filteredJobs);
  });
});

function getJobs() {
  return fetch("data.json")
    .then((Response) => Response.json())
    .then((data) => {
      return data;
    });
}

getJobs().then((data) => {
  showJobs(data);
});

function showJobs(jobs) {
  let jobContainer = document.querySelector(".jobs-container");
  let jobsHtml = "";

  jobs.forEach((job) => {
    jobsHtml += `
        <div class="job-tile">
                <div class="top">
                    <img src="${job.logo}" alt="tile-image">
                    <span class="material-icons more_horiz">more_horiz</span>
                </div>
                <div class="rolename">
                    <span>${job.roleName}</span>
                </div>
                <div class="description">
                    <span>${job.requirements.content}</span>
                </div>
                <div class="buttons">
                    <div class="button apply-now">
                        Apply Now
                    </div>
                    <div class="button">
                        Message
                    </div>
                </div>
            </div>
        `;
  });
  jobContainer.innerHTML = jobsHtml;
}

function filterJobs(jobs, searchText) {
  if (searchText) {
    let filteredJobs = jobs.filter((job) => {
      if (
        job.roleName.toLowerCase().includes(searchText) ||
        job.type.toLowerCase().includes(searchText) ||
        job.company.toLowerCase().includes(searchText) ||
        job.requirements.content.toLowerCase().includes(searchText)
      ) {
        return true;
      } else {
        return false;
      }
    });
    return filteredJobs;
  } else {
    return jobs;
  }
}
