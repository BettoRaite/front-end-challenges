import styles from "./card.module.css";
import { useProducts } from "../ProductsProvider/ProductsProvider.tsx";
export function Cart() {
	const products = useProducts();
	let toOrderCount = 0;
	const toOrderProducts = products.filter((product) => {
		const orders = product.toOrder;
		if (product.toOrder > 0) {
			toOrderCount += orders;
		}
	});
	return (
		<div className={styles.layout}>
			<h1>Your card</h1>
		</div>
	);
}
