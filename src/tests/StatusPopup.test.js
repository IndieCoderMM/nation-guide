import renderer from 'react-test-renderer';
import StatusPopup from '../components/StatusPopup';

describe('Popup Window', () => {
  it('should render correctly', () => {
    const tree = renderer.create(<StatusPopup />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
