import styles from "./confirmedOrderOverlay.module.css";
import { useProductsHandler } from "../ProductsProvider/ProductsProvider.tsx";

interface ConfirmedOrderOverlayProps {
	isHidden: boolean;
	onHideOverlay: () => void;
}

export function ConfirmedOrderOverlay({
	isHidden,
	onHideOverlay,
}: ConfirmedOrderOverlayProps) {
	const productsHandler = useProductsHandler();

	function handleStartNewOrder() {
		productsHandler.startNewOrder();
		onHideOverlay();
	}

	return (
		<div className={`${styles.layout} ${isHidden && styles.layoutHidden}`}>
			<h1>Order</h1>
			<h1>Confirmed</h1>
			<p>We hope you enjoy your food!</p>
			<button
				className={styles.button}
				type="button"
				onClick={handleStartNewOrder}
			>
				start new order
			</button>
		</div>
	);
}
