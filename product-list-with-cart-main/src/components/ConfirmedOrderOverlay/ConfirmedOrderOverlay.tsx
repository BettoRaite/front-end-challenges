import styles from "./confirmedOrderOverlay.module.css";
import { useProductsHandler } from "../ProductsProvider/ProductsProvider.tsx";
import { useProducts } from "../ProductsProvider/ProductsProvider.tsx";
import { makeInCartProductCards } from "../Cart/Cart.tsx";
import orderConfirmedIcon from "/images/icon-order-confirmed.svg";
import { toFixed } from "../../utils/math";

interface ConfirmedOrderOverlayProps {
	isHidden: boolean;
	onHideOverlay: () => void;
}

export function ConfirmedOrderOverlay({
	isHidden,
	onHideOverlay,
}: ConfirmedOrderOverlayProps) {
	const productsHandler = useProductsHandler();
	const products = useProducts();
	const {
		InCartProductCards,
		metadata: { finalPrice },
	} = makeInCartProductCards(products, {
		hasBeenOrdered: true,
		dividerStyles: {
			marginTop: "0.5rem",
		},
		totalPriceStyles: {
			fontSize: "1rem",
			color: "var(--rose-900)",
		},
	});

	function handleStartNewOrder() {
		productsHandler.startNewOrder();
		onHideOverlay();
	}

	return (
		<div
			className={`${styles.mainLayout} ${isHidden && styles.mainLayoutHidden}`}
		>
			<div>
				<img
					className={styles.orderConfirmedIcon}
					src={orderConfirmedIcon}
					alt="order confirmed"
				/>

				<h2 className={styles.confirmationHeader}>order confirmed</h2>
				<p className={styles.blessings}>We hope you enjoy your food!</p>

				<div className={styles.cardsLayout}>
					{InCartProductCards}
					<div className={styles.orderFinalPriceLayout}>
						<p>order total</p>
						<p className={styles.orderFinalPrice}>{toFixed(finalPrice)}</p>
					</div>
				</div>
			</div>

			<button
				className={styles.startNewOrderButton}
				type="button"
				onClick={handleStartNewOrder}
			>
				start new order
			</button>
		</div>
	);
}
