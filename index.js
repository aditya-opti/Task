var modal = document.getElementById("myModal");
var profileImage = document.querySelector(".modal-image");

var btn = document.getElementById("task-btn");

var close = document.getElementsByClassName("close")[0];
var closeSecond = document.getElementsByClassName("modal__submit-btn")[0];

btn.onclick = function () {
  modal.style.display = "flex";
};

close.onclick = function () {
  modal.style.display = "none";
};

closeSecond.onclick = function () {
  modal.style.display = "none";
};

var mobileScreen = window.innerWidth;

if (mobileScreen < 480) {
  profileImage.src = "https://i.postimg.cc/BQxBSZ4Q/Mask-Group.png";
} else {
  profileImage.src =
    "https://optiabtests.s3.eu-west-2.amazonaws.com/Training+assignments/MabPopUp.jpg";
}
