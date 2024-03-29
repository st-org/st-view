import type { STDNPosition } from 'stdn';
import type { Compiler, STDNPart } from '@ddu6/stc';
export declare function createViewer(): Promise<{
    element: HTMLDivElement;
    style: HTMLStyleElement;
    main: HTMLElement;
    sideContent: HTMLDivElement;
    article: HTMLElement;
    nav: HTMLElement;
    settings: HTMLDetailsElement;
    dblClickLineListeners: ((part: STDNPart, offset: number, position: STDNPosition) => Promise<void>)[];
    env: {
        compiler?: Compiler | undefined;
    };
    focus: (dir: string, focusURL?: string, focusPositionStr?: string, focusId?: string) => Promise<void>;
    load: (urls: string[]) => Promise<boolean>;
    loadString: (string: string, url: string) => Promise<boolean>;
    autoLoad: () => Promise<void>;
}>;
