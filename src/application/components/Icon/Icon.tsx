import { FC } from "react";

type IconProps = {
  //https://icons8.com/line-awesome
  name:
    | `las la-${"battery-three-quarters" | "arrow-left" | "copy"}`
    | `lab la-${"github" | "python" | "node-js"}`;
};

export const Icon: FC<IconProps> = ({ name }) => <i className={name}></i>;
