// ProductCard.jsx
export default function ProductCard(props){
  return (
    <div className="product-card"> 
      <h2>{props.title}</h2>
      <img src={props.image} alt="product image" />
      <p>${props.price}</p>
    </div>
  );
}