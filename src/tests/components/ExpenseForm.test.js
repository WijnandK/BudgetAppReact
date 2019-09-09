import React from "react";
import { shallow } from "enzyme";
import FormField from "../../components/FormField";

test("Should render expense form ", () => {
  const wrapper = shallow(<FormField />);
  expect(wrapper).toMatchSnapshot();
});
