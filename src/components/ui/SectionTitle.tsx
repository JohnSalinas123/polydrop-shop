import type { CSSProperties } from "react";

interface SectionTitleProps {
    text: string;
    as?: "h1" | "h2" | "h3" | "h4";
    fontSize?: CSSProperties['fontSize'];
}

export const SectionTitle = ({
    text,
    as: Tag = "h2",
    fontSize
}: SectionTitleProps) => {
    return (
        <>
            <Tag className="section-title" style={{fontSize : fontSize}}>{text}</Tag>   
        </>
    )
}   