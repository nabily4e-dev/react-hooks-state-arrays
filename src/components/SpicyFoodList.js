import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
    const [foods, setFoods] = useState(spicyFoods);
    const [filter, setFilter] = useState("All");

    function handleAddFood() {
        const newFood = getNewRandomSpicyFood();
        const newFoods = [...foods, newFood];
        setFoods(newFoods);
        console.log(newFood);
    }

    function handleLiClick(id) {
        const newFoodArray = foods.map((food) => {
            if (food.id === id) {
                return {
                    ...food,
                    heatLevel: food.heatLevel + 1,
                };
            } else {
                return food;
            }
        });
        setFoods(newFoodArray);
    }

    function handleFilterChange(event) {
        setFilter(event.target.value);
    }
    const filteredFood = foods.filter((food) => {
        if (filter === "All") {
            return true;
        } else {
            return food.cuisine === filter;
        }
    });

    const foodList = filteredFood.map((food) => (
        <li key={food.id} onClick={() => handleLiClick(food.id)}>
            {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
        </li>
    ));

    return (
        <div>
            <select name="filter" onChange={handleFilterChange}>
                <option value="All">All</option>
                <option value="American">American</option>
                <option value="Sichuan">Sichuan</option>
                <option value="Thai">Thai</option>
                <option value="Mexican">Mexican</option>
            </select>
            <button onClick={handleAddFood}>Add New Food</button>
            <ul>{foodList}</ul>
        </div>
    );
}

export default SpicyFoodList;
