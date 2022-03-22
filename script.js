const buttonListener = document.querySelectorAll('.time');
const time = document.querySelectorAll('.daily-time');
const prevTime = document.querySelectorAll('.daily-prev-time');
const body = document.querySelector("body");

let activeButton = 0;

buttonListener.forEach((item, i) => {
	item.addEventListener('click', function() {
		buttonListener[activeButton].classList.remove("active");
		item.classList.add("active");
		activeButton = i;

		if(item.innerHTML == "Daily") {
			time.forEach((elem, i) => {
				elem.innerHTML = "5hrs"
			});

			prevTime.forEach((elem2, i) => {
				elem2.innerHTML = "Last Week - 7hrs"
			})

		} else if(item.innerHTML == "Weekly") {
			time.forEach((elem, i) => {
				elem.innerHTML = "30hrs"
			});


			prevTime.forEach((elem2, i) => {
				elem2.innerHTML = "Last Week - 28hrs"
			});

		} else {

			time.forEach((elem, i) => {
				elem.innerHTML = "75hrs"
			});


			prevTime.forEach((elem2, i) => {
				elem2.innerHTML = "Last Week - 72hrs"
			});
			
		}
	})
})

const arr = [
  {
    "title": "Work",
    "timeframes": {
      "daily": {
        "current": 5,
        "previous": 7
      },
      "weekly": {
        "current": 32,
        "previous": 36
      },
      "monthly": {
        "current": 103,
        "previous": 128
      }
    }
  },
  {
    "title": "Play",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 2
      },
      "weekly": {
        "current": 10,
        "previous": 8
      },
      "monthly": {
        "current": 23,
        "previous": 29
      }
    }
  },
  {
    "title": "Study",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 7
      },
      "monthly": {
        "current": 13,
        "previous": 19
      }
    }
  },
  {
    "title": "Exercise",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 1
      },
      "weekly": {
        "current": 4,
        "previous": 5
      },
      "monthly": {
        "current": 11,
        "previous": 18
      }
    }
  },
  {
    "title": "Social",
    "timeframes": {
      "daily": {
        "current": 1,
        "previous": 3
      },
      "weekly": {
        "current": 5,
        "previous": 10
      },
      "monthly": {
        "current": 21,
        "previous": 23
      }
    }
  },
  {
    "title": "Self Care",
    "timeframes": {
      "daily": {
        "current": 0,
        "previous": 1
      },
      "weekly": {
        "current": 2,
        "previous": 2
      },
      "monthly": {
        "current": 7,
        "previous": 11
      }
    }
  }
];

arr.forEach((item, i) => {
  const box = document.createElement("div");
  box.classList.add("box");

  const imageContainer = document.createElement("div")
  imageContainer.classList.add("image-container");
  imageContainer.classList.add("self-care");

  imageContainer.textContent = item.title;

  box.appendChild(imageContainer);
  body.appendChild(box);
});

{/* <div class="box">
          <div class="image-container self-care">
            <img class = "box-image" src="images/icon-self-care.svg">
          </div>

          <div class="box-text">
            <div class="heading">
              <p class="box-heading">Self Care</p>
              <hr>
            </div>
            
            <p class="daily-time">5hrs</p> 
            <p class="daily-prev-time">Last Week - 7hrs</p> 
          </div>
        </div> */}