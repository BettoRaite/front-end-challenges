import { useProducts } from "../ProductsProvider/ProductsProvider.tsx";
import { ProductCard } from "../ProductCard/ProductCard.tsx";
import styles from "./productsList.module.css";

export function ProductsList() {
	const products = useProducts();
	return (
		<section>
			<h1 className={styles.header}>Desserts</h1>
			<div className={styles.cardsLayout}>
				{products?.map((product) => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</section>
	);
}
