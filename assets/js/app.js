document.getElementById("music").addEventListener("mouseover", musicOver);
document.getElementById("music").addEventListener("mouseout", musicOut);

function musicOver() {
  document.getElementById("body").classList.add('music_bg')
}

function musicOut() {
    document.getElementById("body").classList.remove('music_bg');
}

document.getElementById("video").addEventListener("mouseover", videoOver);
document.getElementById("video").addEventListener("mouseout", videoOut);

function videoOver() {
  document.getElementById("body").classList.add('video_bg')
}

function videoOut() {
    document.getElementById("body").classList.remove('video_bg');
}

document.getElementById("tour").addEventListener("mouseover", tourOver);
document.getElementById("tour").addEventListener("mouseout", tourOut);

function tourOver() {
  document.getElementById("body").classList.add('tour_bg')
}

function tourOut() {
    document.getElementById("body").classList.remove('tour_bg');
}
document.getElementById("contact").addEventListener("mouseover", contactOver);
document.getElementById("contact").addEventListener("mouseout", contactOut);

function contactOver() {
  document.getElementById("body").classList.add('contact_bg')
}

function contactOut() {
    document.getElementById("body").classList.remove('contact_bg');
}