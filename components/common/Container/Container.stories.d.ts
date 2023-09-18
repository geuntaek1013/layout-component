import type { StoryObj } from "@storybook/react";
import Container from "../Container/Container";
declare const meta: {
    title: string;
    component: typeof Container;
    tags: string[];
    argTypes: {
        maxWidth: {
            control: string;
            description: string;
        };
        minWidth: {
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
