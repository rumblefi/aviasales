const formatPrice = (price) => {
	price = price.toString()
	if (price.length < 4) return price
	const firstPart = price.slice(0, -3)
	const lastPart = price.slice(-3)
	return `${firstPart} ${lastPart}`
}

const toMMDDYYY = (dateStr) => {
    dateStr = dateStr.split('.')
    return [dateStr[1],dateStr[0],dateStr[2]].join('.')
}

const getMonthName = (number) => {
    const months = ['янв', 'фев', 'мар', 'апр', 'мая', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя','дек']
    return months[number]
}

const getDayName = (number) => {
    const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
    return dayNames[number]
}

const formatDate = (str) => {
    const dateStr = toMMDDYYY(str)
    const date = new Date(dateStr)
    const dd = date.getDate()
    const month = getMonthName( date.getMonth() )
    const year = date.getFullYear()
    const dayName = getDayName( date.getDay() )
    return `${dd} ${month} ${year}, ${dayName}`
}

export {
	formatPrice,
	formatDate
}