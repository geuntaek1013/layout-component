import type { StoryObj } from "@storybook/react";
import FlexBox from "../FlexBox/FlexBox";
declare const meta: {
    title: string;
    component: typeof FlexBox;
    tags: string[];
    argTypes: {
        align: {
            options: string[];
            control: {
                type: string;
            };
            defaultValue: number;
            description: string;
        };
        justify: {
            options: string[];
            control: {
                type: string;
            };
            description: string;
        };
        direction: {
            options: string[];
            control: {
                type: string;
            };
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
