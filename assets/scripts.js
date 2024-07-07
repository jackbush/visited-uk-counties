var visitedCounties = ["Devon", "Somerset", "Surrey", "Middlesex", "Hampshire", "Shropshire", "Midlothian", "East Lothian", "Morayshire", "Inverness-shire", "Aberdeenshire", "Angus", "Lancashire", "Down", "Dorset", "Bedfordshire", "Berkshire", "Essex", "Kent", "Cambridgeshire", "Sussex", "West Lothian", "Perthshire", "Durham", "Suffolk", "Fife", "Yorkshire", "Derbyshire", "Oxfordshire", "Northumberland", "Lincolnshire", "Wiltshire", "Argyllshire", "Lanarkshire", "Ayrshire", "Dumfriesshire", "Westmorland", "Sutherland", "Cromartyshire", "Ross-shire", "Peeblesshire", "Banffshire", "Buteshire", "Peterborough", "Buckinghamshire", "Northamptonshire", "Cumberland", "Leicestershire", "Renfrewshire", "Herefordshire", "Gloucestershire", "Roxburghshire", "Brecknockshire", "Hertfordshire", "Glamorgan", "Monmouthshire", "Nairnshire", "Berwickshire", "Selkirkshire", "Cornwall", "Rutland"];
var totalCounties = 92;
var percentComplete = 0;
var interval = 80;

function attachMouseEvents() {
var elTextLabel = document.querySelector(".mouse-label");
var mapCounties = document.querySelectorAll(".county");

document.addEventListener("mousemove", (ev) => {
  elTextLabel.style.left = ev.clientX + "px";
  elTextLabel.style.top = ev.clientY - 40 + "px";
});

mapCounties.forEach((el) => {
  el.addEventListener("mouseover", (ev) => {
    elTextLabel.classList.add("shown");
    elTextLabel.innerText = ev.target.dataset.name;
  });

  el.addEventListener("mouseleave", (ev) => {
    elTextLabel.classList.remove("shown");
  });

  el.addEventListener('click', function(ev) {
    navigator.clipboard.writeText(ev.target.dataset.name);
  });
});
}

function updateCompletion() {
var elPercentComplete = document.querySelector(".js-percent-complete");
elPercentComplete.innerHTML = percentComplete;
}

function animateLoad() {
visitedCounties.forEach((county, idx) => {
  setTimeout(function () {
    document
      .querySelector("[data-name='" + county + "']")
      .classList
      .add('county--visited');
    percentComplete = Math.floor(100*(idx+1)/totalCounties);
    updateCompletion(percentComplete);
  }, idx * interval);
})

setTimeout(() => {
  attachMouseEvents()
}, visitedCounties.length * interval)
}

document.addEventListener("ready", animateLoad());