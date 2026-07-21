import{expect,test} from"@playwright/test";

test("API Test", async({request})=>
{
    const response=await request.get("https://restful-booker.herokuapp.com/booking");
    const statuscode= await response.status();
    console.log(statuscode);
    expect(statuscode).toBe(200);

    const body=await response.json();
    console.log(body);

});

test("post", async({request})=>{

    const postres=await request.post("https://restful-booker.herokuapp.com/booking",
    {
        headers:{ 'Content-Type': 'application/json' },
        data : {
            firstname: "Sally",
    lastname: "Brown",
    totalprice: 111,
    depositpaid: true,
    bookingdates: {
        checkin: "2013-02-23",
        checkout: "2014-10-23"
             
    },
    additionalneeds: "Breakfast"
        }
    })
    console.log(postres.status());
    console.log(postres.statusText());
    const pay=await postres.json();

})
