import axios from "axios";
import { useEffect, useState } from "react";

export function FilterBar (){
  const [categories, updateCategories] = useState([]);

  useEffect(() => {
    //changed the url by moving the json to the public folder
    axios.get("products.json")
      .then(response => {
        console.log(response.data);
        updateCategories(response.data.categories);
      })
      .catch(error => console.log(error));
  }, []);
  console.log({categories})

  return <div className={"hidden w-[40vw] md:block"}>
    <header className="flex justify-between my-3 mt-7 px-4">
      <h1 className="font-extrabold inline">Product Categories</h1>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-6 hover:cursor-pointer" fill="none" viewBox="0 0 24 24" 
      strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
      </svg>
    </header>

    {categories.map(category => {
      return (
        <div key={category.id} className="flex mx-4 my-3 gap-4">
          <input type="checkbox" className="lg:w-8" name={category.name} id={category.id} />
          <h2 className="font-normal text-sm">{category.name}</h2>
        </div>
      );
    })}
  </div>
}
