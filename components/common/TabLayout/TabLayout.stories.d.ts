import { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: (props: import("./type").TabLayoutProps) => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            description: {
                component: string;
            };
        };
    };
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Example: Story;
