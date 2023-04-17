import React from "react";
import renderer from 'react-test-renderer'
import ListItem, { ListItemProps } from "../../src/components/ListItem";

const mockProps : ListItemProps ={
    name:'abc',
    occupation:'Engineer',
    company:'xyz',
    emailAddress:'xyz.com',
    phoneNumber:'1234567890',
    linkedInUrl:'mm.com'
}
test('ListItem renders correctly',()=>{
    
    const tree = renderer.create(
    <ListItem 
    data={mockProps}
    />)

    expect(tree).toMatchSnapshot()
})