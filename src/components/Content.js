import Card from "./Card";
import ShoppingCart from "./ShoppingCart";

const Content = (props) => {
  const { page } = props;
  if (page === "home") {
    const cols = props.produtos.map((produto, index) => {
      return (
        <div className="col-sm-4" key={index}>
          <Card produto={produto} />
        </div>
      );
    });
    return <div className="row">{cols}</div>;
  } else if (page === "shoppingcart") {
    return (
      <div className="col-sm-4">
        <ShoppingCart />
      </div>
    );
  }
};
export default Content;
