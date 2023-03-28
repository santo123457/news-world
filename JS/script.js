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
   //  console.log(category)
    categoriesContainer.appendChild(categoryDiv)
 })
}
let loadCategoryDetails = async(category_id)=>{
   console.log();
   let res = await fetch(`https://openapi.programming-hero.com/api/news/category/0${category_id}`);
 let data = await res.json();
 displayCategoryDetails(data);
 
}

let displayCategoryDetails= (data)=>{
   let categoriesItem = document.getElementById("categories-item");
   categoriesItem.innerHTML=`
   <div class="bg-white m-auto mt-3 p-3 rounded-2" style="width: 87%;">
        ${data.data.length} items found for this category 
      </div>
   `
console.log(data);


}
loadCategory();