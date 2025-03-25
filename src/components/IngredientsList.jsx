export default function IngredientsList(props) {
    const ingredientItems = props.ingredients.map((item) => {
        return(
            <li key = {item}>{item}</li>
        )
    })
    return(
        <>
        {props.ingredients.length >0 &&<section className = "list-container">
                <h2>Ingredients on hand:</h2>
                <ul>
                    {ingredientItems}
                </ul>
                {props.ingredients.length > 3 && <div className = "get-recipe-container">
                    <div className = "info-get-recipe">
                        <h3>Ready for a Recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>
                    <button onClick = {props.toggle}>Get a Recipe</button>
                </div>}
            </section>}
        </>
    )
}