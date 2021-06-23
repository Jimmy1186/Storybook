import React from 'react';

import { Button } from './Button';


export default {
    title:'Github-Tool/Hover顯示提示',
    component:Button,
    argTypes:{
        backgroundColor:{control:'color'},
        color:{control:'color'}
    }
}

const Template = (args) =><Button {...args}/>

export const Large = Template.bind({});
Large.args ={
    size:'large',
}

export const Medium = Template.bind({});
Medium.args ={
    size:'medium',
}

export const Small = Template.bind({});
Small.args ={
    size:'small',
}

