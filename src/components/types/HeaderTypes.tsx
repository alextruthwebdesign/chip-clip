export type HeaderType = {
   sections:Section[];
   message:string;
   currencies:any;
}


export type HeaderItem ={
    link:any
}

export type Section={
    name: string;
    link: SectionLink | null;
    subsections:  any;
}

export type SectionLink = {
    name:string;
    href:string
}   

