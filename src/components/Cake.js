const Cake = ({cake}) => {

    const {cakeName, ingredients, price, rating} = cake;

    // const displayCake = cake.map();

    // displayCake(); 
    
    return (
        <>
            <h3> {cakeName} </h3>
            <p> Ingredients: {ingredients} </p>
            <p> Price: {price} </p>
            <p> Rating: {rating} </p>
        </>
      );
}
 
export default Cake;
