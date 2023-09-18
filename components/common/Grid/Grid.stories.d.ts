import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: ({ row, column, gap, css, children }: import("./type").GridProps) => import("react/jsx-runtime").JSX.Element;
    tags: string[];
    argTypes: {
        row: {
            control: string;
            description: string;
        };
        column: {
            control: string;
            description: string;
        };
        gap: {
            control: string;
            description: string;
        };
        css: {
            description: string;
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const ContainerLayout: Story;
