import React, { useState } from "react";
import renderer from 'react-test-renderer'
import FormTextView from "../../src/components/FormTextView";

test('FormTextView render correctly',()=>{
    let setText:any
    const tree = renderer.create(<FormTextView title="key" value="value"/>)
    expect(tree).toMatchSnapshot()
})