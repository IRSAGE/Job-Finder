document.querySelector(".button-container").addEventListener("click", () => {
  let text = document.getElementById("filter-jobs").value;
  console.log(text);
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
        job.roleName.tolowerCase().includes(searchText) ||
        job.type.tolowerCase().includes(searchText) ||
        job.company.tolowerCase().includes(searchText) ||
        job.requirements.content.tolowerCase().includes(searchText)
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
