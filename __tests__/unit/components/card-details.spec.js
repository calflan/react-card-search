import React from 'react';
import CardDetails from '../../../src/js/components/card-details';

describe('Contact Component', () => {
  let component;
  let details;
  let mockToggleCardExpandCallBack = jest.fn();

  beforeEach(() => {
    details = {
      Title: "New Job Card",
      ImageUrls: [
        {
          ImageUrl: "http://someimage.com"
        },
        {
          ImageUrl: "http://anotherimage.com"
        }
      ],
      AvailableSizes: [
        {
          DisplayName: "Large"
        },
        {
          DisplayName: "Medium"
        }
      ],
    };

    component = shallow(<CardDetails details={details} status="complete" options={{isOpen: true, detailsExpanded: mockToggleCardExpandCallBack }}/>);
  });

  test('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('should close card details and call detailsExpanded callback and _handleClose method when close is clicked', () => {
    const handleClose = jest.spyOn(component.instance(), '_handleClose');
    const closeIcon = component.find('.card-listings__card-details-close');

    closeIcon.simulate('click');
    component.instance()._handleClose();
    
    expect(handleClose).toHaveBeenCalled();
    expect(mockToggleCardExpandCallBack).toHaveBeenCalled();
  });
});