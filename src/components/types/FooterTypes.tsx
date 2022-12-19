export type FooterType = {
    navigation:FooterNavigation;
    newsletter:any;
}

export type FooterNavigation = {
    sections:Section[]
}

export type Section={
    name: string;
    links: SectionLink[];
}

export type SectionLink = {
    name:string;
    href:string
}  