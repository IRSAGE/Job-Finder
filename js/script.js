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

function showJobs(jobs) {}
