class URL {
	private root = '/qpick'

	HOME = this.root
	FAVOURITES = `${this.root}//favourites`
	BASKET = `${this.root}/basket`
	CONTACTS = `${this.root}/contacts`
	OFFERT = `${this.root}/offert`
}

export const URL_PAGES = new URL()
