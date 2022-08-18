const photos = [
  "https://images.freeimages.com/images/large-previews/4ba/healthy-food-1327899.jpg", //0

  "https://cdn.pixabay.com/photo/2020/06/05/01/28/compass-5261062__340.jpg", //1

  "https://images.freeimages.com/images/large-previews/4ba/healthy-food-1327899.jpg", //2

  "https://cdn.pixabay.com/photo/2020/06/05/01/28/compass-5261062__340.jpg", //3

  "https://images.freeimages.com/images/large-previews/4ba/healthy-food-1327899.jpg"
  //4
];





let slide;
let btn1;
let btn2;

window.onload = () => {
  slide = document.getElementById("slide");
  btn1 = document.getElementById("btn1");
  btn2 = document.getElementById("btn2");

  console.log(slide)
  //set width and height of slides
  slide.style.width = "350px";
  slide.style.height = "250px";

  //set current index
  let i = 0;

  //set slide src to current index
  slide.src = photos[i];


btn2.onclick = () => {
  //when btn2 is clicked
  i++;
  //add 1 to current index
  if (i > photos.length - 1) {
    //if current index passes last photo in array
    i = 0;
    //set index back to zero
  }
  slide.src = photos[i];
  //set slide to current index
};


btn1.onclick = () => {
  //when btn1 is clicked
  i--;
  //minus 1 from current index
  if (i < 0) {
    //if current index goes below zero
    i = photos.length - 1;
    //set index to the last photo in array
  }
  slide.src = photos[i];
  //display current photo to #slide
};

btn1.addEventListener("click", () => {
  slide.classList.add("transition");
});
//when btn1 is clicked add transition class to slide
btn1.addEventListener("mouseup", () => {
  slide.classList.remove("transition");
});
//when btn1 is clicked remove transition class from slide
btn2.addEventListener("click", () => {
  slide.classList.add("transition");
});
//when btn2 is clicked add transition class to slide
btn2.addEventListener("mouseup", () => {
  slide.classList.remove("transition");
});
  //when btn2 is clicked remove transition class from slide

}