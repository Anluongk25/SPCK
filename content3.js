fetch("./content3.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (result) {
    console.log(result);
    result.forEach(function (item, index) {
      //     <div id="content" class="card mb-3">
      //     <img src="..." class="card-img-top" alt="...">
      //     <div class="card-body">
      //       <h5 class="card-title">Card title</h5>
      //       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      //       <p class="card-text"></p>
      //       <p class="card-text"></p>

      //     </div>
      //   </div>
      const content = document.getElementById("content");
      const imgTag = document.createElement("img");
      const divTag = document.createElement("div");
      const content1 = document.createElement("p");
      const title1 = document.createElement("h6");
      const content2 = document.createElement("p");
      const content3 = document.createElement("p");
      const content4 = document.createElement("p");
      const content5 = document.createElement("p");
      const content6 = document.createElement("p");
      const title2 = document.createElement("h6");
      const name = document.createElement("h5");
      content.classList.add("card");
      content.classList.add("mb-3");
      imgTag.classList.add("card-img-top");
      divTag.classList.add("card-body");
      content1.classList.add("card-text");
      
      content2.classList.add("card-text");
      content3.classList.add("card-text");
      content4.classList.add("card-text");
      content5.classList.add("card-text");
      content6.classList.add("card-text");
      
      name.classList.add("card-title");
      imgTag.src = item.imgUrl;
      name.innerText = item.name;
      title1.innerText = item.title1
      content1.innerText = item.content1;
      content2.innerText = item.content2;
      title2.innerText = item.title2;
      content3.innerText = item.content3;
      content4.innerText = item.content4;
      content5.innerText = item.content5;
      content6.innerText = item.content6;
      divTag.appendChild(name);
      divTag.appendChild(title1);
      divTag.appendChild(content1);
      divTag.appendChild(content2);
      divTag.appendChild(title2);
      divTag.appendChild(content3);
      divTag.appendChild(content4);
      divTag.appendChild(content5);
      divTag.appendChild(content6);
      content.appendChild(divTag);
      content.appendChild(imgTag);
    });
  })
  .catch(function (error) {
    console.log(error);
  });