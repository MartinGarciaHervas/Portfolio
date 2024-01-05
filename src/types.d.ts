export interface Logos {
    [key:string]:string
    html5:string
    css3:string
    git:string
    js:string
    ts:string
    rt:string
    rx:string
    nd:string
    ex:string
    tw:string
    psql:string
    sql:string
    i18next:string
}

export interface Project {
    title: string
    desc: {
        [key:string]:string
    }
    pageUrl:string
    url:string
    technologies:string[]
}

export interface Bio {
    title:{
        [key:string]: string
    }
    desc:{
        [key:string]:string
    }
}

export type Db = {
    Projects:Project[]
    Bio:Bio
}