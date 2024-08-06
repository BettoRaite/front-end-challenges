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

export function useProductsHandler() {
	const dispatch = useProductsDispatch();

	return {
		addToCart(id: string) {
			dispatch({
				type: "add_to_cart",
				id,
			});
		},
		removeFromCart(id: string) {
			dispatch({
				type: "remove_from_cart",
				id,
			});
		},
		cancelOrder(id: string) {
			dispatch({
				type: "cancel_order",
				id,
			});
		},
		startNewOrder() {
			dispatch({
				type: "start_new_order",
			});
		},
	};
}

export function useProducts() {
	return useContext(ProductsContext) ?? [];
}

const dispatchFallback = () => {
	console.error("No products dispatch.");
};

export function useProductsDispatch() {
	return useContext(ProductsDispatchContext) ?? dispatchFallback;
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
