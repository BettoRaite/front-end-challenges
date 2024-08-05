import {
	productsReducer,
	type Product,
	type ProductAction,
} from "../../utils/productsReducer.ts";
import { createContext, useReducer, useContext, type Dispatch } from "react";

const ProductsContext = createContext<Product[] | null>(null);
const ProductsDispatchContext = createContext<Dispatch<ProductAction> | null>(
	null,
);

export function useProducts() {
	return useContext(ProductsContext) ?? [];
}

export function useProductsDispatch() {
	return useContext(ProductsDispatchContext);
}

export function ProductsProvider({
	children,
	initialProducts,
}: { children: React.ReactNode[]; initialProducts: Product[] }) {
	const [products, dispatch] = useReducer(productsReducer, initialProducts);

	return (
		<ProductsContext.Provider value={products}>
			<ProductsDispatchContext.Provider value={dispatch}>
				{children}
			</ProductsDispatchContext.Provider>
		</ProductsContext.Provider>
	);
}
