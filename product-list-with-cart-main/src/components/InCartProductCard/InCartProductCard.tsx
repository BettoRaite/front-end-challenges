import removeItemIcon from "/images/icon-remove-item.svg";
import type { ProductCardProps } from "../ProductCard/ProductCard.tsx";
import styles from "./inCartProductCard.module.css";
import { useProductsHandler } from "../ProductsProvider/ProductsProvider.tsx";
import { toFixed } from "../../utils/math";

export interface InCartProductCardProps extends ProductCardProps {
	hasBeenOrdered?: boolean;
	dividerStyles?: React.CSSProperties;
	totalPriceStyles?: React.CSSProperties;
}

const MAX_PRODUCT_NAME_LEN = 20;

export function InCartProductCard({
	product,
	hasBeenOrdered,
	dividerStyles,
	totalPriceStyles,
}: InCartProductCardProps) {
	const totalPrice = product.price * product.orderCount;
	const productsHandler = useProductsHandler();

	let productName = product.name;

	if (productName.length >= MAX_PRODUCT_NAME_LEN) {
		productName = `${productName.slice(0, MAX_PRODUCT_NAME_LEN)}...`;
	}

	function removeFromCart() {
		productsHandler.cancelOrder(product.id);
	}

	return (
		<div>
			<div className={styles.mainLayout}>
				<div className={styles.descriptionLayout}>
					{hasBeenOrdered && (
						<img
							className={styles.productThumbnail}
							src={product.image.thumbnail}
							alt={`${product.name} thumbnail`}
						/>
					)}

					<div>
						<p className={styles.productName} style={hasBeenOrdered ? {
							fontSize: "0.85rem"
						} : {}}>{productName}</p>
						<div className={styles.orderInfoLayout} style={hasBeenOrdered ? {
							fontSize: "0.9rem"
						} : {}}>
							<p className={styles.orderCount}>{product.orderCount}</p>
							<p className={styles.productPrice}>{toFixed(product.price)}</p>
							{!hasBeenOrdered && (
								<p className={styles.productTotalPrice}>
									{toFixed(totalPrice)}
								</p>
							)}
						</div>
					</div>
				</div>

				{hasBeenOrdered ? (
					<h3 className={styles.productTotalPrice} style={totalPriceStyles}>
						{toFixed(totalPrice)}
					</h3>
				) : (
					<button
						onClick={removeFromCart}
						type="button"
						className={styles.cancelOrderButton}
					>
						<span className={styles.buttonIconWrapper}>
							<img src={removeItemIcon} alt="Remove item from cart" />
						</span>
					</button>
				)}
			</div>

			<div className={styles.divider} style={dividerStyles} />
		</div>
	);
}
