import ChatHistory from '../components/ChatHistory';
import Enzyme, { shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('ChatHistory Component', () => {
	test('check snapshot is fine', () => {
		const overrides = {message: 'some text'}
		const messages = createMessages(overrides);
		const userId = '';
		const component = mount(
			<ChatHistory 
				messages={messages}
				userId={userId}
			 />
		);

		expect(component).toMatchSnapshot();
	});
})


function createMessages(overrides){
	const message = {
		userId: '',
		message: '',
		username: '',
		avatar: ''
	};

	const overrideMessage = Object.assign(
		{}, message, overrides
	)

	return overrides      ? 
		[overrideMessage] : 
		[message]
}