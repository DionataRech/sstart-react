import { useState } from "react";
import ButtonDefault from "../components/ButtonDefault";
import ListCategories from "../components/ListCategories";

function Categorias() {
  const [categories, setCategories] = useState<string>("");
  const [listCategories, setListCategories] = useState<string[]>([]);

  function handleClick() {
    if (categories.length) {
      setListCategories([...listCategories, categories]);
      setCategories("");
    }
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Categories</h1>
        <label htmlFor="categoryes">Category</label>
        <input
          type="text"
          name="category"
          value={categories}
          onChange={(e) => setCategories(e.target.value)}
        />

        <ButtonDefault label="Enviar Categorias" action={handleClick} />
      </div>

      <div>
        <ListCategories categories={listCategories} />
      </div>
    </>
  );
}

export default Categorias;
