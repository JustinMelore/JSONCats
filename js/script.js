//The input for the cats
let cats = `{
   "title": "Cat Families",
   "intro": "This is a list of cats and their mother that we are breeding. If you are interested in adopting please contact us",
   "cats": [
     {
       "name": "Lindy",
       "breed": "Cymric",
       "color": "white",
       "kittens": [
         {
           "name": "Percy",
           "gender": "m"
         },
         {
           "name": "Thea",
           "gender": "f"
         },
         {
           "name": "Annis",
           "gender": "f"
         }
       ]
     },
     {
       "name": "Mina",
       "breed": "Aphrodite Giant",
       "color": "ginger",
       "kittens": [
         {
           "name": "Doris",
           "gender": "f"
         },
         {
           "name": "Pickle",
           "gender": "f"
         },
         {
           "name": "Max",
           "gender": "m"
         }
       ]
     },
     {
       "name": "Antonia",
       "breed": "Ocicat",
       "color": "leopard spotted",
       "kittens": [
         {
           "name": "Bridget",
           "gender": "f"
         },
         {
           "name": "Randolph",
           "gender": "m"
         }
       ]
     }
   ]
}`
cats = JSON.parse(cats);

//Creates the initial header and subheader for the page
const header = document.createElement("h1");
header.textContent = cats.title;
document.body.appendChild(header);
const subheader = document.createElement("h2");
subheader.textContent = cats.intro;
document.body.appendChild(subheader);

//Function that creates the individual section for a cat
const createCat = (cat, status) => {
  const profile = document.createElement("div");
  profile.classList.add(status);
  const image = document.createElement("img");
  image.setAttribute("src","images/cat.svg");
  profile.appendChild(image);
  for(let i of Object.keys(cat)) {
    const info = document.createElement("p");
    if(i != "kittens") {
      info.textContent = `${i.toUpperCase()} : ${cat[i]}`;
      profile.appendChild(info);
    }
  }
  return profile;
}

//Creates the display for the cat families
const catList = cats.cats;
for(let i in catList) {
  //Creates the div to store the cats
  let family = document.createElement("div");
  family.classList.add("family");
  
  //Creates the mother's profile
  family.appendChild(createCat(catList[i], "mother"));

  //Creates the profiles for the mother's kittens
  let seperator = document.createElement("h3");
  seperator.textContent = "KITTENS";
  family.appendChild(seperator);

  let kittens = document.createElement("div");
  kittens.classList.add("kittens");
  let kittenList = catList[i]["kittens"];
  for(let i in kittenList) kittens.appendChild(createCat(kittenList[i], "kitten"));
  family.appendChild(kittens);

  document.body.appendChild(family);
}