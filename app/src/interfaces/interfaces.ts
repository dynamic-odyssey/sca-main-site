export enum TABLE_NAMES {
    CONTACT_US = "contact_us_messages",
    MAIL_SUBSCRIBERS = "mail_subscribers",
    PARENT_COMMITTEE = "parent_committee",
}

export interface IContactUs {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export interface ISubscribeToMail {
    email: string;
}

export interface IParentCommittee {
    name: string;
    email: string;
    cell: string;
    message: string;
}