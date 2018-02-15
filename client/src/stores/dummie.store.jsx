// Dependencies
import { observable } from 'mobx';

class DummieStore {
	@observable x = 'Hello World!';

	changeX = (str) => {
		this.x = str;
	}
}

export const dummieStore = new DummieStore();
