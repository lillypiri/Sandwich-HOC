class DataSource {
	constructor() {
		this.contents = {
			peanutbutter: "🥜"
		};

		this._listeners = [];

        this.addPeanutButter = this.addPeanutButter.bind(this);
	}

	addChangeListener(listener) {
		this._listeners.push(listener);
	}

	removeChangeListener(listener) {
		this._listeners = this._listeners.filter(l => l !== listener);
	}

	didChange() {
		// Tell all of the listeners that we changed our contents
		this._listeners.forEach(listener => {
			listener();
		});
	}

	getPeanutButter() {
		return this.contents.peanutbutter;
	}

	addPeanutButter() {
		this.contents.peanutbutter += "🥜";

		// Tell the listeners that something changed
		this.didChange();
	}
}

export default new DataSource();
