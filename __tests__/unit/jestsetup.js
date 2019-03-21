import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axiosGet from '../../__mocks__/axios-get';

Enzyme.configure({ adapter: new Adapter()});

global.axiosGet = axiosGet;
global.shallow = shallow;
global.mount = mount;