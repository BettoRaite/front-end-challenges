export type Product = {
  id: string;
  category: string;
  name: string;
  price: number;
  orderCount: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export interface ProductAction extends Partial<Product> {
  type: "add_to_cart" | "remove_from_cart" | "cancel_order" | "start_new_order";
}

export function productsReducer(
  products: Product[],
  action: ProductAction
): Product[] {
  switch (action.type) {
    case "add_to_cart":
    case "remove_from_cart":
    case "cancel_order": {
      if (typeof action.id !== "string") {
        throw new TypeError("action.id is not a string.");
      }
      const nextProducts = products.map((product) => {
        if (product.id === action.id) {
          const nextProduct = {
            ...product,
          };

          switch (action.type) {
            case "add_to_cart": {
              nextProduct.orderCount += 1;
              break;
            }
            case "remove_from_cart": {
              if (nextProduct.orderCount > 0) {
                nextProduct.orderCount -= 1;
              }
              break;
            }
            case "cancel_order": {
              nextProduct.orderCount = 0;
              break;
            }
            default: {
              throw new Error("Action does not exist.");
            }
          }

          return nextProduct;
        }
        return product;
      });

      return nextProducts;
    }
    case "start_new_order": {
      const nextProducts = products.map((product) => {
        if (product.orderCount > 0) {
          return {
            ...product,
            orderCount: 0,
          };
        }
        return product;
      });

      return nextProducts;
    }
    default: {
      throw new Error("Action does not exist.");
    }
  }
}
