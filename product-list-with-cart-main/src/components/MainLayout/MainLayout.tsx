import { ProductsProvider } from "../ProductsProvider/ProductsProvider.tsx";
import { Cart } from "../Cart/Cart.tsx";
import { ProductsList } from "../ProductsList/ProductsList.tsx";
import type { Product } from "../../utils/productsReducer.ts";
import styles from "./mainLayout.module.css";
import { useState } from "react";
import { ConfirmedOrderOverlay } from "../ConfirmedOrderOverlay/ConfirmedOrderOverlay.tsx";

export function MainLayout({
	initialProducts,
}: {
	initialProducts: Product[];
}) {
	const [isShowOverlay, setIsShowOverlay] = useState(false);
	function handleShowOverlay() {
		setIsShowOverlay(!isShowOverlay);
	}
	return (
		<main className={styles.layout}>
			<div className={styles.mainLayout}>
				<ProductsProvider initialProducts={initialProducts}>
					<ProductsList />
					<Cart onShowOverlay={handleShowOverlay} />
					<div className={`${isShowOverlay && styles.overlay}`} />
					<ConfirmedOrderOverlay
						isHidden={!isShowOverlay}
						onHideOverlay={handleShowOverlay}
					/>
				</ProductsProvider>
			</div>
		</main>
	);
}
