import removeItemIcon from "/images/icon-remove-item.svg";
import type { ProductCardProps } from "../ProductCard/ProductCard.tsx";
import styles from "./inCartProductCard.module.css";
import { useProductsHandler } from "../ProductsProvider/ProductsProvider.tsx";

interface InCartProductCard extends ProductCardProps {}
export function InCartProductCard({ product }: InCartProductCard) {
	const totalPrice = product.price * product.orderCount;
	const productsHandler = useProductsHandler();
	function removeFromCart() {
		productsHandler.cancelOrder(product.id);
	}
	return (
		<div className={styles.layout}>
			<div>
				<p>{product.name}</p>
				<div className={styles.orderInfoLayout}>
					<p>{product.orderCount}x</p>
					<p>{product.price}</p>
					<p>{totalPrice}</p>
				</div>
			</div>
			<button
				onClick={removeFromCart}
				type="button"
				className={styles.cancelOrderButton}
			>
				<img src={removeItemIcon} alt="Remove item from cart" />
			</button>
		</div>
	);
}
