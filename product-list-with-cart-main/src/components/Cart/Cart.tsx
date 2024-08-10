import styles from "./card.module.css";
import { useProducts } from "../ProductsProvider/ProductsProvider.tsx";
import emptyCartImage from "/images/illustration-empty-cart.svg";
import {
	InCartProductCard,
	type InCartProductCardProps,
} from "../InCartProductCard/InCartProductCard.tsx";
import type { Product } from "../../utils/productsReducer.ts";
import carbonNeutralIcon from "/images/icon-carbon-neutral.svg";

type CartProps = {
	onShowOverlay: () => void;
};

export function makeInCartProductCards(
	products: Product[],
	props: Partial<InCartProductCardProps>,
) {
	const InCartProductCards = [];

	let ordersSum = 0;
	let finalPrice = 0;

	for (const product of products) {
		const { orderCount, price } = product;
		if (orderCount > 0) {
			ordersSum += orderCount;
			finalPrice += price * orderCount;

			props.product = product;
			InCartProductCards.push(
				<InCartProductCard
					key={product.id}
					{...(props as InCartProductCardProps)}
				/>,
			);
		}
	}
	return {
		InCartProductCards,
		metadata: {
			ordersSum,
			finalPrice,
		},
	};
}

export function Cart({ onShowOverlay }: CartProps) {
	const products = useProducts();

	const {
		InCartProductCards,
		metadata: { ordersSum, finalPrice },
	} = makeInCartProductCards(products, {});

	let cartContent = (
		<div className={styles.emptyCartContentLayout}>
			<img
				className={styles.emptyCartImage}
				src={emptyCartImage}
				alt="empty cart"
			/>
			<p className={styles.hint}>Your added items will appear here</p>
		</div>
	);

	if (ordersSum > 0) {
		cartContent = (
			<div className={styles.cardsWrapper}>
				{InCartProductCards}
				<div className={styles.orderFinalPriceLayout}>
					<p>Order total</p>
					<span className={styles.orderFinalPrice}>{finalPrice}</span>
				</div>

				<div className={styles.deliveryInfo}>
					<img src={carbonNeutralIcon} alt="carbon neutral" />
					This is a<span className={styles.bold}>carbon-neutral</span> delivery
				</div>

				<button
					onClick={onShowOverlay}
					className={styles.confirmOrderButton}
					type="button"
				>
					Confirm order
				</button>
			</div>
		);
	}

	return (
		<section className={styles.mainLayout}>
			<h1 className={styles.ordersSum}>Your cart ({ordersSum})</h1>
			{cartContent}
		</section>
	);
}
