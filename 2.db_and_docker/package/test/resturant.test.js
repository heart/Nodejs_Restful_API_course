const util = require('../src/utils')

test(  'Test utils.countResturant expect count = 5'  , () => {
    const data = {
        resturants:[
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" }
        ]
    }
    const count = util.countResturant( data )
    expect( count ).toBe(5);
});

test(  'Test utils.countResturant expect count != 5'  , () => {
    const data = {
        resturants:[
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" },
            { name:"ไก่ทอดป้าดา" , id:"XXAACC", photo:"a.jpg" }
        ]
    }
    const count = util.countResturant( data )
    expect( count ).not.toBe(5);
});