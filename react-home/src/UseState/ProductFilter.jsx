// import React, { useState } from "react";

// const Products = [
//     {id: 1, name: "TV", category: "Electronics"},
//     {id: 2, name: "Gens", category: "clothing"},
//     {id: 3, name: "Laptop", category: "Electronics"},
//     {id: 4, name: "T-Shirt", category: "clothing"},
// ];

// // Get All productrs with select Option
// const ProductFilter = ({ category, setCategory}) => {
 
//     return (
//         <div>
//            <select value={category} onChange={(e) => setCategory(e.target.value)}>
//             <option value="all">All</option>
//             <option value="Electronics">Electronics</option>
//             <option value="clothing">Clothing</option>
//            </select>
//         </div>
//     );
// }

// const ProductList = ({ category }) => {{
//     const filtred  = category === "all" ? Products :
//         Products.filter((p) => p.category === category);
//     };

//     return (
//         <div>
//             <ul>
//                 {filtred.map((p) => (
//                     <li key={p.id}>{p.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }


// const ProductsName = () => {
//      const [category, setCategory] = useState("all");

//      return (
//         <>
//            <ProductList category={category} />
//           <ProductFilter category={category} setCategory={setCategory}/>
//         </>
//      );
// }

// export default ProductsName;
import React, { useState } from "react";

const Products = [
  { id: 1, name: "TV", category: "Electronics" },
  { id: 2, name: "Gens", category: "clothing" },
  { id: 3, name: "Laptop", category: "Electronics" },
  { id: 4, name: "T-Shirt", category: "clothing" },
];

// Select dropdown component
const ProductFilter = ({ category, setCategory }) => {
  return (
    <div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Electronics">Electronics</option>
        <option value="clothing">Clothing</option>
      </select>
    </div>
  );
};

// List of products
const ProductList = ({ category }) => {
  const filtered = category === "all"
    ? Products
    : Products.filter((p) => p.category === category);

  return (
    <div>
      <ul>
        {filtered.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
    </div>
  );
};

// Main component
const ProductsName = () => {
  const [category, setCategory] = useState("all");

  return (
    <>
      <ProductFilter category={category} setCategory={setCategory} />
      <ProductList category={category} />
    </>
  );
};

export default ProductsName;
