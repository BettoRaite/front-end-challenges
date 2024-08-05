import { ProductsProvider } from "../ProductsProvider/ProductsProvider.tsx";
import { Cart } from "../Cart/Cart.tsx";
import { ProductsList } from "../ProductsList/ProductsList.tsx";
import type { Product } from "../../utils/productsReducer.ts";
import styles from "./mainLayout.module.css";

export function MainLayout({
	initialProducts,
}: {
	initialProducts: Product[];
}) {
	return (
		<main className={styles.mainLayout}>
			<h1 className={styles.header}>Desserts</h1>
			<ProductsProvider initialProducts={initialProducts}>
				<ProductsList />
				<Cart />
			</ProductsProvider>
		</main>
	);
}
