import styles from "./productCard.module.css";
import type { Product } from "../../utils/productsReducer.ts";
export type ProductCardProps = {
	product: Product;
};
export function ProductCard({ product }: ProductCardProps) {
	return (
		<div className={styles.layout}>
			<img
				className={styles.cover}
				src={product.image.mobile}
				alt={product.productName}
			/>
			<div className={styles.buttonWrapper}>
				<button className={styles.addToCardButton}>Add to card</button>
			</div>
			<div className={styles.contentLayout}>
				<p className={styles.category}>{product.productCategory}</p>
				<p className={styles.name}>{product.productName}</p>
				<p className={styles.price}>{product.price}</p>
			</div>
		</div>
	);
}
