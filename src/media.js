export const addCard = (img, headerText) => {
  const card = document.createElement("div");
  const image = document.createElement("img");
  image.setAttribute("src", img);
  image.classList.add("picture");
  const heading = document.createElement("h3");
  heading.innerHTML = headerText;
  heading.classList.add("heading");
  card.appendChild(image);
  card.appendChild(heading);
  card.classList.add("flex");
  return card;
};

export const addAudio = (src, headerText) => {
  const card = document.createElement("div");
  const audio = document.createElement("audio");
  audio.setAttribute("controls", "true");
  const source = document.createElement("source");
  source.setAttribute("src", src);
  source.setAttribute("type", "audio/mpeg");
  audio.classList.add("audio");
  audio.appendChild(source);
  const heading = document.createElement("h3");
  heading.innerHTML = headerText;
  heading.classList.add("heading");
  card.appendChild(audio);
  card.appendChild(heading);
  card.classList.add("flex");
  return card;
};

export const addVideo = (src, headerText) => {
  const card = document.createElement("div");
  const video = document.createElement("video");
  video.setAttribute("controls", "true");
  const source = document.createElement("source");
  source.setAttribute("src", src);
  source.setAttribute("type", "video/mp4");
  video.classList.add("audio");
  video.appendChild(source);
  const heading = document.createElement("h3");
  heading.innerHTML = headerText;
  heading.classList.add("heading");
  card.appendChild(video);
  card.appendChild(heading);
  card.classList.add("flex");
  return card;
};
