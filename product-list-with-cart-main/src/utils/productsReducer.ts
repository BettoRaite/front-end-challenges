export type Product = {
  id: string;
  productCategory: string;
  productName: string;
  price: number;
  toOrder: number;
  image: {
    thumbnail: string;
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export interface ProductAction extends Partial<Product> {
  type: "add_to_card" | "remove_from_card";
}
export function productsReducer(products: Product[], action: ProductAction) {
  switch (action.type) {
    case "add_to_card": {
      if (typeof action.id !== "string") {
        throw new TypeError("action.id is not a string.");
      }

      const nextProducts = products.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            toOrder: product.toOrder + 1,
          };
        }

        return product;
      });

      return nextProducts;
    }
    case "remove_from_card": {
      if (typeof action.id !== "string") {
        throw new TypeError("action.id is not a string.");
      }

      const nextProducts = products.map((product) => {
        if (product.id === action.id) {
          return {
            ...product,
            toOrder: product.toOrder - 1,
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
