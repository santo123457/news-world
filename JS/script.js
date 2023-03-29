let loadCategory = async ()=>{
 let res = await fetch("https://openapi.programming-hero.com/api/news/categories");
 let data = await res.json();
 displayCategory(data.data.news_category);
}

let displayCategory = (data)=>{
 let categoriesContainer = document.getElementById("categories-container");
 data.map((category) => {
   let categoryDiv = document.createElement('div');
   categoryDiv.innerHTML = `
    <button type="button" onclick=loadCategoryDetails(${category.category_id}) class="me-4 btn btn-outline-info">${category.category_name}</button>
    `;
    categoriesContainer.appendChild(categoryDiv)
 })
}
let loadCategoryDetails = async(category_id)=>{
   let res = await fetch(`https://openapi.programming-hero.com/api/news/category/0${category_id}`);
 let data = await res.json();
 displayCategoryDetails(data);
 
}

let displayCategoryDetails= (data)=>{
   let categoriesItem = document.getElementById("categories-item");
   let CardContainer = document.getElementById("card-container");
 CardContainer.textContent = ' '

   categoriesItem.innerHTML=`
   <div class="bg-white m-auto mt-3 p-3 rounded-2" style="width: 87%;">
        ${data.data.length} items found for this category 
      </div>
   `

  if (data.data.length>0) {

   data.data.map((element)=>{
   let myCard = document.createElement("div");
   myCard.classList.add('my-Card');
   myCard.innerHTML =
   `
   <div class="row bg-white">
  <div class="col-md-3">
    <img
      src=${element.thumbnail_url
      }
      style="width: 245px; height: 300px"
      class="p-3 rounded-5"
      alt=""
      srcset=""
    />
  </div>
  <div class="col-md-9 mt-5">
    <h4 class="fw-bold">
    ${element.title}
    </h4>
    <p class="text-secondary">
    ${element.details}
    </p>
    
    <div class="row align-self-baseline">
      <div class="row col-md-3 ">
        <div class="col-md-4 d-flex align-items-center">
          <img
            src=${element.author.img}
            class="rounded-circle"
            style="height: 40px; width: 40px"
            alt=""
          />
        </div>
        <div class="col-md-8 "> 
          <small class="fw-bold">${element.author.name}</small>
          <small class="pt-0 mt-0">${element.author.published_date}</small>
        </div>
      </div>
      <div class="views col-md-3 text-secondary fw-bold d-flex align-items-center justify-content-center"> 
        <i class="fa-regular fa-eye fa-lg"></i>
      <span style="padding-left: 5px;">
      ${element.total_view}
      </span>
      </div>
      <div class="ratings col-md-3 text-secondary d-flex align-items-center">
        <i class="fa-solid fa-star-half-stroke fa-lg me-2"></i>
        <i class="fa-sharp fa-regular fa-star fa-lg me-2"></i>
        <i class="fa-sharp fa-regular fa-star fa-lg me-2"></i>
        <i class="fa-sharp fa-regular fa-star fa-lg me-2"></i>
        <i class="fa-sharp fa-regular fa-star fa-lg"></i>
      </div>
      <div class="view-more col-md-3 d-flex justify-content-end align-items-center">
        <i class="fa-solid fa-arrow-right fa-lg" style="color: #5d5fef;"></i>
    </div>
  </div>
</div>
   `
   
   CardContainer.appendChild(myCard)
})
  } else {
   CardContainer.textContent = 'No Data Found'
  }
}
loadCategory();