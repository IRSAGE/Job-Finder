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
