import React from "react"


export default function Main() {

    const [ingredients,setIngredients] = React.useState(["Chicken", "Oregano", "Tomatoes"]);
    const ingredientItems = ingredients.map((item) => {
        return(
            <li key = {item}>{item}</li>
        )
    })

    function addIngredient(formData) {
        
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
    }


    return (
        <main>
            <form action = {addIngredient} className = "add-ingredient">
                <input name="ingredient" placeholder="e.g. oregano"></input>
                <button>+ Add Ingredient</button>
            </form>

            <section className = "list-container">
                <h2>Ingredients on hand:</h2>
                <ul>
                    {ingredientItems}
                </ul>
                <div className = "get-recipe-container">
                    <div className = "info-get-recipe">
                        <h3>Ready for a Recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button>Get a Recipe</button>

                </div>
            </section>
            

        </main>



    )
}