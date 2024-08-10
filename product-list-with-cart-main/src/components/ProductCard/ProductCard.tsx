import styles from "./productCard.module.css";
import type { Product } from "../../utils/productsReducer.ts";
import { useProductsHandler } from "../ProductsProvider/ProductsProvider.tsx";
import addToCartIcon from "/images/icon-add-to-cart.svg";
import incrementOrderCountIcon from "/images/icon-increment-quantity.svg";
import decrementOrderCountIcon from "/images/icon-decrement-quantity.svg";
import { toFixed } from "../../utils/math";

export type ProductCardProps = {
	product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
	const productsHandler = useProductsHandler();

	const isInCart = product.orderCount > 0;

	function handleAddToCart() {
		productsHandler.addToCart(product.id);
	}
	function handleRemoveFromCart() {
		productsHandler.removeFromCart(product.id);
	}

	let productButtons = (
		<div className={styles.buttonsLayout}>
			<button
				onClick={handleAddToCart}
				className={styles.addToCardButton}
				type="button"
			>
				<img src={addToCartIcon} alt="add to cart" />
				add to cart
			</button>
		</div>
	);

	if (isInCart) {
		productButtons = (
			<div className={`${styles.buttonsLayout} ${styles.buttonsLayoutInCart}`}>
				<button
					onClick={handleRemoveFromCart}
					className={`${styles.button} ${styles.buttonDecrement}`}
					type="button"
				>
					<span className={styles.buttonIconWrapper}>
						<img src={decrementOrderCountIcon} alt="decrement order count" />
					</span>
				</button>
				<span>{product.orderCount}</span>
				<button
					onClick={handleAddToCart}
					className={`${styles.button} ${styles.buttonIncrement}`}
					type="button"
				>
					<span className={styles.buttonIconWrapper}>
						<img src={incrementOrderCountIcon} alt="increment order count" />
					</span>
				</button>
			</div>
		);
	}
	let imageUrl = "";
	const productImage = product.image;

	if (window.innerWidth >= 1024) {
		imageUrl = productImage.desktop;
	} else if (window.innerWidth >= 640) {
		imageUrl = productImage.tablet;
	} else {
		imageUrl = productImage.mobile;
	}

	return (
		<div className={styles.mainLayout}>
			<div className={styles.coverWrapper}>
				<img
					className={`${styles.cover} ${isInCart && styles.coverSelected}`}
					src={imageUrl}
					alt={product.name}
				/>
				{productButtons}
			</div>

			<div className={styles.descriptionLayout}>
				<p className={styles.productCategory}>{product.category}</p>
				<p className={styles.productName}>{product.name}</p>
				<p className={styles.productPrice}>{toFixed(product.price)}</p>
			</div>
		</div>
	);
}
