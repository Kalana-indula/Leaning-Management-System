// types/react-player.d.ts
import * as React from "react";

export interface ReactPlayerProgressState {
    played: number;
    playedSeconds: number;
    loaded: number;
    loadedSeconds: number;
}

export interface ReactPlayerProps {
    url?: string | string[];
    playing?: boolean;
    controls?: boolean;
    width?: string | number;
    height?: string | number;
    onProgress?: (state: ReactPlayerProgressState) => void;
    config?: any;
    // allow anything extra
    [key: string]: any;
}

declare class ReactPlayer extends React.Component<ReactPlayerProps> {}

export default ReactPlayer;
