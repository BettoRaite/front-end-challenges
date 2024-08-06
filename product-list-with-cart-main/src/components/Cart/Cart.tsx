import styles from "./card.module.css";
import { useProducts } from "../ProductsProvider/ProductsProvider.tsx";
import emptyCartImage from "/images/illustration-empty-cart.svg";
import { InCartProductCard } from "../InCartProductCard/InCartProductCard.tsx";

type CartProps = {
	onShowOverlay: () => void;
};
export function Cart({ onShowOverlay }: CartProps) {
	const products = useProducts();

	let ordersCountSum = 0;
	let totalPrice = 0;

	const InCartProducts = [];

	for (const product of products) {
		const { orderCount, price } = product;
		if (orderCount > 0) {
			ordersCountSum += orderCount;
			totalPrice += price;
			InCartProducts.push(
				<InCartProductCard key={product.id} product={product} />,
			);
		}
	}

	let cartContent = (
		<div className={styles.emptyCartContentLayout}>
			<img src={emptyCartImage} alt="empty cart" />
			<p>Your added items will appear here</p>
		</div>
	);

	if (ordersCountSum > 0) {
		cartContent = (
			<div>
				{InCartProducts}
				<p>Order total ${totalPrice}</p>
				<p>This is carbon-neutral delivery</p>
				<button onClick={onShowOverlay} className="" type="button">
					Confirm order
				</button>
			</div>
		);
	}

	return (
		<div className={styles.layout}>
			<h1>Your card ({ordersCountSum})</h1>
			{cartContent}
		</div>
	);
}
