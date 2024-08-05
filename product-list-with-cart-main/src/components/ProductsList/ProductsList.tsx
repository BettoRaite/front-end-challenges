import { useProducts } from "../ProductsProvider/ProductsProvider.tsx";
import { ProductCard } from "../ProductCard/ProductCard.tsx";

export function ProductsList() {
	const products = useProducts();
	return (
		<>
			{products?.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</>
	);
}
