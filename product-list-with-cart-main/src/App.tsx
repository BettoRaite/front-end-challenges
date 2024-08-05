import "./App.css";
import type { Product } from "./utils/productsReducer.ts";
import productsData from "./data/data.json";
import { v4 as uuidv4 } from "uuid";
import { MainLayout } from "./components/MainLayout/MainLayout.tsx";

const initialProducts: Product[] = [];

for (const productData of productsData) {
	initialProducts.push({
		id: uuidv4(),
		productName: productData.name,
		productCategory: productData.category,
		price: productData.price,
		toOrder: 0,
		image: { ...productData.image },
	});
}

export default function App() {
	return <MainLayout initialProducts={initialProducts} />;
}
