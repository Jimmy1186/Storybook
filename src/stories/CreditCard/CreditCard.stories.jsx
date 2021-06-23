import React from 'react';
import { CreditCard } from './CreditCard';

export default{
    title:'Github-Tool/信用卡套件',
    component:CreditCard,
    argTypes:{
        cardNum:{
            control: { type: false },
         
        }
    }
}

const Template = (args) =><CreditCard {...args}/>

export const VisaCard = Template.bind({})
VisaCard.args ={
    cardNum:'4211'
}

export const MasterCard = Template.bind({})
MasterCard.args ={
    cardNum:'5111'
}

export const AmericanExpress = Template.bind({})
AmericanExpress.args ={
    cardNum:'341'
}

export const JCBCard = Template.bind({})
JCBCard.args ={
    cardNum:'1800'
}