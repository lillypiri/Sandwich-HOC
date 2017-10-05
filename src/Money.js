class Money {
	constructor() {
		this.contents = {
			money: "💰",
			banana: "🍌"
		};

		this._listeners = [];
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

	getMoney() {
		return this.contents.money;
	}

	addMoney() {
		this.contents.money += "💰";

		// Tell the listeners that something changed
		this.didChange();
	}

    getBanana() {
        return this.contents.banana;
    }

    addBanana() {
        this.contents.banana += "🍌";

        this.didChange();
    }
}

export default new Money();
