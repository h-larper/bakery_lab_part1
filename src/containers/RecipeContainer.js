import { useState } from "react";
import Cake from "../components/Cake";

const RecipeContainer = ({}) => {

const [cakes, setCakes] = useState(
    [
        // Victora Sponge
        {
            cakeName: "Victoria Sponge",
               ingredients: [
                   "eggs, ",
                  "butter, ",
                  "sugar, ",
                      "self-raising flour, ",
                  "baking powder, ",
                  "milk"
              ],
              price: 5,
              rating: 5
        },
    
        // Tea Loaf
        {
             cakeName: "Tea Loaf",
               ingredients: [
                   "eggs, ",
                  "oil ,",
                  "dried fruit, ",
                      "sugar, ",
                  "self-raising flour, ",
                  "strong tea",
              ],
              price: 2,
              rating: 3
        },
    
        // Carrot Cake
        {
             cakeName: "Carrot Cake",
               ingredients: [
                    "carrots, ",
                      "walnuts, ",
                  "oil, ",
                      "cream cheese, ",
                      "flour ",
                  "sugar",
               ],
               price: 8,
               rating: 5
        }
    ] 
    );

        const [victoriaSponge, teaLoaf, carrotCake] = cakes;
        // console.log(cakes[0]);

    return (  
        <>
            <h2>Available Cakes: </h2>
            <Cake cake={cakes[0]}/>
            <Cake cake={cakes[1]}/>
            <Cake cake={cakes[2]}/>
            <hr/>
            <h4> Average Bakery Rating ⭐️: {(cakes[0].rating + cakes[1].rating + cakes[2].rating) / 3}</h4> 
    </>
    );
}
 
export default RecipeContainer;