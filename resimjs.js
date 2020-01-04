var resimler = new Array(
  "https://i.picsum.photos/id/120/600/320.jpg",
  "https://i.picsum.photos/id/121/600/320.jpg",
  "https://i.picsum.photos/id/122/600/320.jpg",
  "https://i.picsum.photos/id/123/600/320.jpg",
  "https://i.picsum.photos/id/124/600/320.jpg",
  "https://i.picsum.photos/id/125/600/320.jpg",
  "https://i.picsum.photos/id/126/600/320.jpg",
  "https://i.picsum.photos/id/127/600/320.jpg",
  "https://i.picsum.photos/id/128/600/320.jpg",
  "https://i.picsum.photos/id/129/600/320.jpg",
  "https://i.picsum.photos/id/130/600/320.jpg",
  "https://i.picsum.photos/id/131/600/320.jpg",
  "https://i.picsum.photos/id/132/600/320.jpg",
  "https://i.picsum.photos/id/133/600/320.jpg",
  "https://i.picsum.photos/id/134/600/320.jpg",
  "https://i.picsum.photos/id/135/600/320.jpg",
  "https://i.picsum.photos/id/136/600/320.jpg",
);

function resimDegistir(id){
  var resim = document.getElementById("resim");
  resim.src=resimler[id];
}
