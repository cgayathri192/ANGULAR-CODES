export interface sidebarModel {
    title:string,
    link?:string,
    isopen?: boolean,
    childrens? :sidebarWithChild[]

}
export interface sidebarWithChild{
    title:string,
    link:string,
}