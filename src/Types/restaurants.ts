export type PositionType = {
    "id": number,
    "quantity": number,
    "positionName" : string,
    "positionPrice": number,
    "positionImage": string
}

export type RestaurantsType = {
    "id": number
    "coverImage": string
    "promotionValue": number,
    "speed": string,
    "itemName": string,
    "logo": string,
    "likeValue": number,
    "openStatus": boolean,
    "positions": PositionType[]
}