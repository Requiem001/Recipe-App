import React from "react"
import AiRecipe from "./AiRecipe"
import IngredientsList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai";
export default function Main() {

    const [recipe, setRecipe] = React.useState("");
    const [ingredients,setIngredients] = React.useState([]);
    

    function addIngredient(formData) {
        
        const newIngredient = formData.get("ingredient")
        setIngredients((prevIngredients) => [...prevIngredients, newIngredient])
    }

    async function handleGetRequest() {
        const rec = await getRecipeFromMistral(ingredients)
        setRecipe(rec)
        
    }


    return (
        <main>
            <form action = {addIngredient} className = "add-ingredient">
                <input name="ingredient" placeholder="e.g. oregano"></input>
                <button>+ Add Ingredient</button>
            </form>

            <IngredientsList ingredients = {ingredients}  toggle = {handleGetRequest}/>

        {recipe && <AiRecipe recipe = {recipe}/>}
        </main>



    )
}