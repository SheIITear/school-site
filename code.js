class Cat {
	constructor() {
		this.BASE_URL = 'https://cataas.com'
		this.tagsList = document.getElementById('tagsList')
		this.defaultChoice = new Option('Select a tag', null, true, true)
		this.defaultChoice.disabled = true
		this.gettingCat = false
		this.tagsList.add(this.defaultChoice)

		this.main() 
	}

	async makeRequest(path) {
		const response = await fetch(this.BASE_URL + path)
		return response
	}

	async getCatTags() {
		const resp = await this.makeRequest('/api/tags')
		const data = await resp.json()
		return data
	}

	async main() {
		const tags = await this.getCatTags()
		tags.forEach(tag => {
			const adjectivePatterns = /^(.*y|.*ous|.*ive|.*al|.*able|.*ic|.*ful)$/i
			if (adjectivePatterns.test(tag) && !tag.includes('pussy')) {
				const option = new Option(tag)
				this.tagsList.add(option)
			}
		})
	}

	async getCat() {
		if (this.gettingCat)
			return alert('Already getting a cat')

		this.gettingCat = true
		this.removeCat()

		const selected = this.tagsList.value
		const data = await this.makeRequest(`/cat/${encodeURIComponent(selected.trim())}`)
		const blob = await data.blob()
		const imageSrc = await this.blobToBase64(blob)

		const image = document.createElement('img')
		image.style.maxWidth = '850px';
		image.style.maxHeight = '800px';
		image.style.objectFit = 'cover';
		image.src = imageSrc
		image.id = 'cats'
		document.getElementById('body').appendChild(image)
		this.gettingCat = false
	}

	removeCat() {
		try {
			document.getElementById('cats').remove()
		} catch {
			console.log('No cat to remove')
		}
	}

	blobToBase64(blob) {
		return new Promise((resolve) => {
			const reader = new FileReader()
			reader.readAsDataURL(blob)
			reader.onloadend = () => {
				resolve(reader.result)
			}
		})
	}
}

const cats = new Cat()
document.getElementById('getCat').addEventListener('click', () => cats.getCat())
