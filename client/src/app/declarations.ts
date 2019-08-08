export class menu {
    title: {
        name: string;
        link: string;
    };
    subtitle: Array<{ name: string, link: string }>;
}

export class images {
    source: string;
    alt: string;
}
export class events {
    id: number;
    title: string;
    date: string;
    description: string;
}

export class temoins {
    id: number;
    src: string;
    alt: string;
    testimon: string;
    profile: string;
    status: string;
}

export class Trophie{
    id:number;
    name:string;
    details:string;
    img:string;
}