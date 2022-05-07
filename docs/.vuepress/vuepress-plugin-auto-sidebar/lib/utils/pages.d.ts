import { AutoSidebarPage, AutoSidebarPluginOptions, GroupPagesResult, IgnoreOptions } from '../types';
export declare const handlePages: (pages: AutoSidebarPage[], options: AutoSidebarPluginOptions) => AutoSidebarPage[];
export declare const handleIgnorePages: (groupPages: GroupPagesResult, ignoreOptions: IgnoreOptions) => void;
export declare const distinguishSpecifiedSortPages: (pages: AutoSidebarPage[]) => {
    specifiedSortPages: AutoSidebarPage[];
    defaultPages: AutoSidebarPage[];
};
export declare const groupPagesByMenuPath: (pages: AutoSidebarPage[]) => GroupPagesResult;