import styles from "./productCard.module.css";
import type { Product } from "../../utils/productsReducer.ts";
import { useProductsHandler } from "../ProductsProvider/ProductsProvider.tsx";

export type ProductCardProps = {
	product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
	const productsHandler = useProductsHandler();

	function handleAddToCart() {
		productsHandler.addToCart(product.id);
	}
	function handleRemoveFromCart() {
		productsHandler.removeFromCart(product.id);
	}
	let button = (
		<button
			onClick={handleAddToCart}
			className={styles.addToCardButton}
			type="button"
		>
			Add to card
		</button>
	);

	if (product.orderCount > 0) {
		button = (
			<div className={styles.orderButtonsLayout}>
				<button
					onClick={handleRemoveFromCart}
					className={styles.addToCardButton}
					type="button"
				>
					-
				</button>
				<span>{product.orderCount}</span>
				<button
					onClick={handleAddToCart}
					className={styles.addToCardButton}
					type="button"
				>
					+
				</button>
			</div>
		);
	}
	return (
		<div className={styles.layout}>
			<img
				className={styles.cover}
				src={product.image.mobile}
				alt={product.name}
			/>
			<div className={styles.buttonWrapper}>{button}</div>
			<div className={styles.contentLayout}>
				<p className={styles.category}>{product.category}</p>
				<p className={styles.name}>{product.name}</p>
				<p className={styles.price}>{product.price}</p>
			</div>
		</div>
	);
}
