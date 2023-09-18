import { PropsWithChildren } from "react";
import { CSSProp } from "styled-components";
export interface GridProps extends PropsWithChildren {
    row: number;
    column: number;
    gap?: number;
    css?: CSSProp;
}
export interface GridLayoutProps {
    $row: number;
    $column: number;
    $gap?: number;
    $css?: CSSProp;
}
