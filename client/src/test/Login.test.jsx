import Login from '../components/login';

describe("Login Component", () => {
	test('should disable input on state.disabled == true', () => {
		const enterPressEvent = {key: 'Enter'};
		const component = shallow(<Login setUser={() => {}}/>);
		component.instance().setUser = jest.fn();
		component.update();
		component.instance().onClickHandler();
		component.update();
		const input = component.find('input');
		
		expect(input.prop('disabled')).toBe(true);
	});
});