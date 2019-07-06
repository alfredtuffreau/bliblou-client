import labelsFR from "./labelsFR";

export const formattedText = (id) => id.split(".").reduce((acc, cur) => acc[cur], labelsFR);
