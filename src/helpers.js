export const formatPrice = (price) => {
	price = price.toString()
	if (price.length < 4) return price
	const firstPart = price.slice(0, -3)
	const lastPart = price.slice(-3)
	return `${firstPart} ${lastPart}`
}