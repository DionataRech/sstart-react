import Products from "../pages/Products";

interface ListCategoriesProps {
  categories: string[];
}

function ListCategories({ categories }: ListCategoriesProps) {
  return (
    <div style={{ marginTop: "20px" }}>
      {categories.map((item) => (
        <h2 key={item}> Categoria : {item}</h2>
      ))}
    </div>
  );
}

export default ListCategories;
