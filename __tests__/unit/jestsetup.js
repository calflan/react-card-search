import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import fetch from '../../__mocks__/fetch';

Enzyme.configure({ adapter: new Adapter()});

global.fetch = fetch;
global.shallow = shallow;
global.mount = mount;