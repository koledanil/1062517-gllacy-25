
  var link = document.querySelector(".feedback-js");
  var feedback = document.querySelector(".modal-feedback");
  var close = feedback.querySelector(".close-modal");
  var uname = feedback.querySelector("[name=feedback-username]");
  var form = feedback.querySelector("form");
  var email = feedback.querySelector("[name=feedback-email]");
  var overlay = document.querySelector(".overlay");


  var isStorageSupport = true;
  var storage = "";

  try {
    storage = localStorage.getItem("uname");
  } catch (err) {
    isStorageSupport = false;
  }
  overlay.addEventListener("click", function(evt) {
    feedback.classList.remove("modal-error");
    feedback.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
    document.body.style.overflow='auto';
  });

  link.addEventListener("click", function (evt) {
    evt.preventDefault ();
    feedback.classList.add("modal-show");
    overlay.classList.add("overlay-show");
    document.body.style.overflow='hidden';


    if (storage) {
      uname.value = storage;
      email.focus();
    } else {
      uname.focus();
    }
  });

  close.addEventListener("click", function (evt) {
    evt.preventDefault ();
    feedback.classList.remove("modal-error");
    feedback.classList.remove("modal-show");
    overlay.classList.remove("overlay-show");
    document.body.style.overflow='auto';
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (feedback.classList.contains("modal-show")) {
        feedback.classList.remove("modal-show");
        overlay.classList.remove("overlay-show");
        document.body.style.overflow='auto';
      }
    }
  });

  form.addEventListener("submit", function (evt) {
    if (!email.value || !uname.value) {
        evt.preventDefault();
        feedback.classList.remove("modal-error");
        feedback.offsetWidth = feedback.offsetWidth;
        feedback.classList.add("modal-error");
      } else {
        if (isStorageSupport) {
          localStorage.setItem("uname", uname.value);
        }
      }
    });



    var map;
    function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: -34.397, lng: 150.644},
        zoom: 8
      });
    }

    function initMap() {
           var map = new google.maps.Map(document.getElementById('map'), {
             zoom: 17,
             center: {lat: 59.938867, lng: 30.322962},
             zoomControl: false,
         scaleControl: true,
           });

           var image = '/Users/irw/Documents/GitHub/1062517-gllacy-25/img/icon-pin-map.png';
           var beachMarker = new google.maps.Marker({
             position: {lat: 59.938867, lng: 30.322962},
             map: map,
             animation: google.maps.Animation.DROP,
             icon: image
           });
           marker.addListener('click', toggleBounce);
         }
         function toggleBounce() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
