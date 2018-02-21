import PostMessages from '../components/PostMessage';

describe('PostMessage Component:', () => {
	test('אtesting', () => {
		const component = shallow(<PostMessages send={()=>{}}/>);

		const button = component.find('button');
		const input = component.find('input');
		
	});
});
