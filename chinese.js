fetch("./chinese.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);
    result.forEach(function (item, index) {
	
      const card = document.getElementById("Chinese");
      const imgTag = document.createElement("img");

      const divTag2 = document.createElement("div");
      const divTag3 = document.createElement("div");
      const divTag4 = document.createElement("div");
      const name = document.createElement("h5");
      
      const description = document.createElement("p");
      const materials = document.createElement("p");
      imgTag.classList.add("card-img-top");
      card.classList.add("row");
      card.classList.add("row-cols-1");
      card.classList.add("row-cols-md-3");
      card.classList.add("g-4");
      card.classList.add("card-group");
      divTag2.classList.add("col");
      divTag3.classList.add("card");
      divTag3.classList.add("h-100");

      divTag4.classList.add("card-body");
      name.classList.add("card-title");
      description.classList.add("card-text");
      materials.classList.add("card-text");
      imgTag.src = item.imgUrl;
      name.innerText = item.name;
      description.innerText = item.description;
      materials.innerText = item.materials;
      divTag4.appendChild(name);
      divTag4.appendChild(description);
      divTag4.appendChild(materials);
      divTag3.appendChild(imgTag);
      divTag3.appendChild(divTag4);
      divTag2.appendChild(divTag3);
      card.appendChild(divTag2);
	  
    });
  })
  .catch(function (error) {
    console.log(error);
  });

