import { registerEnumType } from '@nestjs/graphql';

export enum DonationScalarFieldEnum {
    id = "id",
    count = "count",
    displayName = "displayName",
    email = "email",
    mobile = "mobile",
    message = "message",
    team = "team",
    createdAt = "createdAt"
}


registerEnumType(DonationScalarFieldEnum, { name: 'DonationScalarFieldEnum', description: undefined })
