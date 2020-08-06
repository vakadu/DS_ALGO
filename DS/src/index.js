class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.unshift(record);
	}

	remove() {
		this.data.pop();
	}
}

const qu = new Queue();
qu.add(1);
qu.add(3);

qu.remove();

console.log(qu);

export default Queue;
