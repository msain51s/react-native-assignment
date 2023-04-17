import React, { useState } from "react";
import renderer from 'react-test-renderer'
import FormInputView from "../../src/components/FormInputView";

test('FormInputView render correctly',()=>{
    let setText:any
    const tree = renderer.create(<FormInputView hint="Name" keyboardType= 'default' setText={setText}/>)
    expect(tree).toMatchSnapshot()
    expect(tree.root.props.hint).toBe('Name')
})

test('FormInputView props hint matching',()=>{
    let setText:any
    const tree = renderer.create(<FormInputView hint="Name" keyboardType= 'default' setText={setText}/>)
    expect(tree.root.props.hint).toBe('Name')
})