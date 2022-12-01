const apiKey = "5ODNo7dkv7sMRuTITRs89vWSfw2sisrSEr3TJBHTGqUi1Ptm6IM1gNWBTClhKDqPk1stysMjM8SO8vskW7pPwCRfTlH0DeMB0fRCiWIrVfcwfk5wtsfryzLUkdpzY3Yx";

const yelp = {
    searchYelp(term, location) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`,
            },

        }).then((response) => {

            return response.json();
        }).then((jsonResponse) =>  {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) =>{
                    console.log(business);
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                        price: business.price,
                    }
                })
            }
        });

    }

}
export default yelp;